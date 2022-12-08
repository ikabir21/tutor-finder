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
				value: {type: Number},
				userId: {type: mongoose.Schema.ObjectId, ref: "User"}
			}
		]
	},
	{ timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;