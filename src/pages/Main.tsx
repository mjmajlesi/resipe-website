import { useLocation } from "react-router-dom";
import Populer from "../components/Populer";
import Veggie from "../components/veggie";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Searchmainpage from "../components/searchmainpage";

function Main() {
  const location = useLocation();
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      {location.pathname === "/" && (
        <>
          <Header />
          <Searchmainpage />
        </>
      )}
      <Populer />
      <Veggie />
    </motion.div>
  );
}

export default Main;
