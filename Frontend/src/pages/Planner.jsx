// src/pages/Planner.jsx
import { useState } from "react";

const Planner = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Trip Planned 🎉\nDestination: ${formData.destination}\nDates: ${formData.startDate} → ${formData.endDate}\nBudget: $${formData.budget}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

        <input type="number" name="budget" placeholder="Budget ($)" value={formData.budget} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700">
          Generate Plan
        </button>
      </form>
    </div>
  );
};

export default Planner;
