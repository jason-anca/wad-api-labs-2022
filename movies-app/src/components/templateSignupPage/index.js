import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Navigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../../contexts/authContext"

const TemplateSignupPage = props => {
  const context = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    context.register(username, password)
    // return <Navigate to={"/login"} />;
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Box component ="div" pt={10} sx={{ justifyContent:'center', display: 'flex' }}>
          <Typography component="h2" variant="h3">
            Sign Up to TMDB
          </Typography>
        </Box>
        <Box component ="div" pt={5} sx={{ justifyContent:'center', display: 'flex'}}>
          <TextField
           id="username"
            label="Username"
           type="text"
           onChange={e => {setUsername(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ justifyContent:'center',display: 'flex'}}>
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={e => {setPassword(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ justifyContent:'center',display: 'flex', color:'orange'}}>
          <Button
          variant="contained"
          color="primary"
          sx = {{ backgroundColor: "orange" }}
          onClick={register}
          >
            Sign Up
          </Button>
        </Box> 
    </>
  );
};

export default TemplateSignupPage;