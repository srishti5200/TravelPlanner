// src/pages/Booking.jsx
const Booking = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Booking Options</h2>
      <p className="text-gray-700 text-center mb-6">
        Choose from our curated travel packages including flights, hotels, and experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Paris Getaway</h3>
          <p className="text-gray-600">5 nights • Hotel + Flights</p>
          <p className="mt-2 font-bold">$1,200 per person</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>

        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Tokyo Adventure</h3>
          <p className="text-gray-600">7 nights • Hotel + Flights</p>
          <p className="mt-2 font-bold">$1,800 per person</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
