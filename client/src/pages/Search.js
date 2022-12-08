import React from "react";
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
					<input
						style={{
							width: "500px",
							height: "35px",

							padding: "5px",
						}}
						type='search'
						name='search-query'
						placeholder='Search By subject, Tutor name'
					/>
					<SearchIcon
						style={{
							width: "35px",
							height: "35px",
							padding: "5px",
							margin: "0 1rem",
							backgroundColor: "yellow",
						}}
					/>
				</form>
			</div>
			<div style={{ margin: "1rem" }}>
				<Stack direction='row' justifyContent='space-between' spacing={2}>
					<Typography variant='h6' component='p' gutterBottom>
            Top Rated Tutor near you
					</Typography>
					<Button>See all</Button>
				</Stack>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
				>
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
				</Stack>
			</div>
			{/* Physics */}
			<div style={{ margin: "1rem" }}>
				<Stack direction='row' justifyContent='space-between' spacing={2}>
					<Typography variant='h6' component='p' gutterBottom>
            Physics near you
					</Typography>
					<Button>See all</Button>
				</Stack>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
				>
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
				</Stack>
			</div>

			{/* Chemistry */}
			<div style={{ margin: "1rem" }}>
				<Stack direction='row' justifyContent='space-between' spacing={2}>
					<Typography variant='h6' component='p' gutterBottom>
            Chemistry near you
					</Typography>
					<Button>See all</Button>
				</Stack>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
				>
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
				</Stack>
			</div>
		</CContainer>
	);
};

export default Search;
