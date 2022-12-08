import { RATING, SIGNIN, SIGNUP } from "../config/constants.js";
import validate from "../validators/validate.js";
import User from "../models/userModel.js";
import Subject from "../models/subjectModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";
import mongoose from "mongoose";

export const addRating = async (req, res, next) => {
	const { value, subjectId, teacherId : ownerId } = req.body;
	const { error } = validate({value}, RATING);
	if (error) return next(new ErrorMessage(error.details[0].message, 400));

	const userId = req.user.userId;


	Subject.findOne({_id: mongoose.Types.ObjectId(subjectId), ownerId: mongoose.Types.ObjectId(ownerId)})
		.then((sub) => {
			if (!sub) return next(new ErrorMessage("Not subject found", 400));
			let rating = sub.rating;
			let sumOfRating = 0;
			const isAlreadyRated = rating.find(rat => JSON.stringify(rat.userId) === JSON.stringify(userId));
			console.log(isAlreadyRated, "hello");
			if (isAlreadyRated) return next(new ErrorMessage("Already rated", 400));
			rating.forEach((rat) => {
				sumOfRating += rat.value;
			});
			const totalRatingCount = rating.length + 1;
			const finalRating = (sumOfRating + value) / totalRatingCount;
			rating.push({value, userId: mongoose.Types.ObjectId(userId)});
			Subject.updateOne({ _id: mongoose.Types.ObjectId(sub._id) }, {
				$set: {
					rating,
					totalRating: finalRating,
					totalRatingCount
				}
			})
				.then((obj) => {
					return res.status(200).json({
						success: true,
						message: "Rating updated successfully!",
						_id: sub._id,
						ratingArr: rating,
						totalRating: finalRating,
						totalRatingCount
					});
				})
				.catch((err) => next(err));
		})
		.catch((err) => next(err));
};


export const getRatiing = async (req, res, next) => {
	const subjectId = req.params.subjectId;
	Subject.findById(subjectId).then(sub => {
		return res.status(200).json({
			success: true,
			_id: sub._id,
			ratingArr: sub.rating,
			totalRating: sub.totalRating,
			totalRatingCount: sub.totalRatingCount
		});
	});
};