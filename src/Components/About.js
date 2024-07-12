import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaUserPlus, FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiAntdesign } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiBlueprint } from "react-icons/si";

const Dot = ({ x, y, opacity }) => (
    <div
        className="absolute rounded-full cursor-pointer"
        style={{
            width: '2px',
            height: '2px',
            top: `${y}px`,
            left: `${x}px`,
            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
    />
);

export default function About() {

    const [dots, setDots] = useState([]);
    const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
    const backgroundHeight = 1500;


    useEffect(() => {
        const handleResize = () => {
            setBackgroundWidth(window.innerWidth);

        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numberOfDots = 200;


    useEffect(() => {
        const newDots = Array.from({ length: numberOfDots }, (_, index) => ({
            x: Math.random() * backgroundWidth,
            y: Math.random() * backgroundHeight,
            index,
            opacity: Math.random() * 0.3 + 0.3,
        }));
        setDots(newDots);
    }, [backgroundWidth, backgroundHeight, numberOfDots]);

    const minDistanceBetweenDots = 40;

    const handleBackgroundClick = (e) => {
        const clickX = e.clientX - e.target.getBoundingClientRect().left;
        const clickY = e.clientY - e.target.getBoundingClientRect().top;

        const isTooClose = dots.some((dot) => {
            const distance = Math.sqrt((dot.x - clickX) ** 2 + (dot.y - clickY) ** 2);
            return distance < minDistanceBetweenDots;
        });

        if (!isTooClose) {
            const newDot = {
                x: clickX,
                y: clickY,
                opacity: Math.random() * 0.5 + 0.1,
            };

            setDots([...dots, newDot]);
        }
    };
    return (
        <>
            <div className='bg-black h-fit   text-white ' style={{ backgroundImage: "url('assets/image.jpg", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={handleBackgroundClick}>
                <Header />

                {dots.map((dot, index) => (
                    <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
                ))}
                <div className='sm:mt-20 mt-10 sm:p-32 p-16'>
                    <div className="flex sm:flex-row flex-col mb-4">
                        <div className="sm:w-1/2 flex justify-center">
                            <img
                                src="assets/saanu.jpg"
                                className=" w-96  rounded-3xl hover:shadow-blue-500 hover:shadow-xl"
                                alt="Shahnawaz"
                            />
                        </div>
                        <div className="sm:w-1/2 sm:mt-0 mt-10">
                            <p className='sm:text-5xl text-4xl text-center sm:mt-0 mt-5 font-serif'>Know Who <span className='text-blue-600 font-bold'>I'M</span></p>
                            <p className='mt-10 sm:text-[25px] text-xl'>Hello, my name is <span className='text-blue-600 font-bold'> Shahnawaz Bheda </span> and I am a dedicated Front - End developer. Currently, I am in my 4th semester pursuing a Msc-IT degree at Atmiya University.</p>
                            <p className='mt-10 sm:text-[25px] text-xl'>Throughout my academic endeavors, I've adeptly executed numerous projects leveraging  Next.JS and React.JS, showcasing proficiency in Git and GitHub. Additionally, I've honed my skills working with four prominent CSS frameworks—Ant Design, Bootstrap, Tailwind CSS, and Daisy UI.</p>
                            <div className='flex mt-10'>
                                <a href='https://drive.google.com/file/d/1Nq_1idGoWbIf7UkpBZTz1z8D1lEa4Ol-/view' type='submit' className='bg-blue-600 rounded-md p-3 sm:w-56 font-bold text-white mt-8 sm:ms-44 flex'><AiOutlineFilePdf className='sm:ms-12 mt-1' /><span className='ms-2'>Resume</span></a>

                                <a href='https://in.linkedin.com/in/twisha-solanki-982326227?trk=public_profile_browsemap' type='submit' className='bg-green-500 rounded-md p-3 sm:w-56 font-bold text-white mt-8 sm:ms-10  ms-5  flex '><FaUserPlus className='sm:ms-12 mt-1' /><span className='ms-2'>Hire Me</span></a>
                            </div>

                        </div>
                    </div>
                </div>

                <p className='font-bold text-5xl text-white sm:p-24 text-center'>Professional <span className='text-blue-600'>Skillset</span></p>
                <div className='container mx-auto '>
                    <div className='flex flex-wrap justify-center sm:flex-row flex-col items-center'>
                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <FaReact className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-24 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <TbBrandNextjs className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-24 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <SiTailwindcss className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>
                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-24 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <FaBootstrap className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-center sm:flex-row flex-col items-center sm:mt-16  mb-14'>
                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-0 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <img src='assets/daisyUI-removebg-preview.png' className='text-white sm:w-24 sm:h-20 w-32 h-32 text-center' />
                        </div>

                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-24 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <SiAntdesign className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                        <div className='border shadow-blue-600 sm:mt-0 mt-10 sm:ms-24 shadow-lg sm:ms-0 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <IoLogoElectron className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                        <div className='border shadow-blue-600 sm:mt-0 mt-10 shadow-lg sm:ms-24 hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-56 w-80 h-40 shadow:lg hover:text-gray-50 rounded-lg flex items-center justify-center'>
                            <SiBlueprint className='text-white sm:w-28 sm:h-20 w-32 h-32 text-center' />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
