import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import gravatar from "gravatar";

const SALT_WORK_FACTOR = 12;

const userSchema = mongoose.Schema(
	{
		name: { type: String},
		email: { type: String, unique: true },
		password: { type: String },
		accountType: {type: String, enum: ["STUDENT", "TEACHER", "ADMIN"], default: "STUDENT"},
		address: {type: String, default: ""},
		designation: {type: String, default: ""},
		city: {type: String, default: ""},
		pin: {type: String, default: ""},
		state: {type: String, default: ""},
		profilePic: {type: String, default: ""},
		isProfileComplete: {type: Boolean, default: false},
		schoolName: {type: String, default: ""},
		className: {type: String, default: ""},
		coursesTaken: [
			{
				type: Schema.Types.ObjectId,
				ref: "Subject"
			}
		],
		subjectsTaught: [
			{
				type: Schema.Types.ObjectId,
				ref: "Subject"
			}
		]
	},
	{ timestamps: true }
);

userSchema.pre("save", function(next) {
	this.profilePic = gravatar.url(
		this.email,
		{ s: "100", r: "x", d: "retro" },
		true
	);
	next();
});

userSchema.pre("save", function (next) {
	if (this.isModified("password")) {
		bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
			if (err) return next(err);

			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) return next(err);

				this.password = hash;
				next();
			});
		});
	}
});

userSchema.methods.comparePassword = async function (password, next) {
	return bcrypt.compare(password, this.password, (err, isMatched) => {
		if (err) next(err);
		else next(null, isMatched);
	});
};

const User = mongoose.model("User", userSchema);
export default User;
