import { Card, CardHeader, Avatar } from "@mui/material";
import React from "react";

const StudentReview = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "#545" }} aria-label='recipe'>
            R
					</Avatar>
				}
				title='Shrimp and Chorizo Paella'
				subheader='Some Travel Plans! We hope If you wish to unsubscribe, please click her'
			/>
		</Card>
	);
};
export default StudentReview;
