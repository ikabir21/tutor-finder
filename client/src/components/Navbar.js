import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	const navItems = ["Home", "About", "Contact"];

	return (
		<AppBar component="nav">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
				>
            MUI
				</Typography>
				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: "#fff" }}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;