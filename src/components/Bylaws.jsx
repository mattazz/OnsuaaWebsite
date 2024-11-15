import Footer from "./Footer";
import {motion} from 'framer-motion'

function Bylaws(){
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
         className="flex flex-col min-h-screen ">
            <div className="flex-grow">
                <div className="flex flex-col justify-center items-center w-2/3 gap-2 m-auto text-center py-5" >
                    <h1 className=" text-4xl text-red-600">ONSUAA Bylaws</h1>
                    <p>Bylaws are the rules that govern how an organization is run. They are essential for ensuring that the organization operates effectively and efficiently. Bylaws typically cover a wide range of topics, including the organization's purpose, structure, membership, meetings, and decision-making processes. Bylaws are legally binding and must be followed by all members of the organization.</p>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Bylaws;