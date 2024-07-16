import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
        const size = getRandomInt(50, 200);
        const top = getRandomInt(0, 100);
        const left = getRandomInt(0, 100);
        const color = i % 2 === 0 ? 'bg-gradient-to-r from-accentRed-light to-accentRed-dark' : 'bg-gradient-to-r from-accentGreen-light to-accentGreen-dark';
        circles.push({ size, top, left, color });
    }
    return circles;
};

const circles = generateCircles(10);

const moveRight = {
    initial: { x: '80%' },
    animate: { x: 0 },
};

const moveLeft = {
    initial: { x: '-80%' },
    animate: { x: 0 },
};

const Services = () => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: false });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: false });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: false });
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: false });

    return (
        <div className='container mx-auto py-12 bg-gray-100 relative overflow-hidden'>
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full backdrop-filter backdrop-blur-2xl ${circle.color}`}
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: `${circle.top}%`,
                        left: `${circle.left}%`,
                        opacity: 0.5,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                />
            ))}
            <div className='text-center mt-12 bg-accentRed-dark relative z-10'>
                <h1 className='font-poppins max-w-[1400px] text-center mx-auto text-white p-4 text-4xl md:text-6xl font-bold'>Our comprehensive list of services and solutions</h1>
            </div>
            <div className='max-w-[1400px] mx-auto space-y-16 shadow-2xl bg-white p-4 rounded mt-6 relative z-10'>
                <motion.div
                    ref={ref1}
                    initial="initial"
                    animate={inView1 ? "animate" : "initial"}
                    variants={moveRight}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:w-8/12 shadow-xl rounded-lg p-4 flex h-[35vh] relative z-10 inset-0 bg-gray-100 backdrop-filter backdrop-blur-sm'
                >
                    <div className='w-6/12 md:w-4/12 border mr-4'>
                        <img src="" alt="" />
                    </div>
                    <div className='w-6/12 md:w-8/12'>
                        <h2 className='font-poppins text-2xl md:text-4xl font-semibold'>Telecom</h2>
                        <p>Turnkey solutions with design validation & pricing</p>
                        <ul className='text-slate-600 font-thin list-disc ml-5 pt-4 flex flex-col'>
                            <li>MDU's</li>
                            <li>RFSI</li>
                            <li>Break Fix</li>
                            <li>All Emergency Work</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial="initial"
                    animate={inView2 ? "animate" : "initial"}
                    variants={moveLeft}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:w-8/12 shadow-xl rounded-lg p-4 flex h-[35vh] ml-auto relative z-10 inset-0 bg-gray-100 backdrop-filter backdrop-blur-sm'
                >
                    <div className='w-6/12 md:w-4/12 border mr-4'>
                        <img src="" alt="" />
                    </div>
                    <div className='w-6/12 md:w-8/12'>
                        <h2 className='font-poppins text-2xl md:text-4xl font-semibold'>Civil</h2>
                        <p>Trenching & ducting on all surfaces including highways</p>
                        <ul className='text-slate-600 font-thin list-disc ml-5 pt-4 flex flex-col'>
                            <li>In house reinstatement</li>
                            <li>Planning</li>
                            <li>HA permits</li>
                            <li>TTRO Applications</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref3}
                    initial="initial"
                    animate={inView3 ? "animate" : "initial"}
                    variants={moveRight}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:w-8/12 shadow-xl rounded-lg p-4 flex h-[35vh] relative z-10 inset-0 bg-gray-100 backdrop-filter backdrop-blur-sm'
                >
                    <div className='w-6/12 md:w-4/12 border mr-4'>
                        <img src="" alt="" />
                    </div>
                    <div className='w-6/12 md:w-8/12'>
                        <h2 className='font-poppins font-semibold text-2xl md:text-4xl'>Traffic Management</h2>
                        <ul className='text-slate-600 font-thin list-disc ml-5 pt-4 flex flex-col'>
                            <li>In house TM services</li>
                            <li>Traffic Management Plans</li>
                            <li>Divergence</li>
                            <li>Manual Control</li>
                            <li>High-speed solutions including IPV</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref4}
                    initial="initial"
                    animate={inView4 ? "animate" : "initial"}
                    variants={moveLeft}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:w-8/12 shadow-xl rounded-lg p-4 flex h-[35vh] ml-auto relative z-10 inset-0 bg-gray-100 backdrop-filter backdrop-blur-sm'
                >
                    <div className='w-6/12 md:w-4/12 border mr-4'>
                        <img src="" alt="" />
                    </div>
                    <div className='w-6/12 md:w-8/12'>
                        <h2 className='font-poppins font-semibold text-2xl md:text-4xl'>Water</h2>
                        <ul className='text-slate-600 font-thin list-disc ml-5 pt-4 flex flex-col'>
                            <li>Construction of spill tanks</li>
                            <li>Replacing water mains</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref5}
                    initial="initial"
                    animate={inView5 ? "animate" : "initial"}
                    variants={moveRight}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:w-8/12 shadow-xl rounded-lg p-4 flex h-[35vh] relative z-10 inset-0 bg-gray-100 backdrop-filter backdrop-blur-sm'
                >
                    <div className='w-6/12 md:w-4/12 border mr-4'>
                        <img src="" alt="" />
                    </div>
                    <div className='w-6/12 md:w-8/12'>
                        <h2 className='font-poppins font-semibold text-2xl md:text-4xl'>Power</h2>
                        <ul className='text-slate-600 font-thin list-disc ml-5 pt-4 flex flex-col'>
                            <li>EV chargers installation including feeder pillars</li>
                            <li>DNO liaison & Ammeter installation</li>
                            <li>Solutions for solar park and data ducting center</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
