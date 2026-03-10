function RoomCard({ room, bookRoom }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      
      <h3>Room {room.roomNumber}</h3>

      <p>Type: {room.type}</p>

      <p>Price: ₹{room.price}</p>

      <p>Status: {room.status}</p>

      {room.status === "available" && (
        <button onClick={() => bookRoom(room._id)}>
          Book Room
        </button>
      )}

    </div>
  );
}

export default RoomCard;