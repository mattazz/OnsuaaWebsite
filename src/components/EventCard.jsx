/* eslint-disable react/prop-types */
import {motion} from 'framer-motion';

function EventCard({variants, title = "Title", date = "Date", description = "Description"}) {
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 300
    }
    return(
        <motion.div 
        variants={variants}
        transition={spring}
        whileHover={{ scale: 1.05 }}
        
        className="flex-col flex w-full sm:p-2 md:flex-row md:w-full md:p-0 lg:p-0 lg:w-full xl:w-[45%] rounded-md shadow-xl gap-2 p-0 ">
            <div className="w-full md:w-1/2 flex">
                <img className="eventCardImg rounded-tl-md rounded-bl-md" src="https://www.crmsoftwareblog.com/wp-content/uploads/help-g2d0b94a79_1920.jpg" alt="" />
            </div>
            <div className="flex flex-col w-full p-2 md:w-1/2 pt-3 pb-3 pr-3">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="italic">{date}</p>
                <p>{description} </p>
            </div>
        </motion.div>
    )
}

export default EventCard;
