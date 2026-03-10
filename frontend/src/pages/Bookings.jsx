import { useEffect, useState } from "react";
import API from "../services/api";

function Bookings(){

const [bookings,setBookings] = useState([]);

const fetchBookings = async () => {

try{

const res = await API.get("/bookings");

setBookings(res.data);

}catch(err){
console.log(err);
}

};

useEffect(()=>{
fetchBookings();
},[]);


const checkIn = async (id) => {

try{

await API.put(`/bookings/checkin/${id}`);

alert("Guest checked in");

fetchBookings();

}catch(err){
alert("Check-in failed");
}

};


const checkOut = async (id) => {

try{

await API.put(`/bookings/checkout/${id}`);

alert("Guest checked out");

fetchBookings();

}catch(err){
alert("Check-out failed");
}

};


return(

<div>

<h2>Bookings Dashboard</h2>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>Customer</th>
<th>Room</th>
<th>Check In</th>
<th>Check Out</th>
<th>Status</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{bookings.map((b)=>(
<tr key={b._id}>

<td>{b.user?.name}</td>

<td>{b.room?.roomNumber}</td>

<td>{new Date(b.checkInDate).toLocaleDateString()}</td>

<td>{new Date(b.checkOutDate).toLocaleDateString()}</td>

<td>{b.status}</td>

<td>

{b.status === "booked" && (
<button onClick={()=>checkIn(b._id)}>
Check-In
</button>
)}

{b.status === "checked-in" && (
<button onClick={()=>checkOut(b._id)}>
Check-Out
</button>
)}

</td>

</tr>
))}

</tbody>

</table>

</div>

);

}

export default Bookings;