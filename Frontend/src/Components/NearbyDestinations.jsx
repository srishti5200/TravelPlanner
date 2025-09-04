const nearby = [
  { name: "Coastal Retreat", dist: "120 km away", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop" },
  { name: "Mountain Village", dist: "200 km away", img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=800&auto=format&fit=crop" },
  { name: "Historic Town", dist: "60 km away", img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop" },
  { name: "Lakeside Cabin", dist: "150 km away", img: "https://images.unsplash.com/photo-1500450030230-81fdd54f01e1?q=80&w=800&auto=format&fit=crop" },
];

export default function NearbyDestinations() {
  return (
    <section className="section container-px">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
        Popular Nearby Destinations
      </h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {nearby.map((n) => (
          <div key={n.name} className="card p-4 flex items-center gap-4">
            <img src={n.img} alt={n.name} className="h-20 w-28 object-cover rounded-xl" />
            <div className="flex-1">
              <div className="font-semibold">{n.name}</div>
              <div className="text-gray-600 text-sm">{n.dist}</div>
            </div>
            <div className="text-gray-400">›</div>
          </div>
        ))}
      </div>
    </section>
  );
}
