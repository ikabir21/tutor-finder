/* eslint-disable react/prop-types */
import * as React from "react";
import {useState, useContext}  from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CTextField from "./CTextField";
import Typography from "@mui/material/Typography";
import { AppContext } from "../context";

export default function BasicCard({className, name, date, subjectId, teacherId}) {
	const {state, actions} = useContext(AppContext);
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(2);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		console.log(ratingValue);
		setOpen(false);
	};
	const [ratingValue, setRatingValue] = useState(0);
	return (
		<Card sx={{ minWidth: 275 ,backgroundColor:"white"}}>
			<CardContent>
				<Grid container >
					<Grid item xs={7}><Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom style={{border:"1px solid black",padding:"3px"}}>
						{name} for {className}th
					</Typography></Grid>
					<Grid xs={1}></Grid>
					<Grid item xs={4}><Button variant="outlined" onClick={handleClickOpen}>
        Rate
					</Button>
					<Dialog open={open} onClose={handleClose} >
						<DialogTitle sx={{backgroundColor:"white"}}>Rate this course</DialogTitle>
						<DialogContent sx={{backgroundColor:"white"}}>
							
							<Rating sx={{backgroundColor:"grey"}}
								name="simple-controlled"
								value={ratingValue}
								onChange={(event, newValue) => {
									console.log(newValue);
									actions.rate({value: newValue, subjectId, teacherId});
									handleClose();
								}}
							/>
						</DialogContent>
						<DialogActions sx={{backgroundColor:"white"}}>
							<Button onClick={handleClose}>Close</Button>
							{/* <Button onClick={handleClose}>Subscribe</Button> */}
						</DialogActions>
					</Dialog></Grid>
				</Grid>

				<Typography variant='body2'>Joined on: {(new Date(date)).toDateString()}</Typography>
			</CardContent>
		</Card>
	);
}
