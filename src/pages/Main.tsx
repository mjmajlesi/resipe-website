import { motion } from "framer-motion";
import Populer from "../components/Populer";
import Veggie from "../components/veggie";
import Header from "../components/Header";
import Category from "../components/Category";

function Main() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="mt-16 space-y-16">
        <Populer />
        <Veggie />
      </div>
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-center font-display text-xl text-white/80">Browse by cuisine</h3>
        <div className="flex justify-center pb-4">
          <Category />
        </div>
      </section>
    </motion.div>
  );
}

export default Main;
