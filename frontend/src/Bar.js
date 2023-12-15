import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Bar(props) {
  const [username,setUsername]=useState();
  useEffect(()=>{
fetch('http://localhost:3001/admin/me',{
method:'GET',
headers: {
  "Content-type": "application/json",
 
    "Access-Control-Allow-Origin": "*"
  ,
  Authorization: "Bearer " + localStorage.getItem("token"),
}},


).then((res)=>(res.json().then(

(data)=>{
console.log(data.username);
setUsername(data.username)
}
)
)
)

  },[])
  ///const user = localStorage.getItem("token") ? true: false;
  
  ////console.log("result"+username)
  ///setUsername(username)
  if(localStorage.getItem('token')){
    return (
      <Box sx={{display:'flex', flexGrow: 1,border:'3px ', color:'black',alignContent:'end',flexDirection:'column-reverse', }}>
        <AppBar position="static" style={{flexDirection: "row-reverse"}} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Button
            
              color="inherit"
              variant="outlined"
              style={{
                margin:'10px'
              }}
              onClick={(e) => {
                localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              {username}
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              onClick={(e) => {
                localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

    return(
      
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static" style={{display:'flex',flexDirection:'row-reverse', gap:'10px'}}>
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                variant='outlined'
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton> */}
              
    
              <Button
                color="inherit"
                variant="outlined"
                style={{
                  margin:'10px'
                }}
                
              >SIGNUP
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                onClick={(e) => {
                  localStorage.removeItem("token");
                  window.location = "/";
                }}
              >LOGIN
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      

    )
  
}
