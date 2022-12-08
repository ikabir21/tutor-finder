import React from "react";

import {Grid,TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Stack, Button } from "@mui/material";
import CContainer from "../components/CContainer";
import TutorCard from "../components/TutorCard";
const Search = () => {
	return (
		<CContainer>
			<div>
				<form
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "60px",
					}}
				>
					<TextField
						sx={{width:"300px"}}
						size="small"
						type='search'
						name='search-query'
						placeholder='Search by subject, tutor name...'
					/>
					<Button variant="contained" sx={{color:"white"}} startIcon={<SearchIcon/>}>Search</Button>
					
				</form>
			</div>
			<div style={{ margin: "1rem" }}>
				<Grid container spacing={2} sx={{maxWidth:"1000px",margin:"auto"}}  >
					<Grid item xs={6}><Typography variant='h6' component='p' gutterBottom>
            Top Rated Tutors near you
					</Typography></Grid>
					<Grid item xs={6} style={{textAlign:"right"}}><Button >See all</Button></Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
				</Grid>
			</div>
			{/* Physics */}
			<div style={{ margin: "1rem" }}>
				<Grid container spacing={2} sx={{maxWidth:"1000px",margin:"auto"}}  >
					<Grid item xs={6}><Typography variant='h6' component='p' gutterBottom>
            Physics Tutors near you
					</Typography></Grid>
					<Grid item xs={6} style={{textAlign:"right"}}><Button >See all</Button></Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
				</Grid>
			</div>

			{/* Chemistry */}
			<div style={{ margin: "1rem" }}>
				<Grid container spacing={2} sx={{maxWidth:"1000px",margin:"auto"}}  >
					<Grid item xs={6}><Typography variant='h6' component='p' gutterBottom>
            Chemistry Tutors near you
					</Typography></Grid>
					<Grid item xs={6} style={{textAlign:"right"}}><Button >See all</Button></Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
					<Grid item xs={3}>
						<TutorCard/>
					</Grid>
				</Grid>
			</div>
		</CContainer>
	);
};

export default Search;
