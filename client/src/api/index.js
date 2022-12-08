import axios from "axios";

// eslint-disable-next-line no-undef
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:4000";

// const accessToken = localStorage.getItem("accessToken");
const accessToken = localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null;

const Axios = axios.create({
	baseURL: ENDPOINT,
	// withCredentials: true,
	headers: {
		"Access-Controll-Allow-origin": "*",
		Authorization: `Bearer ${accessToken}`
	}
});

export default Axios;
