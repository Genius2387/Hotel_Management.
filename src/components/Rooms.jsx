import RoomCard from "./RoomCard";
import roomsData from "./data/roomsdata.jsx";

function Rooms() {
  return (
    <div className="bg-light min-vh-100">

      {/* Rooms Section */}
      <section id="rooms" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Our Rooms</h2>
            <p className="text-muted">Choose from our selection of premium rooms</p>
          </div>

          <div className="row">
            {roomsData.map((room) => (
              <RoomCard
                key={room.id}
                image={room.image}
                title={room.title}
                price={room.price}
                description={room.description}
                amenities={room.amenities}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Rooms;