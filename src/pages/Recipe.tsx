import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getInformation, IMealDetail } from "../api";
import Container from "../components/container";
import { MealCardSkeleton } from "../components/MealCard";
import { EmptyState } from "./Cuisine";
import { FaYoutube as FaYouTube, FaExternalLinkAlt } from "react-icons/fa";

function Recipe() {
  const [meal, setMeal] = useState<IMealDetail>();
  const [notFound, setNotFound] = useState(false);
  const [activeTab, setActiveTab] = useState<"instructions" | "ingredients">("instructions");
  const params = useParams();

  useEffect(() => {
    let cancelled = false;
    setMeal(undefined);
    setNotFound(false);
    getInformation(params.name)
      .then((res) => {
        if (!cancelled) setMeal(res);
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      });
    document.title = "Recipe — Savora";
    return () => {
      cancelled = true;
    };
  }, [params.name]);

  if (notFound) {
    return (
      <Container>
        <div className="mt-12">
          <EmptyState />
        </div>
      </Container>
    );
  }

  if (!meal) {
    return (
      <Container>
        <div className="grid gap-8 py-12 lg:grid-cols-2">
          <div className="skeleton aspect-[4/3]" />
          <div className="space-y-4">
            <div className="skeleton h-8 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <article className="py-12">
        <Link to="/" className="mb-6 inline-block text-sm text-white/50 transition-colors hover:text-accent">
          ← All recipes
        </Link>

        {/* hero */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-tr from-accent/25 to-transparent blur-xl"
            />
            <img
              src={meal.image}
              alt={meal.title}
              className="relative aspect-[4/3] w-full rounded-[1.5rem] border border-white/10 object-cover shadow-2xl shadow-black/40"
            />
          </div>

          <div>
            {meal.area && (
              <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                {meal.category} · {meal.area}
              </span>
            )}
            <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{meal.title}</h1>
            {meal.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {meal.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {meal.youtube && (
                <a
                  href={meal.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/25"
                >
                  <FaYouTube size={16} /> Watch video
                </a>
              )}
              {meal.source && (
                <a
                  href={meal.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10"
                >
                  Original source <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="mt-14">
          <div role="tablist" aria-label="Recipe details" className="flex justify-center gap-3">
            {(["instructions", "ingredients"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium capitalize transition-all ${
                  activeTab === tab
                    ? "bg-accent text-[#1a1206] shadow-md shadow-accent/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            {activeTab === "instructions" ? (
              <p className="whitespace-pre-line leading-relaxed text-white/75">{meal.instructions}</p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2" aria-label="Ingredients">
                {meal.ingredients.map((ing) => (
                  <li
                    key={ing.name}
                    className="card-surface flex items-center gap-3 px-4 py-3 text-sm"
                  >
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(ing.name)}-Small.png`}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      className="shrink-0"
                    />
                    <span className="text-white/85">{ing.name}</span>
                    <span className="ml-auto shrink-0 text-xs text-accent">{ing.measure}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Container>
  );
}

export default Recipe;
