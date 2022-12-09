import { alpha, styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

const CTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "green",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "green",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "red",
		},
		"&:hover fieldset": {
			borderColor: "red",
		},
		"&.Mui-focused fieldset": {
			borderColor: "green",
		},
	},
});

export default CTextField;