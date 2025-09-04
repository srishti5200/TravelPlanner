const items = [
  { label: "Beaches", icon: "🌊" },
  { label: "Cities", icon: "🏙️" },
  { label: "Adventure", icon: "🗻" },
  { label: "Nature Escapes", icon: "🌿" },
];

export default function Categories() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-px">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {items.map((it) => (
            <div key={it.label} className="card py-7 grid place-items-center hover:shadow transition">
              <div className="text-2xl">{it.icon}</div>
              <div className="font-medium mt-2">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
