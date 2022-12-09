import Axios from "../api";
import {
	LOADING,
	LOGOUT,
	REGISTER,
	SET_PROFILE,
	UPLOAD_FILE,
	ADD_PROJECTS,
	DELETE_PROJECTS,
	EDIT_PROJECTS,
	DELETE_COURSE,
	EDIT_COURSE,
	UPDATE_PROFILE,
	ADD_COURSE
} from "./constants";
import Swal from "sweetalert2";

const getActions = (dispatch) => {
	return {
		login: async (user) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/user/login", user);
				console.log(data);
				dispatch({ type: REGISTER, payload: data });
				Swal.fire({
					position: "center",
					icon: "success",
					title: "You are logged in succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
				setTimeout(() => {
					window.location.href = "/";
				}, 1800);
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "center",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		register: async (user) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/user/register", user);
				console.log(data);
				dispatch({ type: REGISTER, payload: data });
				Swal.fire({
					position: "center",
					icon: "success",
					title: "You are registered succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
				setTimeout(() => {
					window.location.href = "/";
				}, 1800);
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Already Registered"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		logout: () => {
			dispatch({ type: LOGOUT });
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Logged out succesfully!",
				showConfirmButton: false,
				timer: 1500,
			});
		},
		getProfile: async () => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.get("/user/profile");
				console.log(data);
				dispatch({ type: SET_PROFILE, payload: data });
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;

				// alert(msg);
				// window.location.href = "/auth";
				Swal.fire({
					position: "center",
					icon: "error",
					title: msg,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		updateProfile: async (user) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/user/profile", user);
				console.log(data);
				dispatch({ type: UPDATE_PROFILE, payload: data });
				setTimeout(() => {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Profile updated successfully!",
						showConfirmButton: false,
						timer: 1500,
					});
				}, 1800);
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;

				// alert(msg);
				Swal.fire({
					position: "center",
					icon: "error",
					title: msg,
					showConfirmButton: false,
					timer: 1500,
				});
				// window.location.href = "/auth";
			}
		},
		uploadResults: async (formData) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/upload", formData);
				dispatch({ type: UPLOAD_FILE, payload: data });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "File uploaded succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		addProjects: async (projects) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/add-projects", projects);
				dispatch({ type: ADD_PROJECTS, payload: projects });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Project added succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		addCourse: async (course) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.post("/add-subject", course);
				dispatch({ type: ADD_COURSE, payload: course });
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Subject added succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		deleteProjects: async (id) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.delete(`/delete-projects/${id}`);
				dispatch({ type: DELETE_PROJECTS, payload: id });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Course deleted succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		deleteCourse: async (id) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.delete(`/delete-results/${id}`);
				dispatch({ type: DELETE_COURSE, payload: id });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Course deleted succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		editProjects: async (project, id) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.put(`/edit-projects/${id}`, project);
				dispatch({ type: EDIT_PROJECTS, payload: project });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Project edited succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		editCourse: async (result, id) => {
			dispatch({ type: LOADING });
			try {
				const { data } = await Axios.put(`/edit-results/${id}`, result);
				dispatch({ type: EDIT_COURSE, payload: result });
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Course edited succesfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				const msg =
					error.response.status === 401
						? "Access Denied"
						: error.response && error.response?.data?.message
							? error.response?.data?.message
							: error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${msg}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
	};
};

export default getActions;
