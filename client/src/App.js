import React from "react";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Project Imports
import theme from "./assets/theme";
import { Button, Typography } from "@mui/material";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Typography variant="h6">Loading...</Typography>
			<Button color="primary" variant="contained">Hello</Button>
		</ThemeProvider>
	);
};

export default App;