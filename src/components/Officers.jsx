import Footer from "./Footer";
import UserCard from "./UserCard";
import {motion} from "framer-motion";

function Officers() {
    return (
        <div className="flex flex-col min-h-screen">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow"
        >
        <div className="flex flex-col p-10 text-center">
            <h1 className="text-3xl">Meet the Officers</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quisquam magnam optio corrupti rerum dolorum minus facere accusantium. In recusandae consequuntur quasi saepe delectus mollitia ut placeat sint libero tempore.</p>
        </div>
            <div className="flex flex-row p-10 flex-wrap gap-10 align-middle justify-center">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </motion.div>
        <Footer />
        </div>
    );
}

export default Officers;