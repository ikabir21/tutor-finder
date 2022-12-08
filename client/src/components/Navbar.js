import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import { AppContext } from "../context";

const Navbar = () => {
	const [login, setLogin] = useState(false);
	const navItems = ["Home", "Explore", "Login"];
	const {state, actions} = useContext(AppContext);

	const handleLogin = () => {
		if (state.isAuth) {
			actions.logout();
		} else {
			window.location.href = "/auth";
		}
	};

	return (
		<AppBar component='nav'>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant='h6'
					component={Link}
					to="/"
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "block" },
						color: "#fff",
						textDecoration: "none"
					}}
				>
          Tutor Finder
				</Typography>
				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					<Button sx={{ color: "#fff" }} component={Link} to="/">
							Home
					</Button>
					<Button sx={{ color: "#fff" }} component={Link} to="/search">
							Explore
					</Button>
					{state.isAuth && (
						<Button sx={{ color: "#fff" }} component={Link} to={state.user?.accountType === "TEACHER" ? "/teacher-dashboard" : "/student-dashboard"}>
							Dashboard
						</Button>
					)}
					<Button sx={{ color: "#fff" }} onClick={handleLogin}>
						{state.isAuth ? "Logout" : "Login"}
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
