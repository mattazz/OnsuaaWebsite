import { motion } from 'framer-motion'
function Donate() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Donate</h1>
    </motion.div>
  );
}

export default Donate;