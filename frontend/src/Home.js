import { Typography ,Card,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
function Home(){
    const navigate = useNavigate();

  if(!localStorage.getItem('token')){return (
    <div style={{backgroundColor: ' #f0f0f0',  width:'100vw' ,height:'100vh',display :'flex', flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>
    <Typography variant="h2" align="center" style={{fontFamily:'sans-serif',fontSize:'100'}} > UpLoadPal</Typography>
  
    <Card variant="outlined"  style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width:'400px',height:'433px',marginLeft:'38%',paddingBottom:'10px',
        boxShadow: '07 10 10px rgba(04, 10, 04, 0.1)',
        display :'flex',justifyContent:'flex-end',flexDirection:'column'

      }}>
        <Avatar alt="Remy Sharp" style={{ align:'center',
          marginBottom:'20%',marginLeft:'30%',justifyContent:'center', width:'150px',height:'150px'
        }} src="https://cdn.dribbble.com/users/9853924/screenshots/19234500/media/2de3ef20f56373dc1baef595866aff42.jpg?resize=400x300&vertical=center" />
       <Button variant="contained" style={{
          marginBottom:'10px'
       }} size="medium"
       onClick={()=>{
        navigate('/client')
       }}
       >Client </Button>
      <Button variant="contained" onClick={
          (e)=>{
              navigate('/owner')
          }
      } >Channel Owner</Button>
    </Card>
  </div>
  )}
  else{
    return (
      <div style={{ backgroundColor:' #f0f0f0', width:'100vw', backgroundAttachment:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=sph' ,height:'100vh',display :'flex', flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>
      <Typography variant="h2" align="center"  > UpLoadPal</Typography>
    
      <Card variant="outlined"  style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',
          width:'400px',height:'433px',marginLeft:'38%',paddingBottom:'10px',
  
          display :'flex',justifyContent:'flex-end',flexDirection:'column'
        }}>
          <Avatar alt="Remy Sharp" style={{ align:'center',
            marginBottom:'20%',marginLeft:'30%',justifyContent:'center', width:'150px',height:'150px'
          }} src="https://cdn.dribbble.com/users/9853924/screenshots/19234500/media/2de3ef20f56373dc1baef595866aff42.jpg?resize=400x300&vertical=center" />
         <Button variant="contained" style={{
            marginBottom:'10px'
         }} size="medium"
         onClick={()=>{
          navigate('/client')
         }}
         > hi there</Button>
        <Button variant="contained" onClick={
            (e)=>{
               localStorage.removeItem('token')
               window.location='/'
            }
        } >logout </Button>
      </Card>
    </div>
    )
  }
   

}
export default Home;