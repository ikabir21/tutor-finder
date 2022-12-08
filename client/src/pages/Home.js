import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import CContainer from "../components/CContainer";
import Image from "../assets/images/Image_home.png";

const Home = () => {
	return (
		<CContainer>
			<Grid container justifyContent="center" alignItems="center" spacing={2} sx={{mt:2}}>
				<Grid item xs={6}>
					<Box>
						<Typography variant="h2" >Get a perfect <span style={{color:"#E5B323"}}>Tutor</span></Typography>
						<Typography variant="h6" sx={{mt:2}}>Say no to wandering in your city for tutors.
Join TUTOR FINDER to enroll for tution classes of verified tutors 
from the comfort of your home.</Typography>
						<Typography variant="h6">Or verify yourself and become tutors and find students.</Typography>
						<Button sx={{mt:2}} size="large" variant="contained">Get Started</Button>
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