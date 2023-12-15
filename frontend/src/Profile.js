import Bar from "./Bar";
import { useState,useEffect } from "react";
import { Typography } from "@mui/material";
import {email}from './Signup'
import { useLocation } from 'react-router-dom';
function Profile(props){
//     const [username, setUsername] = useState('');
//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const usernameParam = searchParams.get('username');
//         setUsername(usernameParam || '');
//       }, [location]);
// return<>
// <Typography> {"hi profile"}</Typography>


const location = useLocation();
  const [username, setUsername] = useState('');
///console.log(username)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const usernameParam = searchParams.get('username');
    setUsername(usernameParam || '');
  }, [location]);

  return (
    <>
      <Typography>Welcome, {username}</Typography>
      {/* Other profile content */}
    </>
  );




{/* ////<Bar username={props.username}></Bar> </>*/}

}
export default Profile;