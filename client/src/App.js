import React, { useContext } from "react";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// Project Imports

import theme from "./assets/theme";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import TutorProfile from "./pages/TutorProfile";
import Search from "./pages/Search";
import TeacherDashboard from "./pages/TeacherDashboard";
import { AppContext } from "./context";
import Swal from "sweetalert2";

const App = () => {
	const {state, actions} = useContext(AppContext);
	const {isAuth, isProfileComplete} = state;
	const pathname = (window.location.pathname !== "/teacher-dashboard") && (window.location.pathname !== "/student-dashboard");
	if (isAuth) {
		if (!isProfileComplete && pathname) {
			Swal.fire({
				title: "Select account type",
				input: "select",
				inputAttributes: {
					autocapitalize: "off"
				},
				inputOptions: {
					TEACHER: "Teacher",
					STUDENT: "Student"
				},
				inputPlaceholder: "Select account type",
				// showCancelButton: true,
				confirmButtonText: "Complete Profile",
				showLoaderOnConfirm: true,
				preConfirm: (accountType) => {
					return accountType;
				},
				allowOutsideClick: () => !Swal.isLoading()
			}).then((result) => {
				const accountType = result.value;
				if (result.isConfirmed) {
					if (accountType === "TEACHER") {
						window.location.href = "/teacher-dashboard";
					} else if (accountType === "STUDENT") {
						window.location.href = "/student-dashboard";
					}
				}
			});
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/auth' element={<Auth />}></Route>
					<Route path='/tutor' element={<TutorProfile />}></Route>
					<Route path='/search' element={<Search />}></Route>
					<Route path='/teacher-dashboard' element={<TeacherDashboard />}></Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};
export default App;
