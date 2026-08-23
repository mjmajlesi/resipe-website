import { IMeal } from "../api";
import { Link } from "react-router-dom";

export default function MealCard({ title, image, id, area }: IMeal) {
  return (
    <Link to={`/recipe/${id}`} className="group block" aria-label={title}>
      <div className="card-surface overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-black/30 group-hover:border-accent/40">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {area && (
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {area}
            </span>
          )}
        </div>
        <h4 className="line-clamp-1 px-4 py-3.5 text-center text-sm font-medium text-white/90 transition-colors group-hover:text-accent">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export function MealCardSkeleton() {
  return (
    <div className="card-surface overflow-hidden">
      <div className="skeleton aspect-[4/3] rounded-none" />
      <div className="skeleton mx-auto my-4 h-4 w-3/4 rounded-md" />
    </div>
  );
}
