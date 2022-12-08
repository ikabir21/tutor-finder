import { SIGNIN, SIGNUP } from "../config/constants.js";
import validate from "../validators/validate.js";
import User from "../models/userModel.js";
import Subject from "../models/subjectModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res, next) => {
	const { error } = validate(req.body, SIGNUP);
	if (error) return next(new ErrorMessage(error.details[0].message, 400));

	const { name, email, password } = req.body;

	User.findOne({ email })
		.then((user) => {
			if (user) return next(new ErrorMessage("Already Registered", 401));
			console.log("object");
			User.create({ name, email, password })
				.then((user) => {
					if (user)
						return res.status(200).json({
							success: true,
							message: "Successfully registered!",
							_id: user._id,
							email: user.email,
							name: user.name,
							token: generateToken({ userId: user._id, email }),
						});
				})
				.catch((err) => next(err));
		})
		.catch((err) => next(err));
};

export const login = (req, res, next) => {
	const { error } = validate(req.body, SIGNIN);
	if (error) return next(new ErrorMessage(error.details[0].message, 400));
	const { email, password } = req.body;

	User.findOne({ email })
		.then((user) => {
			console.log(user);
			if (!user) return next(new ErrorMessage("User not found", 400));
			user.comparePassword(password, (err, isMatched) => {
				if (err) return next(err);
				if (!isMatched)
					return next(new ErrorMessage("Invalid Credntials", 401));
				res.status(200).json({
					success: true,
					message: "Successfully logged in",
					_id: user._id,
					email: user.email,
					name: user.name,
					token: generateToken({ userId: user._id, email }),
				});
			});
		})
		.catch((err) => next(err));
};

export const updateProfile = (req, res, next) => {
	const {
		name, 
		accountType, 
		address, 
		city, 
		pin, 
		state,
		schoolName, 
		className, 
		coursesTaken = [], 
		subjectsTaught = []
	} = req.body;
	const email = req.user.email;
	const userId = req.user.userId;
	if (!userId) next(new ErrorMessage("Access denied", 401));
	User.findOne({email})
		.then((user) => {
			if (!user) return next(new ErrorMessage("User not registered", 400));
			User.updateOne({email}, {
				name,
				accountType,
				address,
				city,
				pin,
				state,
				schoolName,
				className,
				coursesTaken,
				subjectsTaught
			}, {new: true})
				.then(async (obj) => {
					if (checkCompleteProfile({name, email, address, city, pin, state, schoolName, className, accountType})) {
						await User.updateOne({email}, {isProfileComplete: true});
					}
					console.log(obj);
					res.status(200).json({
						success: true,
						message: "Successfully updated profile",
						_id: obj._id
					});
				});
		});
};


export const addSubject = (req, res, next) => {
	const {subjectName, price, startTime, endTime} = req.body;
	const userId = req.user.userId;
	console.log(req.body);
	Subject.create({subjectName, price, startTime, endTime, ownerId: userId})
		.then((obj) => {
			if (obj)
				return res.status(200).json({
					success: true,
					message: "Successfully entered subject!",
					_id: obj._id
				});
		})
		.catch((err) => next(err));
};


export const changePassword = async (req, res, next) => {
	const {oldPassword, newPassword} = req.body;
	console.log(req.user);
	const userId = req.user.userId;
	// const userId = "639036c8935b81caaece8ba1";
	const user = await User.findById(userId);
	if (!user) return next(new ErrorMessage("User not found", 400));
	user.comparePassword(oldPassword, async (err, isMatched) => {
		if (err) return next(err);
		if (!isMatched)
			return next(new ErrorMessage("Invalid Credntials", 401));
		user.password = newPassword;
		user.save((err, doc) => {
			if (err) return next(err);
			return res.status(200).json({ success: true, message: "Password changed successfully!" });
		});
	});
};

export const getProfile = (req, res, next) => {
	const userId = req.user.userId;
	if (!userId) next(new ErrorMessage("Access denied", 401));
	User.findById(userId).select("-password")
		.then((user) => {
			if (!user) return next(new ErrorMessage("User not found", 400));
			return res.status(200).json({success: true, user});
		});
};


const checkCompleteProfile = ({name, email, address, city, pin, state, schoolName, className, accountType}) => {
	// console.log({name, email, address, city, pin, state, schoolName, className, accountType});
	const a = name && email && address && city && pin && state;
	if (accountType === "TEACHER") {
		return a;
	}
	if (accountType === "STUDENT") {
		return a && schoolName && className;
	}
	return false;
};