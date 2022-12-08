import { createTheme, responsiveFontSizes } from "@mui/material/styles";


/*
colors
1. a) #F38181, b) #FCE38A, c) #EAFFD0, d) #95E1D3
2. a) #222831, b) #393E46, c) #00ADB5, d) #EEEEEE

fonts
1. Normal === 'Roboto', sans-serif
2. Subheading === font-family: 'Montserrat', sans-serif;
3. Heading === font-family: 'Lobster', cursive;
*/

const theme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"*": {
					margin: 0,
					padding: 0,
					boxSizing: "border-box",
				},
				// a: {
				// 	textDecoration: "none",
				// 	color: "inherit"
				// },
				// html: {
				// 	MozOsxFontSmoothing: "grayscale",
				// 	WebkitFontSmoothing: "antialiased",
				// 	display: "flex",
				// 	flexDirection: "column",
				// 	minHeight: "100%",
				// 	width: "100%"
				// },
				// body: {
				// 	display: "flex",
				// 	flex: "1 1 auto",
				// 	flexDirection: "column",
				// 	minHeight: "100%",
				// 	width: "100%"
				// }
			}
		},
		// MuiAppBar: {
		// 	styleOverrides: {
		// 		colorPrimary: {
		// 			backgroundColor: "#222B45",
		// 			color: "#eee"
		// 		}
		// 	}
		// },
		// MuiButton: {
		// 	styleOverrides: {
		// 		root: {
		// 			color: "#fff",
		// 			textTransform: "inherit"
		// 		}
		// 	}
		// }
	},
	direction: "ltr",
	mixins: {
		toolbar: {
			minHeight: 56,
			"@media (min-width:0px) and (orientation: landscape)": {
				minHeight: 48
			},
			"@media (min-width:600px)": { minHeight: 64 }
		}
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: ["Roboto", "Montserrat", "Open Sans"].join(","),
		fontSize: 14,
		fontWeightLight: 400,
		fontWeightRegular: 400,
		fontWeightMedium: 400,
		fontWeightBold: 400,
		color: "#222831",
		h1: {
			fontSize: "4.75rem",
			fontFamily: ["Roboto", "cursive"].join(","),
			fontWeight:"600"
		},
		h2: {
			fontSize: "4rem",
			fontFamily: ["Roboto", "cursive"].join(","),
			fontWeight:"600"
			
		},
		h3: {
			fontSize: "2.25rem",
			fontFamily: ["Montserrat", "Open Sans"].join(","),
			fontWeight: 700
		},
		h4: {
			fontSize: "2rem",
			fontFamily: ["Montserrat", "Open Sans"].join(","),
			fontWeight: 600
		},
		h5: {
			fontSize: "1.75rem",
			fontFamily: ["Roboto", "Open Sans"].join(","),
			fontWeight: 500
		},
		h6: {
			fontSize: "1.2rem",
			fontFamily: ["Roboto", "Open Sans"].join(","),
			fontWeight: 400
		},
		button: {
			fontSize: ".99rem"
		},
		body1: {
			fontSize: "1rem"
		},
		shape: { borderRadius: 0 }
	},
	palette: {
		mode: "dark",
		primary: {
			light: "#b27000",
			main: "#ffa000",
			dark: "#ffb333",
			contrastText: "rgba(0, 0, 0, 0.87)"
		},
		secondary: {
			light: "#b27000",
			main: "#ffa000",
			dark: "#ffb333",
			contrastText: "rgba(0, 0, 0, 0.87)"
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "rgba(0, 0, 0, 0.87)"
		},
		warning: {
			light: "#ffb74d",
			main: "#ff9800",
			dark: "#f57c00",
			contrastText: "rgba(0, 0, 0, 0.87)"
		},
		info: {
			light: "#64b5f6",
			main: "#2196f3",
			dark: "#1976d2",
			contrastText: "#rgba(0, 0, 0, 0.87)"
		},
		success: {
			light: "#81c784",
			main: "#4caf50",
			dark: "#388e3c",
			contrastText: "rgba(0, 0, 0, 0.87)"
		},
		grey: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#eeeeee",
			300: "#e0e0e0",
			400: "#bdbdbd",
			500: "#9e9e9e",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			A100: "#d5d5d5",
			A200: "#aaaaaa",
			A400: "#303030",
			A700: "#616161"
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		text: {
			primary: "#222831",
			secondary: "#393E46"
		},
		background: {
			paper: "#E5B323",
			default: "#eee"
		},
		action: {
			disabledOpacity: 0.38,
			focusOpacity: 0.12
		}
	}
});

export default responsiveFontSizes(theme);