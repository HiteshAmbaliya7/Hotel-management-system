import { useEffect, useState } from "react";
import API from "../services/api";
import RoomCard from "../components/RoomCard";

function Rooms() {

const [rooms,setRooms] = useState([]);

const fetchRooms = async () => {

try{

const res = await API.get("/rooms");

setRooms(res.data);

}catch(err){
console.log(err);
}

};

useEffect(()=>{
fetchRooms();
},[]);


const bookRoom = async (roomId) => {

try{

await API.post("/bookings",{
room:roomId,
checkInDate:"2026-03-12",
checkOutDate:"2026-03-15"
});

alert("Room booked");

fetchRooms();

}catch(err){
alert("Booking failed");
}

};

return(

<div>

<h2>Hotel Rooms</h2>

{rooms.map((room)=>(
<RoomCard
key={room._id}
room={room}
bookRoom={bookRoom}
/>
))}

</div>

);

}

export default Rooms;