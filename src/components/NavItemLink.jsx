/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavItemLink({ linkTo, linkText, itemVariants, isOpen }) {
    return (
        <>
            {/* Mobile view */}
            <motion.li
                className="block lg:hidden"
                variants={itemVariants}
                whileHover={isOpen ? { x: 20 } : {}}
            >
                <Link to={linkTo} className="block px-2 py-1">{linkText}</Link>
            </motion.li>

            {/* Desktop view */}
            <motion.li
                className="hidden lg:block"
                whileHover={{ scale: 1.1 }}
            >
                <Link to={linkTo} className="block px-2 py-1">{linkText}</Link>
            </motion.li>
        </>
    );
}

export default NavItemLink;