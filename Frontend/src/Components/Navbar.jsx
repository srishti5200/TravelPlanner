import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // ✅ import Auth

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ get user & logout

  const linkCls =
    "px-3 py-2 rounded-lg text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow">
      <nav className="container-px py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-600 grid place-items-center text-white font-bold">✈︎</div>
          <span className="text-xl font-bold text-brand-700">WanderLust</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden btn-outline px-3 py-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Desktop NavLinks */}
        <ul className="hidden md:flex items-center gap-1">
          <li><NavLink to="/" className={linkCls}>Home</NavLink></li>
          <li><NavLink to="/destinations" className={linkCls}>Destinations</NavLink></li>
          <li><NavLink to="/interests" className={linkCls}>Interests</NavLink></li>
          <li><NavLink to="/bookings" className={linkCls}>Bookings</NavLink></li>
          <li><NavLink to="/planner" className={linkCls}>Plan Your Trip</NavLink></li>
          <li><NavLink to="/dashboard" className={linkCls}>Dashboard</NavLink></li>
        </ul>

        {/* Right-side Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <input
            className="h-10 w-56 rounded-xl border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Search for destinations..."
          />

          {/* ✅ Show user info + logout if logged in */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-700">
                Hi, {user.name || user.email}
              </span>
              <button
                onClick={logout}
                className="btn-outline text-red-600 font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/signup" className="btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t bg-white container-px pb-3">
          <ul className="py-2 grid gap-1">
            <li><NavLink to="/" onClick={() => setOpen(false)} className={linkCls}>Home</NavLink></li>
            <li><NavLink to="/destinations" onClick={() => setOpen(false)} className={linkCls}>Destinations</NavLink></li>
            <li><NavLink to="/interests" onClick={() => setOpen(false)} className={linkCls}>Interests</NavLink></li>
            <li><NavLink to="/bookings" onClick={() => setOpen(false)} className={linkCls}>Bookings</NavLink></li>

            <div className="grid grid-cols-1 gap-2 pt-2">
              {user ? (
                <>
                  <span className="text-gray-700 font-medium px-2">
                    Hi, {user.name || user.email}
                  </span>
                  <button
                    onClick={() => { logout(); setOpen(false); }}
                    className="btn-outline text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="btn-outline">Login</Link>
                  <Link to="/signup" onClick={() => setOpen(false)} className="btn-primary">Sign Up</Link>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
