import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getCuisine, IMeal } from "../api";
import Container from "../components/container";
import MealCard, { MealCardSkeleton } from "../components/MealCard";

function Cuisine() {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getCuisine(params.type).then((results) => {
      if (cancelled) return;
      setMeals(results);
      setLoading(false);
    });
    document.title = `${params.type} recipes — Savora`;
    return () => {
      cancelled = true;
    };
  }, [params.type]);

  return (
    <Container>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="mb-10 mt-12 text-center font-display text-3xl font-semibold text-white">
          {params.type} <span className="text-accent">recipes</span>
        </h1>
        {loading ? (
          <Grid>
            {Array.from({ length: 8 }, (_, i) => (
              <MealCardSkeleton key={i} />
            ))}
          </Grid>
        ) : meals.length === 0 ? (
          <EmptyState />
        ) : (
          <Grid>
            {meals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </Grid>
        )}
      </motion.div>
    </Container>
  );
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{children}</div>;
}

export function EmptyState() {
  return (
    <div className="card-surface mx-auto max-w-md px-8 py-14 text-center">
      <p className="text-4xl" aria-hidden="true">🍽️</p>
      <h3 className="mt-4 font-display text-xl text-white">Nothing found here</h3>
      <p className="mt-2 text-sm text-white/50">Try a different search or browse another cuisine.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-accent px-5 py-2 text-sm font-medium text-[#1a1206] hover:bg-accent-strong">
        Back to home
      </Link>
    </div>
  );
}

export default Cuisine;
