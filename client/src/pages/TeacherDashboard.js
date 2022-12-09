import React, {useContext, useEffect, useState} from "react";
import {
	Typography,
	Button,
	Stack,
	Box,
	Avatar,
	TextField,
	Select,
	MenuItem,
	Popper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CContainer from "../components/CContainer";
import Course from "../components/Course";
import { AppContext } from "../context";
const TeacherDashboard = () => {
	const {state, actions} = useContext(AppContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [values, setValues] = useState({gender: "", name: "", designation: "", email: "", address: "", pin: "", state: "", profilePic: ""});

	useEffect(() => {
		if (state?.user) setValues(prev => ({...prev, gender: state.user.gender, name: state.user.name, designation: state.user.designation, email: state.user.email, address: state.user.address, pin: state.user.pin, state: state.user.state, profilePic: state.user.profilePic}));
	}, [state]);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	useEffect(() => {
		actions.getProfile();
	}, []);

	const updateDetails = () => {
		actions.updateProfile({...state.user, ...values});
	};
	const [open, setOpen] = useState(false);
	const [course, setCourse] = useState({subjectName: "", price: 0, startTime: "", endTime: ""});

	useEffect(() => {
		setOpen(Boolean(anchorEl));
	}, [Boolean(anchorEl)]);
	const close = () => {
		setOpen(false);
	};
	const id = open ? "simple-popper" : undefined;

	const addCourse = () => {
		actions.addCourse(course);
	};

	return (
		<CContainer>
			<Stack
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				spacing={2}
			>
				<Box
					sx={{
						p: 2,
						border: "1px solid black ",
						borderRadius: "15px",
						width: "600px",
					}}
				>
					<Typography gutterBottom variant='h5' component='h4'>
            Teacher Details
					</Typography>
					<Stack direction='column' justifyContent='space-evenly' spacing={3}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Typography component='h6' variant='h6' mr={4}>
                Address
							</Typography>
							<TextField
								value={values.address}
								rows={2}
								multiline
								variant='outlined'
								fullWidth
								onChange={(e) => setValues((prev) => ({...prev, address: e.target.value}))}
							/>
						</div>
						<Stack direction='row' justifyContent='space-between'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Typography component='h6' variant='h6' mr={4}>
                  Pin
								</Typography>
								<TextField value={values.pin} variant='outlined' onChange={(e) => setValues((prev) => ({...prev, pin: e.target.value}))} />
							</div>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Typography component='h6' variant='h6' mr={4}>
                  State
								</Typography>
								<TextField value={values.state} variant='outlined' onChange={(e) => setValues((prev) => ({...prev, state: e.target.value}))} />
							</div>
						</Stack>
						<Button variant='contained' onClick={updateDetails}>Save Details</Button>
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
						{values.designation}
					</Typography>
					<Typography variant='h6' component='h5'>
						{values.email}
					</Typography>
				</Stack>
			</Stack>

			<Box m={3}>
				<Typography variant='h5' component='h4' gutterBottom>
          Courses{" "}
					<Button
						variant='outlined'
						startIcon={<AddIcon />}
						onClick={handleClick}
					>
            Add Courses
					</Button>
					<Popper id={id} open={open} anchorEl={anchorEl}>
						<Box
							sx={{
								p: 2,
								border: "1px solid #F13778 ",
								borderRadius: "15px",
								bgcolor: "#eee",
								// color: "#eee"
								position: "relative"
							}}
						>
							<Stack direction="row" justifyContent="space-between">
								<Typography gutterBottom variant='body1' component='h6'>
                Add Courses
								</Typography>
								<Button sx={{borderRadius: "50%", minWidth: "30px", height: "30px", m: 0, p: 0, "& span": {
									m : 0
								}}} startIcon={<CloseIcon />} variant="contained" onClick={close} /></Stack>
							<Stack
								direction='column'
								justifyContent='space-evenly'
								spacing={3}
							>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Typography component='body2' variant='p' mr={4}>
                    Name
									</Typography>
									<TextField
										value={course.subjectName}
										variant='outlined'
										Size='small'
										onChange={(e) => setCourse(prev => ({...prev, subjectName: e.target.value}))}
										placeholder="Enter subject name"
									/>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Typography component='caption' variant='p' mr={4}>
                    Price
									</Typography>
									<TextField
										value={course.price}
										type="number"
										variant='outlined'
										Size='small'
										inputProps={{ min: 1 }}
										onChange={(e) => setCourse(prev => ({...prev, price: e.target.value}))}
									/>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Typography component='caption' variant='p' mr={4}>
                    Start Time
									</Typography>
									<TextField
										value={course.startTime}
										variant='outlined'
										Size='small'
										onChange={(e) => setCourse(prev => ({...prev, startTime: e.target.value}))}
										placeholder="Enter start time of tuition"
									/>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Typography component='caption' variant='p' mr={4}>
                    End Time
									</Typography>
									<TextField
										value={course.endTime}
										variant='outlined'
										Size='small'
										onChange={(e) => setCourse(prev => ({...prev, endTime: e.target.value}))}
										placeholder="Enter end time of tuition"
									/>
								</div>
								<Button variant='contained' onClick={addCourse}>Add</Button>
							</Stack>
						</Box>
					</Popper>
				</Typography>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					{state.user.subjectsTaught.map((sub, k) => <Course key={k} subjectName={sub.subjectName} price={sub.price} totalRating={sub.totalRating} classesTaught={state.user.classesTaught} />)}
				</div>
			</Box>
		</CContainer>
	);
};

export default TeacherDashboard;
