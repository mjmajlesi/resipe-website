import Container from "./container";
import Search from "./Search";
import { motion } from "framer-motion";
import mainimage from "../image/pexels-dapur-melodi-192125-1109197.jpg";

function Searchmainpage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 1,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex items-center justify-between mb-52"
      >
        <div className="flex flex-col items-center gap-10 w-[500px] pl-6">
          <h2 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magni vel ducimus libero hic eum similique architecto non quasi
            ullam, placeat tempore molestias fugiat. Fugit voluptatem neque quo
            voluptate culpa!
          </h2>
          <Search />
        </div>
        <div className="border-4 border-white/10 mr-3">
          <img width={400} src={mainimage} alt="mainpageimage" />
        </div>
      </motion.div>
    </Container>
  );
}

export default Searchmainpage;
