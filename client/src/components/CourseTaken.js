/* eslint-disable react/prop-types */
import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function BasicCard({name, date}) {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{name}
				</Typography>

				<Typography variant='body2'>Joined on: {(new Date(date)).toDateString()}</Typography>
			</CardContent>
		</Card>
	);
}
