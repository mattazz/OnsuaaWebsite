import { motion } from "framer-motion";
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

            <div className="flex flex-row flex-wrap sm:p-0 sm:m-1  p-3 lg:my-5 gap-1 childTestBorder align-middle justify-center ">
                <div className="flex w-full sm:w-full  lg:w-1/3 justify-center align-middle m-auto  ">
                    <img src="https://widget.campusexplorer.com/media/original/media-50FF297D.jpg" alt="" />
                </div>
                <div className="flex w-full sm:w-full sm:p-5  lg:w-1/2  ">
                    <p className="flex justify-center align-middle m-auto"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo alias, nihil voluptatem cupiditate, incidunt ipsum quaerat minima accusamus maxime ipsam asperiores eaque architecto et rem, nobis reprehenderit possimus repudiandae distinctio.</p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap sm:p-0 sm:m-1  p-3 lg:my-5 gap-1 childTestBorder align-middle justify-center ">
                <div className="flex w-full sm:w-full sm:p-5  lg:w-1/2  ">
                    <p className="flex justify-center align-middle m-auto"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo alias, nihil voluptatem cupiditate, incidunt ipsum quaerat minima accusamus maxime ipsam asperiores eaque architecto et rem, nobis reprehenderit possimus repudiandae distinctio.</p>
                </div>
                <div className="flex w-full sm:w-full  lg:w-1/3 justify-center align-middle m-auto  ">
                    <img src="https://widget.campusexplorer.com/media/original/media-50FF297D.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </motion.div>

    )
}

export default AboutUs;