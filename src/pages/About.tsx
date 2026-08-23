import Container from "../components/container";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl py-20 text-center">
        <h1 className="font-display text-3xl font-semibold text-white">
          About <span className="text-accent">Savora</span>
        </h1>
        <p className="mt-6 leading-relaxed text-white/70">
          Savora is a small recipe explorer built with React, TypeScript and Tailwind CSS. It pulls its dishes from
          TheMealDB — a free, open collection of recipes from cuisines around the world — so you can search any dish,
          browse by cuisine, and follow along with step-by-step instructions and ingredient lists.
        </p>
        <p className="mt-4 text-sm text-white/40">
          Built as a portfolio project by Mohammad Javad Majlesi.
        </p>
        <a
          href="https://github.com/mjmajlesi"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
        >
          <FaGithub size={16} /> Follow on GitHub
        </a>
      </div>
    </Container>
  );
}

export default About;
