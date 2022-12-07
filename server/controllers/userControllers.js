import { SIGNIN, SIGNUP } from "../config/constants.js";
import validate from "../validators/validate.js";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res, next) => {
	// const { error } = validate(req.body, SIGNUP);
	// if (error) return next(new ErrorMessage(error.details[0].message, 400));

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
							token: generateToken({ _id: user._id, email }),
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
					token: generateToken({ _id: user._id, email }),
				});
			});
		})
		.catch((err) => next(err));
};

export const updateProfile = (req, res, next) => {
	const {
		name, 
		email, 
		password, 
		accountType, 
		address, 
		city, 
		pin, 
		state,
		schoolName, 
		className, 
		coursesTaken=[], 
		subjectsTaught = []
	} = req.body;
};
