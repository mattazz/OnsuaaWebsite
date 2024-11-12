import SocialIcon from "./SocialIcon";
import { motion } from "framer-motion";

// Icons
import FBIcon from '../assets/FB_icon.webp';
import ContactForm from "./ContactForm";

SocialIcon

function ContactUs() {

    
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1,  }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-7 lg:flex-row lg:space-x-8 p-20 border-2 h-screen">
            <div className="lg:w-1/2 flex flex-col justify-center h-full">
                <h1 className="text-5xl mb-3">Let us know</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore illum soluta! In corrupti maxime nesciunt sunt eaque fuga quam voluptatum distinctio quidem doloribus mollitia autem numquam et, doloremque dolore?</p>
                <br />
                <p>Tel: 123-456-7890</p>
                <p>Email: hello@onsuaa.com</p>

                <p>Office: 48 Spayzac Rd, Pickering, Ontario</p>
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
            <div className="lg:w-1/2 flex justify-center items-center h-full">
                <ContactForm />
            </div>
        </motion.div>
    );
}

export default ContactUs;