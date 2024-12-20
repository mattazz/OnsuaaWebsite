import SocialIcon from "./SocialIcon";
import { motion } from "framer-motion";

// Icons
import FBIcon from '../assets/FB_icon.webp';
import ContactForm from "./ContactForm";
import Footer from "./Footer";

SocialIcon  

function ContactUs() {

    
    return (
        <>
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1,  }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-7 lg:flex-row md:flex-col lg:space-x-8 p-20 min-h-screen items-center ">
            <div className="lg:w-1/2 md:items-center md:text-center flex flex-col justify-center h-full flex-grow">
                <h1 className="text-5xl mb-3">Let us know</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore illum soluta! In corrupti maxime nesciunt sunt eaque fuga quam voluptatum distinctio quidem doloribus mollitia autem numquam et, doloremque dolore?</p>
                <br />
                <p>Tel: 123-456-7890</p>
                <p>Email: hello@onsuaa.com</p>

                <p>Office: 48 Stratlac Rd, Pickering, Ontario</p>
                <div className="mt-4 flex gap-4">
            <SocialIcon
                        link="https://www.facebook.com"
                        imgPath={FBIcon}
                        alt="Facebook"
                    />
                    <SocialIcon
                        link="https://www.facebook.com"
                        imgPath={FBIcon}
                        alt="Facebook"
                    />
                    <SocialIcon
                        link="https://www.facebook.com"
                        imgPath={FBIcon}
                        alt="Facebook"
                    />
                </div>
            </div>
            <div className="lg:w-1/2 md:w-full sm:w-full w-full flex justify-center items-center h-full">
                <ContactForm />
            </div>
        </motion.div>
        <Footer />
        </>
    );
}

export default ContactUs;