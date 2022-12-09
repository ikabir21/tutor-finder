/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
export default function TutorCard({ name, category, image, phone : userId }) {
	return (
		<Card sx={{ width: 210, backgroundColor: "white" }}>
			<CardMedia
				component='img'
				height='150'
				image={image}
				alt='Tutor'
			/>
			<CardContent>
				<Typography variant='h5' component='p'>
					{name}
				</Typography>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant='caption' component='p' gutterBottom>
							{(Math.random() * 3 + 2).toFixed(1) }/5⭐
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							style={{ textAlign: "right" }}
							variant='caption'
							component='p'
							gutterBottom
						>
							{Math.floor(Math.random() * 10 + 10)} reviews
						</Typography>
					</Grid>
				</Grid>

				<Stack direction='row' spacing={1}>
					<Chip
						label={category}
						size='small'
						sx={{ backgroundColor: "black", color: "white" }}
					/>
					{/* <Chip
            label='Phy'
            size='small'
            sx={{ backgroundColor: 'black', color: 'white' }}
          />
          <Chip
            label='Chem'
            size='small'
            sx={{ backgroundColor: 'black', color: 'white' }}
          /> */}
				</Stack>
			</CardContent>
			<CardActions>
				<Button size='small' variant='contained' style={{ color: "white" }} component={Link} to ={`/tutor/${userId}`}>
          More Details
				</Button>
			</CardActions>
		</Card>
	);
}

TutorCard.propTypes = {
	name: PropTypes.string,
	category: PropTypes.string,
};
