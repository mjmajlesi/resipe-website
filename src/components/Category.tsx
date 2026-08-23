import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const cuisines = [
  { to: "/cuisine/Italian", label: "Italian", Icon: FaPizzaSlice },
  { to: "/cuisine/American", label: "American", Icon: FaHamburger },
  { to: "/cuisine/Thai", label: "Thai", Icon: GiNoodles },
  { to: "/cuisine/Japanese", label: "Japanese", Icon: GiChopsticks },
];

function Category() {
  return (
    <nav aria-label="Cuisines" className="flex flex-wrap items-center justify-center gap-3">
      {cuisines.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "border-accent bg-accent/15 text-accent"
                : "border-white/10 bg-white/5 text-white/80 hover:border-accent/40 hover:text-white"
            }`
          }
        >
          <Icon className="text-lg" aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Category;
