import Hero from "../Components/Hero";
import FeaturedLocations from "../Components/FeaturedLocations";
import Categories from "../Components/Categories";
import NearbyDestinations from "../Components/NearbyDestinations";
import InterestsStrip from "../Components/InterestsStrip";
import CTA from "../Components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedLocations />
      <Categories />
      <NearbyDestinations />
      <InterestsStrip />
      <CTA />
    </>
  );
}
