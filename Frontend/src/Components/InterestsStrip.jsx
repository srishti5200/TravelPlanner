const interests = [
  "Business Travel",
  "Culture & History",
  "Foodie Adventures",
  "Outdoor Activities",
  "Romantic Getaways",
  "Family Vacations",
];

export default function InterestsStrip() {
  return (
    <section className="py-10 bg-white">
      <div className="container-px">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
          Browse by Interest
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {interests.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
