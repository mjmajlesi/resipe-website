import { useEffect, useState } from "react";
import { getSearched, IMeal } from "../api";
import { useParams } from "react-router-dom";
import MealCard, { MealCardSkeleton } from "./MealCard";
import Container from "./container";
import { Grid, EmptyState } from "../pages/Cuisine";

function Searched() {
  const params = useParams();
  const [results, setResults] = useState<IMeal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getSearched(params.search).then((meals) => {
      if (cancelled) return;
      setResults(meals);
      setLoading(false);
    });
    document.title = `"${params.search}" — Savora`;
    return () => {
      cancelled = true;
    };
  }, [params.search]);

  return (
    <Container>
      <h1 className="mb-10 mt-12 text-center font-display text-2xl font-semibold text-white">
        Results for <span className="text-accent">“{params.search}”</span>
        <span className="mt-1 block text-sm font-normal text-white/40">{results.length} recipes</span>
      </h1>
      {loading ? (
        <Grid>
          {Array.from({ length: 8 }, (_, i) => (
            <MealCardSkeleton key={i} />
          ))}
        </Grid>
      ) : results.length === 0 ? (
        <EmptyState />
      ) : (
        <Grid>
          {results.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Searched;
