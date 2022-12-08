import React,{useState} from "react";

import CContainer from "../components/CContainer";
import Image from "../assets/images/Pattern.png";
import { AppContext } from "../context";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Auth() {
	const { state, actions } = React.useContext(AppContext);
	// console.log(state);
	// if (state.isAuth) {
	// 	if (state.isCompleteProfile) {
			
	// 	}
	// 	history.push("");
	// }

	const [isSignup,setIsSignup]=useState(false);
	const [values,setValues]=useState({
		name:"",email:"",password:"",showPassword:true
	});

	function onChange(e) {
		setValues({...values,[e.target.name]:e.target.value});
	}
	function handleClickShowPassword(e) {

		setValues({...values,showPassword:!values.showPassword});
	}
	function onSubmit(e) {
		!isSignup ? actions.login({email: values.email, password: values.password}) : actions.register({name: values.name, email: values.email, password: values.password});
		setValues({name:"",email:"",password:"",showPassword:false});
		e.preventDefault();
	}
	
	return (
		<div style={{backgroundImage:`url(${Image})`, height:"100vh",display:"grid",alignItems:"center",backgroundSize:"cover"}}>
			{isSignup&&(<form action="">
				<Box sx={{backgroundColor:"#fffffd",display:"flex",flexDirection:"column",maxWidth:"400px",margin:"auto",p:"40px",borderRadius:"10px",boxShadow:2}}>
					<Typography margin="normal" variant="h3" align="center">Registration</Typography>
					<TextField required onChange={onChange} name="name" value={values.name} sx={{mt:2}} variant="outlined" type={"text"} label="Name" />
					<TextField required onChange={onChange} name="email" value={values.email} sx={{mt:2}} variant="outlined" type={"email"} label="Email"/>
					<TextField required onChange={onChange} name="password" value={values.password} sx={{mt:2}} variant="outlined" type={values.showPassword?"text":"password"} label="Password" 
						InputProps={{
							endAdornment: (
								<InputAdornment>
									<IconButton color="success" onClick={handleClickShowPassword}>
										{values.showPassword?<Visibility />:<VisibilityOff/>}
									</IconButton>
								</InputAdornment>
							)
						}}/>
					<Button sx={{mt:1}} variant="contained" onClick={onSubmit}>Register</Button>
					<Button sx={{mt:1}} variant="text" onClick={()=>{setIsSignup(false);}}>Already a member? Log in</Button>
				</Box>
			</form>)}
			{!isSignup&&(<form action="">
				<Box sx={{backgroundColor:"#fffffd",display:"flex",flexDirection:"column",maxWidth:"400px",margin:"auto",p:"40px",borderRadius:"10px",boxShadow:2}}>
					<Typography margin="normal" variant="h3" align="center">Login</Typography>
					
					<TextField required onChange={onChange} name="email" value={values.email} sx={{mt:2}} variant="outlined" type={"email"} label="Email"/>
					<TextField required onChange={onChange} name="password" value={values.password} sx={{mt:2}} variant="outlined" type={values.showPassword?"text":"password"} label="Password" 
						InputProps={{
							endAdornment: (
								<InputAdornment>
									<IconButton color="success" onClick={handleClickShowPassword}>
										{values.showPassword?<Visibility />:<VisibilityOff/>}
									</IconButton>
								</InputAdornment>
							)
						}}/>
					<Button sx={{mt:1}} variant="contained" onClick={onSubmit} >Login</Button>
					<Button sx={{mt:1}} onClick={()=>{setIsSignup(true);}} variant="text">Register</Button>
				</Box>
			</form>)}
		</div>
	);
}
