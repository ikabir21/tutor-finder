import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import CContainer from "../components/CContainer";
import Image from "../assets/images/Image_home.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<CContainer>
			<Grid container justifyContent="center" alignItems="center" spacing={2} sx={{mt:2}}>
				<Grid item xs={6}>
					<Box>
						<Typography variant="h2" >Get a perfect <span style={{color:"#FD2D71"}}>Tutor</span></Typography>
						<Typography variant="h6" sx={{mt:2, textAlign: "justify"}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						</Typography>
						<Button sx={{mt:2}} size="large" variant="contained" component={Link} to="/auth">Get Started</Button>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box component="img" sx={{width:"100%"}} src={Image}>
					</Box>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid>
		</CContainer>
	);
};

export default Home;