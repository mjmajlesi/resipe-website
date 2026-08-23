import React, { useEffect, useState } from "react";
import { getPopuler, IMeal } from "../api";
import useLocalStorage from "./useLocalStorage";
import MealCarousel from "./MealCarousel";

function Populer() {
  const [populer, setPopuler] = useLocalStorage<IMeal[]>("popular", []);
  const [loading, setLoading] = useState(populer.length === 0);

  useEffect(() => {
    let cancelled = false;
    getPopuler().then((meals) => {
      if (cancelled) return;
      if (meals.length) setPopuler(meals);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [setPopuler]);

  return <MealCarousel id="trending" title="Trending now" meals={populer} loading={loading} />;
}

export default Populer;
