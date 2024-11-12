import CircleImage from "./CircleImage";
import {motion} from "framer-motion";
import Footer from "./Footer";

function AboutUs() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            
        >
            <div className="flex flex-col justify-center align-middle m-auto text-center my-20 w-1/2 gap-3">
                <h2 className="text-red-400 font-bold"> Know Everything...About Us</h2>
                <h1 className=" text-3xl">About ONSUAA</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium libero repellendus consequuntur commodi natus tempore earum esse nam iure nesciunt eaque autem illo error, nemo deserunt quis voluptate ducimus!</p>
            </div>
            <img src="https://6sense.com/wp-content/uploads/2022/10/team-3.jpg.webp" alt="" />

            <div className="p-10 text-center italic">
                <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid fugit sed ipsa voluptatem ipsum vel vitae, expedita nam corrupti vero rerum amet minima dignissimos, veniam nobis aliquam nesciunt. Consequuntur.</h2>
            </div>


            <div className="flex space-x-14 justify-center align-middle m-auto w-3/4 ">
                <CircleImage src="https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg" />
                <CircleImage src="https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg" />
                <CircleImage src="https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg" />

            </div>

            <Footer />
        </motion.div>
        
    )
}

export default AboutUs;