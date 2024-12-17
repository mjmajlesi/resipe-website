import React, { useEffect } from "react";
import { getPopuler } from "../api";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useLocalStorage from "./useLocalStorage";
import Container from "./container";
import CartsMainPage from "./CartsMainPage";
import { motion } from "framer-motion";

export interface Irecipes {
  title: string;
  dishTypes?: "lunch" | "soap" | "main course" | "main dish" | "dinner";
  id: number;
  image: string;
  vegan?: boolean;
  veryPopuler?: boolean;
}
function Populer() {
  const [Populer, setPopuler] = useLocalStorage<Irecipes[]>("Popular", []);
  useEffect(() => {
    getPopuler().then((res) => setPopuler(res.recipes));
  }, [setPopuler]);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{
          opacity: 1,
          y: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className=" pb-16 border-b-4 border-b-white/10"
      >
        <h2 className="mb-10 text-3xl font-semibold text-center">Trending</h2>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {Populer.map((recipe) => (
            <CartsMainPage key={recipe.id} {...recipe} />
          ))}
        </Splide>
      </motion.div>
    </Container>
  );
}

export default Populer;
