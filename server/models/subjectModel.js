import mongoose from "mongoose";

const subjectSchema = mongoose.Schema(
	{
		subjectName: {type: String},
		price: {type: Number},
		startTime: {type: String},
		endTime: {type: String},
		ownerId: {type: mongoose.Schema.ObjectId, ref: "User"},
		rating : [
			{
				value: {type: Number, enum: [0, 1, 2, 3, 4, 5]},
				userId: {type: mongoose.Schema.ObjectId, ref: "User"}
			}
		],
		totalRating: {type: Number},
		totalRatingCount: {type: Number}
	},
	{ timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;