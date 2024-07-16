import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import logo from '../assets/bethmar.png';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const closeDropdown = () => {
        setIsNavOpen(false);
        setIsServicesOpen(false);
    };

    useEffect(() => {
        closeDropdown();
    }, [location.pathname]);

    const navVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <nav className={`bg-black text-white fixed w-full z-50 transition-transform duration-300 shadow-2xl`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold">
                            <img src={logo} alt="Bethmar" className="h-16 w-auto overflow-hidden" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        {renderNavLinks(location.pathname)}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
                            aria-expanded={isNavOpen}
                            aria-label="Toggle menu"
                        >
                            {isNavOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={isNavOpen ? "open" : "closed"}
                variants={navVariants}
                className="md:hidden"
            >
                <div className="px-5 pt-2 pb-3 space-y-1 sm:px-3">
                    {renderNavLinks(location.pathname)}
                </div>
            </motion.div>
        </nav>
    );

    function renderNavLinks(currentPath) {
        const links = [
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/services", text: "Services" },
            { to: "/contact", text: "Contact" }
        ];

        return links.map((link, index) => {
            const isDropdown = link.dropdown;
            const isSelected = currentPath === link.to;

            return (
                <div className='flex flex-col' key={index}>
                    <Link
                        to={link.to}
                        className={`px-3 py-2 text-sm md:text-lg font-medium cursor-pointer transition-transform transform hover:scale-105 ${isSelected ? 'border-accentRed border-b-2 transition ease-in-out duration-300 ' : ''}`}
                    >
                        {link.text}
                    </Link>
                </div>
            );
        });
    }
}

export default Navbar;
