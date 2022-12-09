import React,{useState, useEffect, useContext} from "react";

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
import { AppContext } from "../context";

const StudentDashboard = () => {
	const {state, actions} = useContext(AppContext);
	const [values, setValues] = useState({gender: "", name: "", email: "", address: "", pin: "", state: "", profilePic: "", coursesTaken: [], className: ""});
	console.log(state);
	useEffect(() => {
		actions.getProfile();
	}, []);
	useEffect(() => {
		if (state?.user) setValues(prev => ({...prev, gender: state.user.gender, name: state.user.name, email: state.user.email, address: state.user.address, pin: state.user.pin, state: state.user.state, profilePic: state.user.profilePic, coursesTaken: state.coursesTaken, className: state.user.className}));
	}, [state]);

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
                Address
							</Typography>
							<CTextField
								value={values.address}
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
								<CTextField value={values.pin} variant='outlined' />
							</div>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Typography component='h6' variant='h6' mr={4}>
                  State
								</Typography>
								<CTextField value={values.state} variant='outlined' />
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
						alt={values.name}
						src={values.profilePic}
						style={{ height: "150px", width: "150px" }}
					/>

					<Typography variant='h5' component='h4'>
						{values.name} ({values.gender === "MALE" ? "M" : values.gender === "FEMALE" ? "F" : "Non Binary"})
					</Typography>
					<Typography variant='h6' component='h5'>
						{values.email}
					</Typography>
					<Typography variant='body1' component='h5'>
            Class {values.className}th
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
					{state.coursesTaken.map((course, k) => <CourseTaken key={k} name={course.name} date={course.joinedAt} />)}
				</div>
			</Box>
		</CContainer>
	);
};

export default StudentDashboard;
