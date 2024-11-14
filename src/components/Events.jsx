import EventCard from "./EventCard";
import { motion } from 'framer-motion';

function Events() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  }


  return (
    <>
      <h1>Events</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap w-full gap-10 justify-center p-5 ">
        <EventCard variants={itemVariants} />
        <EventCard variants={itemVariants} />
        <EventCard variants={itemVariants} />
        <EventCard variants={itemVariants} />
        <EventCard variants={itemVariants} />
        <EventCard variants={itemVariants} />
      </motion.div>
    </>
  );
}

export default Events;