import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search({ large = false }: { large?: boolean }) {
  const [valueInput, SetValueInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (valueInput.trim()) navigate(`searched/${encodeURIComponent(valueInput.trim())}`);
  };

  return (
    <form onSubmit={submitHandler} role="search" className="w-full">
      <div
        className={`flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30 ${
          large ? "px-6 py-4" : "px-4 py-2.5"
        }`}
      >
        <FaSearch className="shrink-0 text-white/50" aria-hidden="true" />
        <input
          onChange={(e) => SetValueInput(e.target.value)}
          type="search"
          placeholder="Search recipes..."
          aria-label="Search recipes"
          value={valueInput}
          className={`w-full bg-transparent text-white placeholder-white/40 outline-none ${large ? "text-lg" : "text-sm"}`}
        />
      </div>
    </form>
  );
}

export default Search;
