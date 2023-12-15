import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Button} from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import {Container} from '@mui/material'
import Profile from "./Profile";

function Signup(){
  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  
const navigate =useNavigate();
    return (<div style={{  width:'100vw' ,height:'100vh',display :'flex', flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>
    <Typography variant="h2" align="center" style={{fontFamily:'fantasy',fontSize:'400'}}  > UpLoadPal</Typography>
    <Card variant="outlined"  style={{
      width:'400px',height:'333px',marginLeft:'38%',
      display :'flex',justifyContent:'flex-start',flexDirection:'column'
    }}>
      
      <TextField
          required
          id="outlined-required"
          style={{
            margin:'10px'
          }}
          onChange={
            (e)=>{
              setEmail(e.target.value);
            }
          }
          placeholder="Email Or Number"
        />
      <TextField
          required
          id="outlined-required"
          style={{
            margin:'10px'
          }}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          placeholder="Password"
        /> 
      <Button variant="contained"  style={{ marginTop:'32%' ,width:'100%',}}
        onClick={(e)=>{
         console.log('clicked'); fetch("http://localhost:3001/admin/signup", {
          method: "POST",
          body: JSON.stringify({
            username: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
        }).then((res) => {
          res.json().then((data)=>{
            console.log(data.message);
            if(data.message=="Admin already exists"){
            alert('User Already exists')

           }
           else
          {
          console.log(JSON.stringify(data));
          localStorage.setItem('token',data.token)
          //window.location='/profile?username=exampleUser'
          ///window.location.href = `/profile?username=${email}`;
          navigate(`/profile?username=${email}`);
        }
        });

        })}}

      >Signup</Button>
    </Card>
  </div>)
}
export default Signup;