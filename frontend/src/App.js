import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Bar from "./Bar";
import Client from "./Client";
import Profile from "./Profile";
import Owner from "./Owner";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

export default function App() {

  return (
    <Router>
      <Bar/>
      <Routes>
        <Route path="/client" element={<Client/>} >  </Route>
        <Route path="/owner" element={<Owner/>}></Route>
        <Route path="/owner/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/client/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}
