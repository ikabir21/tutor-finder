import React from "react";

import {
	Typography,
	Button,
	Stack,
	Box,
	Avatar,

	Select,
	MenuItem,
} from "@mui/material";
import CContainer from "../components/CContainer";
import CourseTaken from "../components/CourseTaken";
import CTextField from "../components/CTextField";
const StudentDashboard = () => {
	return (
		<CContainer>
			<Stack
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				spacing={2}
			>
				<Box
					sx={{ p: 2, border: "1px solid ", height: "400px", width: "600px" }}
				>
					<Typography gutterBottom variant='h5' component='h4'>
            Student Details
					</Typography>
					<Stack direction='column' justifyContent='space-evenly' spacing={3}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Typography component='h6' variant='h6' mr={4}>
                Gender
							</Typography>
							<Select
								variant='outlined'
								fullWidth
								name='relationshipStatusData'
								i
							>
								<MenuItem value={0}>Male</MenuItem>
								<MenuItem value={1}>Female</MenuItem>
							</Select>
						</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Typography component='h6' variant='h6' mr={4}>
                Address
							</Typography>
							<CTextField
								defaultValue='Address'
								rows={2}
								multiline
								variant='outlined'
								fullWidth
							/>
						</div>
						<Stack direction='row' justifyContent='space-between'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Typography component='h6' variant='h6' mr={4}>
                  Pin
								</Typography>
								<CTextField defaultValue='Pin' variant='outlined' />
							</div>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Typography component='h6' variant='h6' mr={4}>
                  State
								</Typography>
								<CTextField defaultValue='State' variant='outlined' />
							</div>
						</Stack>
						<Button variant='contained'>Save Details</Button>
					</Stack>
				</Box>
				<Stack
					direction='column'
					justifyContent='space-evenly'
					alignItems='center'
					spacing={0}
				>
					<Avatar
						alt='Travis Howard'
						src='https://picsum.photos/200/300'
						style={{ height: "150px", width: "150px" }}
					/>

					<Typography variant='h5' component='h4'>
            Student name
					</Typography>
					<Typography variant='h6' component='h5'>
            email@gamil.com
					</Typography>
					<Typography variant='body1' component='h5'>
            Class 12th
					</Typography>
				</Stack>
			</Stack>

			<Box m={4} component='div'>
				<Typography variant='h5' component='h4' gutterBottom>
          Courses Taken
				</Typography>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<CourseTaken />
					<CourseTaken />
					<CourseTaken />
					<CourseTaken />
				</div>
			</Box>
		</CContainer>
	);
};

export default StudentDashboard;
