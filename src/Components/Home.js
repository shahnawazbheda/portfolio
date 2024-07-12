import Header from './Header';
import TypingAnimation from './TypingAnimation';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';


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
export default function Home() {

    const [dots, setDots] = useState([]);
    const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
    const backgroundHeight = 1700;


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

    const texts = ['Web Developer . . .', 'Next.Js Developer . . .', 'React.Js Developer . . .'];
    return (
        <>
            <div className='bg-black h-fit  text-white ' style={{ backgroundImage: "url('assets/image.jpg", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={handleBackgroundClick}>
                <Header />
                {dots.map((dot, index) => (
                    <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
                ))}
                <div className=' pt-24 ' >
                    <div className='text-white sm:container sm:mx-auto'>
                        <div className="flex sm:flex-row flex-col mb-4 sm:ms-32 ms-10 sm:mt-20">
                            <div className="sm:w-1/2  sm:mt-32 mt-16">
                                <p className='text-white  sm:text-5xl text-3xl'>Hi There!
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </p>
                                <p className='text-white sm:text-5xl text-3xl mt-10'>I'M <span className='text-blue-600 font-bold'>Shahnawaz Bheda</span></p>
                                <div className="flex ">
                                    <div className="w-max mt-10">
                                        <h1 className="animate-typing overflow-hidden whitespace-nowrap  pr-5 sm:text-5xl text-xl text-white font-bold">
                                            <TypingAnimation texts={texts} />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-12">
                                <img src='assets/home-main-removebg-preview.png' className=' hover:scale-110 transform transition-transform duration-300 ' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:ms-32 sm:p-0 p-12 sm:mt-48 mt-36 '>
                        <div className="flex sm:flex-row flex-col ">
                            <div className="sm:w-1/2 font-sans mb-10 ">
                                <p className='sm:text-5xl text-3xl mb-10 text-center'>LET ME <span className='text-blue-600'> INTRODUCE </span> MYSELF</p>
                                <p className='sm:text-2xl text-xl'>Enthusiastic and dedicated Computer Science student with a specialization in web development, fervently pursuing opportunities to contribute to innovative projects utilizing <br /> <span className='text-blue-600 font-bold'>Next.js</span> and <span className='text-blue-600 font-bold'>React.js</span>.</p>
                                <p className='sm:text-2xl text-xl mt-10'>Proficient in the <span className='text-blue-600 font-bold'>Next.js</span> and <span className='text-blue-600 font-bold'>React.js</span> ecosystems, I'm driven to create engaging and performant web applications. My adeptness with these technologies enables me to architect seamless user experiences while ensuring optimal functionality.</p>
                                <p className='sm:text-2xl text-xl mt-10'>I am eager to apply and expand my expertise in <span className='text-blue-600 font-bold'>Next.js</span> and <span className='text-blue-600 font-bold'>React.js</span> within dynamic development teams, leveraging my skills to deliver immersive and impactful web experiences.</p>
                            </div>
                            <div className="sm:w-1/2 mb-10 flex justify-center">
                                <img
                                    src="assets/shahnawaz.png"
                                    className=" sm:w-96 w-72 rounded-xl hover:scale-110 transform transition-transform duration-300"
                                    alt="Shahnawaz"
                                />
                            </div>

                        </div>
                    </div>

                    <div className='text-center p-12'>
                        <div className='text-5xl '>
                            <h1>
                                <span>F</span>
                                <span>I</span>
                                <span>N</span>
                                <span>D</span>

                                <span className='ms-5'>M</span>
                                <span>E</span>

                                <span className='ms-5'>O</span>
                                <span>N</span>
                            </h1>
                        </div>


                        <p className='text-xl mt-5'>Feel free to <span className='text-blue-600 font-bold'> connect </span> with me</p>

                        <div className="flex justify-center mt-5 mb-4 ">
                            <div className="w-0/12 ">
                                <div className="rounded-full ...   w-12 h-12 hover:shadow-blue-600 shadow-[5px_2px_40px_1px_rgba(0,0,0,0.56)] ">
                                    <a href='https://github.com/shahnawazbheda' className="inline-flex    items-center justify-center w-12 h-12 mr-2 text-blue-600 transition-all duration-300 bg-white rounded-full shadow-md hover:shadow-xl ">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="w-0/12 ms-5">
                                <div className="rounded-full ...  w-12 h-12 hover:shadow-blue-600 shadow-[5px_2px_40px_1px_rgba(0,0,0,0.56)] ">
                                    <a href='https://twitter.com/BhedaShahnawaz' className="inline-flex   items-center justify-center w-12 h-12 mr-2 text-blue-600 transition-all duration-300 bg-white rounded-full shadow-md hover:shadow-xl ">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                            <div className="w-0/12 ms-5">
                                <div className="rounded-full ...  w-12 h-12 hover:shadow-blue-600 shadow-[5px_2px_40px_1px_rgba(0,0,0,0.56)] ">
                                    <a href='https://www.linkedin.com/in/shahnawaz-bheda-7771141a3/' className="inline-flex items-center justify-center w-12 h-12 mr-2 text-blue-600 transition-colors duration-150 bg-white rounded-full">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>

                                    </a>
                                </div>
                            </div>
                            <div className="w-0/12 ms-5">
                                <div className="rounded-full ...  w-12 h-12 hover:shadow-blue-600 shadow-[5px_2px_40px_1px_rgba(0,0,0,0.56)] ">
                                    <a href='https://www.instagram.com/i_nawaz_khatri/' className="inline-flex items-center justify-center w-12 h-12 mr-2 text-blue-600 transition-colors duration-150 bg-white rounded-full">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" /></svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    );
}
