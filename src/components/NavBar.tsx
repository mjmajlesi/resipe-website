import React, { useState } from "react";
import Container from "./container";
import Button from "./buttuns";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1220]/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-2.5 transition-transform hover:scale-105" aria-label="Savora home">
            <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="30" r="16" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M20 52h24M26 46h12" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="font-display text-xl font-semibold text-white">Savora</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-white/10 text-accent" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" className="!px-4 !py-2 text-sm">
              <a href="mailto:mohammadjavadmajlesi313@gmail.com">Contact</a>
            </Button>
          </div>

          {/* mobile hamburger */}
          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/10 pb-4 pt-3 md:hidden" aria-label="Mobile navigation">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium ${isActive ? "bg-white/10 text-accent" : "text-white/70"}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="mailto:mohammadjavadmajlesi313@gmail.com"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-accent"
            >
              Contact
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default NavBar;
