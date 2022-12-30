import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Navigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../../contexts/authContext"


const TemplateLoginPage = props => {
  const context = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(username, password);
  };

  return (
    <>
        <Box component ="div" pt={10} sx={{ display: 'flex'}}>
          <Typography component="h2" variant="h3">
            Log into TMDB
          </Typography>
        </Box>
        <Box component ="div" pt={5} sx={{ display: 'flex'}}>
          <TextField
           id="username"
            label="Username"
           type="text"
           autoFocus
           onChange={e => {setUsername(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ display: 'flex'}}>
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={e => {setPassword(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ display: 'flex'}}>
          <Button
          variant="contained"
          color="primary"
          onClick={login}
          >
            Log in
          </Button>
        </Box> 
    </>
  );
};

export default TemplateLoginPage;