import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-px py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-600 grid place-items-center text-white font-bold">✈︎</div>
            <span className="font-bold text-brand-700">WanderLust</span>
          </div>
          <p className="mt-3 text-gray-600 max-w-xs">
            Your guide to unforgettable journeys.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Discover</h4>
            <ul className="space-y-1 text-gray-600">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/interests">Interests</Link></li>
              <li><a href="#">Travel Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Popular Itineraries</a></li>
              <li><a href="#">Tips & Tricks</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} WanderLust Planner. All rights reserved.
      </div>
    </footer>
  );
}
