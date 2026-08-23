import React, { useEffect, useState } from "react";
import { getVegetarian, IMeal } from "../api";
import useLocalStorage from "./useLocalStorage";
import MealCarousel from "./MealCarousel";

function Veggie() {
  const [veggie, setVeggie] = useLocalStorage<IMeal[]>("veggie", []);
  const [loading, setLoading] = useState(veggie.length === 0);

  useEffect(() => {
    let cancelled = false;
    getVegetarian().then((meals) => {
      if (cancelled) return;
      if (meals.length) setVeggie(meals);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [setVeggie]);

  return <MealCarousel id="veggie" title="Our vegetarian picks" meals={veggie} loading={loading} />;
}

export default Veggie;
