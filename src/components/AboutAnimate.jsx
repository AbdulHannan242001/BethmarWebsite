import React, { useState, useEffect } from 'react';
import CivilSvg from '../assets/svg/Civil.svg';
import DeliverySvg from '../assets/svg/Delivery.svg';
import EfficiencySvg from '../assets/svg/Efficiency.svg';
import FamilyCultureSvg from '../assets/svg/FamilyCulture.svg';
import FibreSvg from '../assets/svg/Fibre.svg';
import HealthSafetySvg from '../assets/svg/HealthSafety.svg';
import PowerSvg from '../assets/svg/Power.svg';
import QualitySvg from '../assets/svg/Quality.svg';
import WaterSvg from '../assets/svg/Water.svg';
import { motion } from 'framer-motion';

const AboutAnimate = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const headings = [
        { text: 'CIVIL', svg: CivilSvg },
        { text: 'FIBRE', svg: FibreSvg },
        { text: 'POWER', svg: PowerSvg },
        { text: 'WATER', svg: WaterSvg },
        { text: 'HEALTH & SAFETY', svg: HealthSafetySvg },
        { text: 'QUALITY', svg: QualitySvg },
        { text: 'EFFICIENCY', svg: EfficiencySvg },
        { text: 'FAMILY CULTURE', svg: FamilyCultureSvg },
        { text: 'DELIVERY', svg: DeliverySvg }
    ];

    const svgVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-[90vh] text-justify max-w-[1400px] items-center justify-center mx-auto content-center bg-white p-4 shadow-2xl mb-12 rounded-lg'>
            <div className='items-center justify-center md:p-0 px-4 text-center'>
                <h1 className='text-xl md:text-4xl font-semibold p-4 font-poppins'>
                    BethMar is a multi-utility contractor, that deliver in
                </h1>
                <div className='flex justify-center flex-wrap p-2'>
                    {headings.slice(0, 4).map((heading, index) => (
                        <motion.div
                            key={index}
                            className='w-3/12 p-2'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={svgVariants}
                        >
                            <img src={heading.svg} alt="" className='h-16 w-16 md:h-24 md:w-24 mx-auto fill-current text-[#0e9a48]' />
                            <h2 className='text-center text-xs md:text-sm font-bold text-gray-500 pt-3'>{heading.text}</h2>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className='items-center justify-center md:p-0 px-4 text-center'>
                <h1 className='text-xl md:text-4xl font-semibold p-4 font-poppins'>
                    We pride ourselves on
                </h1>
                <div className='flex justify-center flex-wrap p-2'>
                    {headings.slice(4).map((heading, index) => (
                        <motion.div
                            key={index}
                            className='w-1/5 p-2'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={svgVariants}
                        >
                            <img src={heading.svg} alt="" className='h-16 w-16 md:h-24 md:w-24 mx-auto fill-current text-[#0e9a48]' />
                            <h2 className='text-center text-xs md:text-sm font-bold text-gray-500 pt-3'>{heading.text}</h2>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default AboutAnimate;
