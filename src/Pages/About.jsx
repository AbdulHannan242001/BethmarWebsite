import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';
import BG from '../assets/AIBG.jpeg';
import fiber from '../assets/FiberServices.jpg';
import civil from '../assets/CivilServices.jpg';
import tms from '../assets/TrafficManagementServices.jpg';
import AboutAnimate from '../components/AboutAnimate';
import Cusotmers from '../components/Customers';
import { FaAngleRight } from "react-icons/fa";
import Customers from '../components/Customers';


const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            image: fiber,
            title: "Fiber Services",
            desc: "Our Specialist Fibre Services division enables us to offer our partner clients a resource of highly experienced fibre and hybrid cable engineers who are, collectively, able to reach anywhere in the United Kingdom within a two hour time frame.",
            link: "/services"
        },
        {
            image: civil,
            title: "Civil Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/services"
        },
        {
            image: tms,
            title: "Traffic Management Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/services"
        },
        {
            image: civil,
            title: "Reinstatement Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/services"
        },
        {
            image: civil,
            title: "Design Validation Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/services"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            rotateCarousel('next');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const rotateCarousel = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2)) , url(${BG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };



    return (
        <div className='bg-gray-100'>
            <AboutAnimate />
            <div className='text-center text-2xl md:text-5xl text-white font-bold bg-accentRed-dark py-6'>
                <h2 className="mx-4 font-poppins md:mx-auto">Solutions We Provide</h2>
            </div>
            <div className='bg-gray-100 py-4' style={divStyle}>
                <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='relative flex justify-center items-center overflow-hidden h-[80vh] md:h-[80vh] lg:[90vh]'>
                        <div className='relative top-5 w-full h-[90%]' style={{ perspective: '1200px', }}>
                            {services.map((service, index) => {
                                const angle = (360 / services.length) * (index - currentIndex);
                                const zIndex = services.length - Math.abs(index - currentIndex);
                                const isFront = index === currentIndex;
                                const gradient = !isFront ? 'bg-gradient-to-t from-black to-gray-200' : '';
                                const shadow = !isFront ? 'shadow-xl' : 'shadow-2xl';

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute w-[250px] md:w-[300px] h-[90%] bg-white rounded-lg transition-transform duration-1000 ease-in-out ${shadow} ${gradient}`}
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(600px)`,
                                            zIndex: zIndex,
                                            left: '50%',
                                            transformOrigin: 'center center -500px',
                                            transform: `translateX(-50%) rotateY(${angle}deg) translateZ(200px)`,
                                            filter: isFront ? 'none' : 'brightness(0.5)',
                                        }}
                                    >
                                        <div className='w-full h-[50%] overflow-hidden'>
                                            <img src={service.image} className='w-full h-full object-cover content-center' alt={`${service.title} image`} />
                                        </div>
                                        <div className='w-full p-4 md:text-justify flex flex-col'>
                                            <h2 className='font-poppins text-sm md:text-base font-bold text-gray-900 my-2'>{service.title}</h2>
                                            <p className='text-gray-600 text-xs mb-4'>{service.desc}</p>
                                            <div className='mt-auto'>
                                                <Link
                                                    to={service.link}
                                                    className='inline-block font-montserrat bg-red-600 text-xs md:text-xs text-white px-4 py-2 shadow hover:bg-red-700 transition duration-300'
                                                >
                                                    Check Out
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={() => rotateCarousel('next')}
                            className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
            <Customers />
            <CounterSection />
            <ContactUs />
        </div>
    );
};

export default About;
