import Joi from "@hapi/joi";
import { SIGNIN, SIGNUP } from "../config/constants.js";

const validateUser = (user, authType) => {
	switch (authType) {
	case SIGNUP:
		console.log(SIGNUP);
		return Joi.object({
			name: Joi.string().required().min(3).max(20).label("Name"),

			email: Joi.string().email().required().min(5).label("Email"),

			password: Joi.string().required().min(6).label("Password"),
		}).validate(user);
	case SIGNIN:
		return Joi.object({
			email: Joi.string().email().required().min(5),
			password: Joi.string().required().min(6).label("Password"),
		}).validate(user);

	default:
		break;
	}
};

export default validateUser;
