import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div id="contact" className="py-6 md:py-12 bg-gray-100">
            <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto space-y-8 md:space-y-0 md:space-x-12 p-4">
                <motion.div
                    className="md:w-1/2 md:p-4"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    variants={formVariants}
                >
                    <h2 className="text-left font-semibold text-3xl md:text-5xl mb-1 font-poppins">Contact Us</h2>
                    <div className='w-5/12 h-1 bg-accentRed-dark mb-2'></div>
                    <p className='md:px-4 px-0 py-1 md:py-2 font-montserrat text-lg md:text-2xl w-10/12 font-normal'><span className='font-semibold'></span> Suite 2,Wentworth Lodge, Great North Road, Welwyn Garden City, AL8 7SR</p>
                    <p className='md:px-4 px-0 py-1 md:py-2 font-montserrat text-lg md:text-2xl w-10/12 font-normal'><span className='font-semibold'></span> 01707322748</p>
                    <p className='md:px-4 px-0 py-1 md:py-2 font-montserrat text-lg md:text-2xl w-10/12 font-normal'><span className='font-semibold'></span> info@bethmar.co.uk</p>
                </motion.div>
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={formVariants}
                >
                    <form className="max-w-xl mx-auto bg-white p-8 rounded shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-base" htmlFor="name">Name</label>
                            <input autoComplete='name' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light" type="text" id="name" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-base" htmlFor="email">Email</label>
                            <input autoComplete='email' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light" type="email" id="email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-base" htmlFor="phone">Phone</label>
                            <input autoComplete='Phone' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light" type="text" id="phone" name="phone" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-base" htmlFor="subject">Subject</label>
                            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light" type="text" id="subject" name="subject" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-base" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light" id="message" name="message" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-montserrat px-6 py-3 bg-accentRed-dark text-white text-sm md:text-base shadow-md hover:bg-accentRed transition-all duration-300"
                                type="submit"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;
