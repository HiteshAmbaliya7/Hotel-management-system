import { Link } from "react-router-dom";

function Navbar(){

return(

<div style={{display:"flex",gap:"20px",marginBottom:"20px"}}>

<Link to="/dashboard">Dashboard</Link>

<Link to="/rooms">Rooms</Link>

<Link to="/bookings">Bookings</Link>

</div>

);

}

export default Navbar;