import { Card, CardHeader, Avatar } from "@mui/material";
import React from "react";

import {  Grid} from "@mui/material";

const StudentReview = () => {
	return (
		<Card sx={{ maxWidth: 345 ,backgroundColor:"white",padding:"10px"}}>
			<Grid container spacing={2}>
				<Grid item xs={3}><CardHeader
					avatar={
						<Avatar sx={{ bgcolor: "#545" }} aria-label='recipe'>
            R
						</Avatar>
					}
				/></Grid>
				<Grid item xs={9} container >
					<Grid item xs={6} sx={{color:"#395267"}}>
						<p>Rahul Arya</p>
					</Grid>
					<Grid item xs={6} sx={{color:"#395267"}}>
						<p style={{textAlign:"right"}}>18-04-2021</p>
					</Grid>
					<Grid item xs={12} >
						<p >Teacher is good but is costly. Scored good marks. Will recommend.</p>
					</Grid>
				</Grid>
			</Grid>
			
		</Card>
	);
};
export default StudentReview;
