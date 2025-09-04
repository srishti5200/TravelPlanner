export default function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[460px] bg-hero-beach bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      <div className="relative container-px h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow">
          Your Journey Starts Here.
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Discover breathtaking destinations and plan your perfect adventure with ease.
        </p>

        <div className="mt-6 w-full max-w-xl bg-white rounded-2xl p-2 shadow-soft flex gap-2">
          <input
            className="flex-1 h-11 rounded-xl px-4 text-gray-700 focus:outline-none"
            placeholder="Search for destinations..."
          />
          <button className="btn-primary h-11 px-5">Search</button>
        </div>
      </div>
    </section>
  );
}
