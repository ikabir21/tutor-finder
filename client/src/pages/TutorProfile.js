import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/StarBorderPurple500";
import SchoolIcon from "@mui/icons-material/School";
import CContainer from "../components/CContainer";
import StudentReview from "../components/StudentReview";

const tutorData = {
	name: "Bright Mind classes",
	image: "https://picsum.photos/400/300",
	location: "Goyal compound, Lalkuan, Uttarakhand",
	tutorName: "Reeya den",
	education: "Bsc from Mysore",
	rating: "4.5",
	totalReview: "1.3 k",
	subjectsOffer: [
		{ name: "Mathematics", price: "100",class:"X" },
		{ name: "English", price: "200" ,class:"XI"},
	],
};

const TutorProfile = () => {
	return (
		<CContainer>
		
			<Grid container spacing={2}  alignItems="center" sx={{maxWidth:"80vw",margin:"auto"}}>
				<Grid item xs={5} >
					<img src={tutorData.image} style={{width:"100%",border:"2px solid grey"}}/>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={6} >
					<Typography variant='h3' component='h3'>
						{tutorData.name}
					</Typography>
					<div style={{color:"#37474F"}}>
						<LocationOnIcon /> {tutorData.location}
					</div>
					<Typography variant='body1' component='body1' style={{color:"#37474F",marginTop:"4px"}}>
              About the tutor
					</Typography>
					<Box component='div' sx={{ p: 2, border: "1px solid grey",borderRadius:"10px" }}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								margin: "3px 0",
							}}
						>
							<div>
								<Typography variant='h5' component='h5'>
									{tutorData.tutorName}
								</Typography>
								<Typography variant='subtitle1' component='p' style={{color:"#37474F"}}> 
🎓{tutorData.education}
								</Typography>
							</div>
							<div>
								<Typography variant='h5' component='h5'>
								⭐ {tutorData.rating}/5
								</Typography>
								<Typography variant='subtitle1' component='p' sx={{textAlign:"right"}}>
									{tutorData.totalReview} reviews
								</Typography>
							</div>
						</div>
						<Typography variant='body1' component='p'style={{color:"#37474F"}}>
                Subjects Offered:
						</Typography>
						{tutorData.subjectsOffer.map((data, idx) => {
							return (
								<Grid key={idx} container alignItems="center" sx={{mt:0.2}}   >
									<Grid item xs={6}  style={{border:"1px solid black",padding:"3px"}} >
										<p>{data.name} for class {data.class}th</p>
									</Grid>
									<Grid item xs={1}></Grid>
									<Grid item xs={5}><Button sx={{width:"100%",color:"white"}} variant="contained">Enroll@{data.price}</Button></Grid>
								</Grid>
							);
						})}
					</Box>
				</Grid>
			</Grid>
			
			<br />
			
			<Grid container sx={{maxWidth:"1000px",margin:"auto"}} spacing={2}>
				<Grid item  xs={12}><Typography variant="h5" sx={{m:"auto"}}>Students Reviews</Typography></Grid>
				{/* <Typog raphy variant="h5" sx={{m:"auto"}}>Students Reviews</Typography>/ */}
				<Grid item  xs={4}><StudentReview/></Grid>
				<Grid item  xs={4}><StudentReview/></Grid>
				<Grid item  xs={4}><StudentReview/></Grid>
			</Grid>
				
		</CContainer>
	);
};

export default TutorProfile;
