import { useState } from "react";

const locations = [
  {
    name: "Paris, France",
    desc: "Iconic city of lights, romance, and world-class cuisine.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kyoto, Japan",
    desc: "Ancient temples, serene gardens, and vibrant traditions.",
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Santorini, Greece",
    desc: "Whitewashed villages, crystal-clear waters, unforgettable sunsets.",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Banff, Canada",
    desc: "Turquoise lakes, rugged mountains, and alpine bliss.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rome, Italy",
    desc: "Eternal city of ancient ruins, art, and cuisine.",
    img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bali, Indonesia",
    desc: "Tropical paradise with temples, rice terraces, and surf.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedLocations() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section container-px">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8">
        Featured Travel Locations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <article key={loc.name} className="card">
            <img
              src={loc.img}
              alt={loc.name}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{loc.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{loc.desc}</p>
              <button
                className="btn-outline mt-3"
                onClick={() => setSelected(loc)}
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <img
              src={selected.img}
              alt={selected.name}
              className="h-56 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{selected.name}</h3>
            <p className="text-gray-600 mt-2">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
