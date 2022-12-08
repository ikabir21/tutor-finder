/* eslint-disable no-case-declarations */
import {
	REGISTER,
	LOGIN,
	LOADING,
	LOGOUT,
	SET_PROFILE,
	SET_PAYMENTS,
	ADD_PROJECTS,
	DELETE_PROJECTS,
	EDIT_PROJECTS,
	EDIT_COURSE,
	DELETE_COURSE,
	ADD_COURSE,
} from "./constants";

export const initialState = {
	loading: false,
	isAuth: localStorage.getItem("isAuth")
		? JSON.parse(localStorage.getItem("isAuth"))
		: false,
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: {},
	alerts: [],
	isProfileComplete: localStorage.getItem("isProfileComplete")
		? JSON.parse(localStorage.getItem("isProfileComplete"))
		: false,
};

const reducer = (state, action) => {
	switch (action.type) {
	case LOADING:
		return {
			...state,
			loading: true,
		};

	case REGISTER:
	case LOGIN:
		const user = {
			_id: action.payload._id,
			accessToken: action.payload.token,
			...action.payload.user
		};
		console.log(user);
		localStorage.setItem("isAuth", JSON.stringify(true));
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
		localStorage.setItem("isProfileComplete", JSON.stringify(user.isProfileComplete));
		return {
			...state,
			isAuth: true,
			user: user,
			loading: false,
			isProfileComplete: user.isProfileComplete
		};

	case LOGOUT:
		localStorage.removeItem("user");
		localStorage.removeItem("isAuth");
		localStorage.removeItem("isProfileComplete");
		localStorage.removeItem("accessToken");
		return {
			isAuth: false,
			user: {},
			isProfileComplete: false
		};

	case SET_PROFILE:
		const profile = {
			name: action.payload.name,
			personalEmail: action.payload.personalEmail,
			instituteEmail: action.payload.instituteEmail,
			scholarId: action.payload.scholarId,
			mobile: action.payload.mobile,
			branch: action.payload.branch,
			projects: action.payload.projects,
			cgpa: action.payload.cgpa,
			results: action.payload.results,
		};
		localStorage.setItem("profile", JSON.stringify(profile));
		localStorage.setItem("isAdmin", JSON.stringify(action.payload.isAdmin));
		return { ...state, profile };

	case SET_PAYMENTS:
		const payments = {
			accountNo: action.payload.bankDetails.accountNo,
			accountHolderName: action.payload.bankDetails.accountHolderName,
			ifscCode: action.payload.bankDetails.ifscCode,
			branchName: action.payload.bankDetails.branchName,
			bankName: action.payload.bankDetails.bankName,
			prevPayments: action.payload.prevPayments,
		};
		console.log(action.payload, payments);
		localStorage.setItem("payments", JSON.stringify(payments));
		return { ...state, payments };
	case ADD_PROJECTS:
		return {
			...state,
			profile: {
				...state.profile,
				projects: [...state.profile.projects, action.payload],
			},
		};
	case ADD_COURSE:
		return {
			...state,
			profile: {
				...state.profile,
				results: [...state.profile.results, action.payload],
			},
		};
	case DELETE_PROJECTS:
		const projects = state.profile?.projects?.filter(
			(el) => el._id !== action.payload
		);
		return {
			...state,
			profile: {
				...state.profile,
				projects,
			},
		};
	case DELETE_COURSE:
		const results = state.profile?.results?.filter(
			(el) => el._id !== action.payload
		);
		return {
			...state,
			profile: {
				...state.profile,
				results,
			},
		};
	case EDIT_PROJECTS:
		const oldProjects = [];
		state.profile?.projects?.forEach((el) => {
			if (el._id === action.payload._id) oldProjects.push(action.payload);
			else oldProjects.push(el);
		});
		return {
			...state,
			profile: {
				...state.profile,
				projects: oldProjects,
			},
		};
	case EDIT_COURSE:
		const oldResults = [];
		state.profile?.results?.forEach((el) => {
			if (el._id === action.payload._id) oldResults.push(action.payload);
			else oldResults.push(el);
		});
		return {
			...state,
			profile: {
				...state.profile,
				results: oldResults,
			},
		};
	default:
		return state;
	}
};

export default reducer;
