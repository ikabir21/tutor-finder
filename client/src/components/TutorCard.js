import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function TutorCard() {
	return (
		<Card sx={{ width: 210 }}>
			<CardMedia
				component='img'
				height='150'
				image='https://picsum.photos/200/300'
				alt='Tutor'
			/>
			<CardContent>
				<Typography variant='h5' component='p'>
          Lizard
				</Typography>
				<Typography variant='caption' component='p' gutterBottom>
          Bsc from LPU
				</Typography>

				<Stack direction='row' spacing={1}>
					<Chip label='Math' size='small' />
					<Chip label='Phy' size='small' />
					<Chip label='Chem' size='small' />
				</Stack>
			</CardContent>
			<CardActions>
				<Button size='small' style={{ color: "white" }}>
          More Details
				</Button>
			</CardActions>
		</Card>
	);
}
