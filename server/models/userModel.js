import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 12;

const userSchema = mongoose.Schema(
	{
		name: { type: String, default: "" },
		email: { type: String, unique: true },
		mobile: { type: String },
		isEmailVerified: { type: Boolean, default: false },
		password: { type: String, default: "" },
		shiftCount: { type: Number, default: 2 },
	},
	{ timestamps: true }
);

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
