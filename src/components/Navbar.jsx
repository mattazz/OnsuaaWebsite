import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavItemLink from "./NavItemLink";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {        
        setIsOpen(!isOpen);
    };

    const spring = {
        type: "spring",
        damping: 15,
        stiffness: 300,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
    };

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: spring,
        },
        exit: {
            opacity: 0,
            height: 0,
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className="bg-red-700 p-4 text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 flex flex-col lg:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex justify-between w-full lg:w-auto">
                    <Link to="/" className="text-xl font-bold">ONSUAA LOGO</Link>
                    <button onClick={toggleDropdown} className="text-white focus:outline-none lg:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            className={`flex flex-col  lg:flex-row lg:items-center lg:space-x-4 w-full lg:w-auto ${isOpen ? 'no-pointer-events' : ''}`}
                            onClick={toggleDropdown}
                            onAnimationComplete={() => {
                                // Remove pointer class
                                document.querySelector('.no-pointer-events').classList.remove('no-pointer-events');
                            }}
                        >
                            <NavItemLink linkTo="/" linkText="Home" itemVariants={itemVariants} isOpen={isOpen} />
                            <NavItemLink linkTo="/about" linkText="About" itemVariants={itemVariants} isOpen={isOpen}/>
                            <NavItemLink linkTo="/bylaws" linkText="Bylaws" itemVariants={itemVariants} isOpen={isOpen}/>
                            <NavItemLink linkTo="/officers" linkText="Officers" itemVariants={itemVariants} isOpen={isOpen}/>
                            <NavItemLink linkTo="/events" linkText="Events" itemVariants={itemVariants} isOpen={isOpen}/>
                            <NavItemLink linkTo="/contact-us" linkText="Contact Us" itemVariants={itemVariants} isOpen={isOpen}/>
                            <motion.li
                                variants={itemVariants}
                                className="inline-block bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:scale-105 w-auto lg:w-auto sm:w-32"
                            >
                                <Link to="/donate" className="block text-center">Donate</Link>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
                {/* Desktop Menu */}
                {!isOpen && (
                    <ul className="hidden lg:flex lg:items-center lg:space-x-4 w-full lg:w-full justify-end">
                        <NavItemLink linkTo="/" linkText="Home" />
                        <NavItemLink linkTo="/about" linkText="About" />
                        <NavItemLink linkTo="/bylaws" linkText="Bylaws" />
                        <NavItemLink linkTo="/officers" linkText="Officers" />
                        <NavItemLink linkTo="/events" linkText="Events" />
                        <NavItemLink linkTo="/contact-us" linkText="Contact Us" />
                        <li className="inline-block bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:scale-105 w-auto lg:w-auto sm:w-32">
                            <Link to="/donate" className="block text-center">Donate</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;