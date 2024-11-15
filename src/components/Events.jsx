import EventCard from "./EventCard";
import { motion } from 'framer-motion';
import Footer from "./Footer";

function Events() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  }


  return (
    <>
      <motion.div 
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      className="flex flex-col items-center my-4">
        <h1 className="flex text-4xl">Events</h1>
        <p className="flex">These are our events</p>
      </motion.div>
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
      <Footer />
    </>
  );
}

export default Events;