import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Container from "./container";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  meals: { id: string; title: string; image: string; area?: string }[];
  loading: boolean;
}

export default function MealCarousel({ id, title, meals, loading }: Props) {
  return (
    <Container>
      <section id={id} className="border-b border-white/10 pb-14">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold text-white">{title}</h2>
        {loading ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="card-surface overflow-hidden">
                <div className="skeleton aspect-[4/3] rounded-none" />
                <div className="skeleton mx-auto my-4 h-4 w-3/4 rounded-md" />
              </div>
            ))}
          </div>
        ) : (
          <Splide
            options={{
              perPage: 4,
              perMove: 1,
              pagination: false,
              arrows: true,
              drag: "free",
              gap: "1.25rem",
              breakpoints: { 1024: { perPage: 3 }, 640: { perPage: 2 } },
            }}
            aria-label={title}
          >
            {meals.map((meal) => (
              <SplideSlide key={meal.id} className="py-2">
                <Link to={`/recipe/${meal.id}`} className="group block" aria-label={meal.title}>
                  <div className="card-surface overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-accent/40 group-hover:shadow-xl group-hover:shadow-black/30">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={meal.image}
                        alt={meal.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h4 className="line-clamp-1 px-4 py-3.5 text-center text-sm font-medium text-white/90 transition-colors group-hover:text-accent">
                      {meal.title}
                    </h4>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </section>
    </Container>
  );
}
