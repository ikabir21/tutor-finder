import React from "react";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Project Imports
import theme from "./assets/theme";
import Home from "./pages/Home";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;