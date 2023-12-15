import { Typography, Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Bar from "./Bar";
import Profile from "./Profile";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState();
  const [loged, setLoged] = useState(false);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
      }}
    >
      <Typography variant="h2" align="center">
        {" "}
        UpLoadPal
      </Typography>
      <Card
        variant="outlined"
        style={{
          width: "400px",
          height: "433px",
          marginLeft: "38%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography style={{ padding: "10px", alignContent: "end" }}>
          {result}
        </Typography>
        <TextField
          required
          id="outlined-required"
          style={{
            margin: "10px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Password"
          style={{
            margin: "10px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={{  marginTop:'80px', width: "100%"  }}
          onClick={(e) => {
            fetch("http://localhost:3001/admin/login", {
              method: "POST",
              body: JSON.stringify({
                username: email,
                password: password,
              }),
              headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }).then((res) => {
              res.json().then((data) => {
                console.log(JSON.stringify(data));
                console.log(data.message);
                if (data.message == "Logged in successfully") {
                  //console.log("loged");

                 //console.log(data.token);

                  localStorage.setItem("token", data.token);
                  setResult(true);


                  //navigate("/profile");
                 window.location='/profile'
                } else {
                  try{
                    //if (data.message == "")
                  }catch{

                  }
                  setLoged(false);
                  setResult("Enter Correct username or Password");
                }
              });
            });
          }}
        >
          SignIn
        </Button>
      </Card>
    </div>
  );
}
export default Login;
