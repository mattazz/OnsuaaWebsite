import CircleImage from "./CircleImage";
import { motion } from "framer-motion";

function UserCard() {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
        className="flex flex-row w-full sm:w-1/2 md:w-1/4 p-5 rounded-lg shadow-lg border">
            <CircleImage
                src="https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"
                width={128}
                height={128}
            />
            <div className="flex flex-col justify-center align-middle w-full text-center">
                <h1>Person name</h1>
                <p>Person title</p>
            </div>
        </motion.div>

    )
}

export default UserCard;