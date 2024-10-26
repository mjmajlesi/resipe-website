import Populer from '../components/Populer';
import Veggie from '../components/veggie';
import { motion } from "framer-motion"

function Main() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Populer />
      <Veggie />
    </motion.div>
  )
}

export default Main