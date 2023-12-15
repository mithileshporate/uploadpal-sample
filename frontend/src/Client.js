import { Typography ,Card,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
export default  function Client(){
    const navigate= useNavigate();
    return (
        <Card variant="outlined"  style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width:'400px',height:'433px',marginLeft:'38%',paddingBottom:'10px',
    
            display :'flex',justifyContent:'space-around',flexDirection:'column',
          
          }}>
            <Typography align="center" variant="h4" style={{fontFamily:'sans-serif'}}>Welcome  Let's Get Started</Typography>
            <div style={{
                display:'flex',
                justifyContent:'space-around'
            }}>
               
            <Button variant="contained" style={{  marginBottom:'10px'}} 
            onClick={(e)=>{
                navigate('/client/signup')
            }} >Signup</Button>
          <Button variant="contained" style={{  justifyContent:'10px'} 
       
        }  onClick={()=>{
            navigate('/login')
        }} >Login</Button></div>
        </Card>
    )
}