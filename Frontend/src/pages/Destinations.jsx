// src/pages/Destinations.jsx
const destinations = [
  { id: 1, name: "Paris, France", img: "/images/paris.jpg", desc: "City of lights & love" },
  { id: 2, name: "Tokyo, Japan", img: "/images/tokyo.jpg", desc: "Modern meets tradition" },
  { id: 3, name: "Bali, Indonesia", img: "/images/bali.jpg", desc: "Tropical paradise" },
];

const Destinations = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((place) => (
          <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={place.img} alt={place.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.desc}</p>
              <a href="/booking" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
