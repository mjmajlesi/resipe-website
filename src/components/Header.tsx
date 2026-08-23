import Container from "./container";
import Button from "./buttuns";
import Search from "./Search";
import { FaArrowRight } from "react-icons/fa";
import mainimage from "../image/pexels-dapur-melodi-192125-1109197.jpg";

function Header() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container>
        <div className="flex flex-col items-center gap-12 py-16 text-center md:py-24 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              Cook something amazing today
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Recipes from around the <span className="text-accent">world</span>, one dish at a time
            </h1>
            <p className="mt-5 text-white/60">
              Discover hundreds of dishes — from Italian classics to Thai street food. Search, learn, and cook.
            </p>
            <div className="mx-auto mt-8 max-w-md lg:mx-0">
              <Search large />
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
              <Button variant="primary" onClick={() => scrollTo("trending")}>
                Trending <FaArrowRight size={13} />
              </Button>
              <Button variant="ghost" onClick={() => scrollTo("veggie")}>
                Veggie picks
              </Button>
            </div>
          </div>

          <div className="relative hidden shrink-0 lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-transparent blur-2xl" aria-hidden="true" />
            <img
              src={mainimage}
              alt="A freshly cooked dish"
              width={420}
              className="relative rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Header;
