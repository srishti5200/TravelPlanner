// src/pages/Dashboard.jsx
import { useState } from "react";

const Dashboard = () => {
  const [trips, setTrips] = useState([
    { id: 1, destination: "Paris", date: "2025-09-20", budget: 1200 },
    { id: 2, destination: "Tokyo", date: "2025-10-10", budget: 1800 },
  ]);

  const [newTrip, setNewTrip] = useState({
    destination: "",
    date: "",
    budget: ""
  });

  const handleChange = (e) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  const addTrip = (e) => {
    e.preventDefault();
    if (!newTrip.destination || !newTrip.date || !newTrip.budget) return;

    const trip = {
      id: trips.length + 1,
      ...newTrip
    };

    setTrips([...trips, trip]);
    setNewTrip({ destination: "", date: "", budget: "" });
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">User Dashboard</h2>

      {/* User Info Section */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h3 className="text-xl font-semibold">Welcome Back, Traveler! 🌍</h3>
        <p className="text-gray-600">Manage your trips and personal details here.</p>
      </div>

      {/* Trip Planner Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Add Trip Form */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Add New Trip</h3>
          <form onSubmit={addTrip} className="space-y-4">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={newTrip.destination}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="date"
              name="date"
              value={newTrip.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="number"
              name="budget"
              placeholder="Budget ($)"
              value={newTrip.budget}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Save Trip
            </button>
          </form>
        </div>

        {/* Saved Trips List */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Your Saved Trips</h3>
          {trips.length === 0 ? (
            <p className="text-gray-600">No trips saved yet.</p>
          ) : (
            <ul className="space-y-3">
              {trips.map((trip) => (
                <li key={trip.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold">{trip.destination}</p>
                    <p className="text-sm text-gray-600">
                      {trip.date} • Budget: ${trip.budget}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteTrip(trip.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
