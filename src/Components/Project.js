import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaUserPlus,  } from "react-icons/fa6";
import { FaGithub,FaEye } from "react-icons/fa";



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

export default function Project() {

    const ProjectData = [

        {
            "id": "1",
            "img": "assets/organ-donation.PNG",
            "description": "The organ donation project seeks to raise awareness about the importance of organ donation. By providing clear information about the process and benefits of organ donation, the project aims to dispel myths and encourage people to become donors. It emphasizes the positive impact a single donor can have on multiple lives and addresses legal and ethical considerations. Through engaging content and community outreach, the project aims to create a more informed and supportive environment for organ donation. Ultimately, the goal is to inspire individuals to register as organ donors and contribute to saving lives through this selfless act.",
            "gitlink": "https://github.com/shahnawaz-bheda/organ-donation-Laravel",
            "demolink": ""
        },
        {
            "id": "2",
            "img": "assets/CRM.PNG",
            "description": "Customer Relationship Management (CRM) is a vital strategy that businesses employ to build and maintain strong connections with their customers. In today's competitive landscape, effective CRM systems are indispensable tools. These systems help businesses streamline communication, manage customer data, and enhance overall customer experience. By centralizing customer information, businesses can gain valuable insights into their preferences and behaviors, allowing for more personalized interactions. CRM also plays a crucial role in tracking customer interactions, managing sales leads, and improving overall customer satisfaction. In essence, a well-implemented CRM system is not just a technological solution; it's a customer-centric approach that fosters long-lasting relationships, improves customer loyalty, and contributes to sustainable business growth.",
            "gitlink": "https://github.com/shahnawaz-bheda/CRM-react",
            "demolink": "https://customer-relationship-management.vercel.app/"
        },

        {
            "id": "3",
            "img": "assets/online-cafe-management.PNG",
            "description": "Online cafe management systems are integral tools that streamline the operations of cafes, enhancing efficiency and customer experience. These systems typically encompass various features such as order management, inventory tracking, and customer engagement tools. Through an intuitive interface, cafe owners and staff can easily process orders, manage inventory levels, and keep track of sales. Online cafe management systems often include online ordering capabilities, allowing customers to place orders remotely for pickup or delivery. This not only expands the cafe's reach but also caters to the growing demand for convenient dining options. Additionally, these systems may offer customer loyalty programs and analytics tools to help cafes understand their customers better and tailor their services accordingly. By leveraging technology in cafe management, businesses can optimize their processes, improve customer satisfaction, and stay competitive in the ever-evolving hospitality industry.",
            "gitlink": "https://github.com/shahnawaz-bheda/online-cafe-management-Asp.Net",
            "demolink": ""
        },
        {
            "id": "4",
            "img": "assets/movie-web.PNG",
            "description": "The Saanu`s Film Nest project is a comprehensive initiative designed to offer users a legal and convenient platform for accessing and downloading movies. Committed to upholding copyright laws and licensing agreements, the project focuses on securing the rights to a diverse range of movies through partnerships with distributors and production houses. The user experience is paramount, with a user-friendly website or app featuring secure authentication, robust data protection, and a seamless download mechanism. The platform allows users to create profiles, track their downloads, and receive personalized recommendations.",
            "gitlink": "https://github.com/shahnawaz-bheda/Movie-Prime-Reactjs",
            "demolink": ""
        },
        {
            "id": "5",
            "img": "assets/MediCare.PNG",
            "description": "The Medicare Appointment Book project is a pivotal initiative aimed at revolutionizing the scheduling process within the Medicare healthcare system. Acknowledging the current challenges in appointment management, this project focuses on developing a sophisticated system with user-friendly interfaces, multi-step appointment scheduling, and robust security measures. Users, including patients, healthcare providers, and administrators, will benefit from a streamlined process that integrates seamlessly with electronic health records (EHR) and ensures accessibility for individuals with diverse needs. The notification system, incorporating email, SMS, and app alerts, aims to enhance patient adherence to appointments. Moreover, the project places a strong emphasis on regulatory compliance, incorporating feedback mechanisms for continuous improvement and a comprehensive training and support infrastructure. By addressing these critical components, the Medicare Appointment Book project aspires to improve the overall patient experience, enhance healthcare provider efficiency, and contribute to the broader goal of optimizing healthcare delivery within the Medicare framework.",
            "gitlink": "https://github.com/shahnawaz-bheda/Medicare-Appointment-Reactjs",
            "demolink": "https://medicare-appointment-reactjs.vercel.app/"
        },
        {
            "id": "6",
            "img": "assets/cafe-billing-system.PNG",
            "description": "The Cafe Billing System in C# is a meticulously designed application that offers a seamless and efficient experience for both customers and cafe staff. With an intuitive graphical user interface, users can easily navigate through the menu, select items, and specify quantities, while the system calculates the subtotal, taxes, and total amount. The payment handling module allows for flexibility, accommodating various payment methods such as cash or credit cards, with the system calculating change and finalizing transactions. Receipts are generated with precision, detailing the ordered items, quantities, prices, and a comprehensive total. The system also incorporates features for discounts, promotions, and order history, providing a versatile tool for both day-to-day operations and strategic business analysis. Security measures are implemented to safeguard customer data, and user-friendly error handling ensures a smooth billing process. Whether managing the cafe's daily transactions or analyzing sales trends, this Cafe Billing System in C# aims to enhance the overall efficiency and effectiveness of cafe management, catering to the diverse needs of both customers and cafe staff.",
            "gitlink": "https://github.com/shahnawaz-bheda/cafe-billing-CSharp",
            "demolink": ""
        }

    ]

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

            <div className='bg-black h-fit   text-white ' style={{ backgroundImage: "url('assets/image.jpg", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={handleBackgroundClick} >
                <Header />

                {dots.map((dot, index) => (
                    <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
                ))}
                <div className='mt-20 text-center sm:p-24 p-10'>
                    <p className=' text-5xl'>My Recent <span className='text-blue-600'>Works</span></p>
                    <p className='text-xl mt-2'>Here are a few projects I've worked on recently.</p>
                </div>
                <div className='container mx-auto mb-40 '>
                    <div className='flex justify-center sm:flex-row flex-col  sm:ms-0 ms-5'>
                        <div className='flex flex-wrap justify-center gap-20'>
                            {ProjectData.map((item, index) => (
                                <div key={index} className='border p-3 shadow-blue-600 sm:mt-0 mt-10 shadow-lg hover:shadow-blue-600 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-blue-600 sm:w-96 w-80  shadow:lg hover:text-gray-50 rounded-lg'>
                                    <img src={item.img} alt={`Project ${index + 1}`} />
                                    <div className='description-container'>
                                        <p className='mt-2 p-3 sm:block hidden'>{item.description}</p>
                                    </div>
                                    <div className='flex sm:mt-10 justify-center'>
                                        {item.gitlink && (
                                            <a href={item.gitlink} type='submit' className='bg-blue-600 rounded-md p-3 ms-10 w-32 font-bold text-white mt-8 flex justify-center '>
                                                <FaGithub className='mt-1' />
                                                <span className='ms-2'>Github</span>
                                            </a>
                                        )}
                                        {item.demolink && (
                                            <a href={item.demolink} type='submit' className='bg-blue-600 rounded-md p-3 w-32 font-bold text-white mt-8 ms-5 justify-center flex '>
                                                <FaEye className='flex mt-1' />
                                                <span className='ms-2'>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
