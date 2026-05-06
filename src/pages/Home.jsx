import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import image1 from '../assets/Hero section1.jpeg'
import image2 from '../assets/image2.jpeg'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import icon5 from '../assets/icon4.png'
import icon6 from '../assets/icon5.png'
import icon7 from '../assets/icon6.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import room1 from '../assets/image11.png'
import room2 from '../assets/image12.png'
import room3 from '../assets/image13.png'
import image11 from '../assets/image14.png'
import image12 from '../assets/image15.png'
import image13 from '../assets/image16.png'
import image14 from '../assets/image17.png'
import image15 from '../assets/image18.png'
import image16 from '../assets/image19.png'
import image17 from '../assets/image20.png'
import image18 from '../assets/image21.png'
import image19 from '../assets/image22.png'
import image20 from '../assets/image23.png'
import image21 from '../assets/image24.png'
import image22 from '../assets/image25.png'
import image23 from '../assets/image26.png'
import image24 from '../assets/image27.png'
import footerLogo from "../assets/icon10.png";
import iconLocation from "../assets/icon13.png";
import iconPhone from "../assets/icon14.png";
import iconMail from "../assets/icon15.png";
import iconGoogle from "../assets/icon8.png";
import iconFacebook from "../assets/icon11.png";
import iconInstagram from "../assets/icon12.png";
import image25 from '../assets/image28.png'
import image26 from '../assets/image29.png'
import image27 from '../assets/image30.png'
import icon11 from '../assets/icon16.png'
import icon12 from '../assets/icon17.png'
import icon13 from '../assets/icon18.png'
import slide2 from '../assets/slide2.png'
import slide6 from '../assets/slide6.png'
import slide7 from '../assets/slide7.png'
import slide8 from '../assets/slide8.png'
import slide9 from '../assets/slide9.png'
import slide10 from '../assets/slide10.png'
import slide12 from '../assets/slide12.png'
import image28 from '../assets/image31.png'
import image29 from '../assets/image32.png'
import image30 from '../assets/image31.jpeg'
import image31 from '../assets/image32.jpeg'
import image32 from '../assets/image33.jpeg'
import image33 from '../assets/image34.jpeg'
import image34 from '../assets/image35.jpeg'
import image35 from '../assets/image36.jpeg'
import image36 from '../assets/image37.jpeg'
import image37 from '../assets/image38.WEBP'
import image38 from '../assets/image39.jpeg'
import image39 from '../assets/image40.jpeg'
import image40 from '../assets/image41.jpeg'
import image41 from '../assets/image42.jpeg'
import image42 from '../assets/image43.jpeg'
import image43 from '../assets/image44.jpeg'
import image44 from '../assets/image45.jpeg'
import image45 from '../assets/image46.jpeg'
import image46 from '../assets/image47.jpeg'
import image47 from '../assets/image48.jpeg'
import image48 from '../assets/image49.jpeg'
import image49 from '../assets/image50.jpeg'
import image50 from '../assets/image51.jpeg'

// New SVG Icons for the feature grid
const SafariJeepIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18V20H6V18H4ZM18 18V20H20V18H18ZM1 13V16H3V13H1ZM21 13V16H23V13H21ZM1 8V11H3V8H1ZM21 8V11H23V8H21ZM1 3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V6H1V3ZM3 3V4H21V3C21 2.44772 20.5523 2 20 2H4C3.44772 2 3 2.44772 3 3ZM1 17H23V18H1V17ZM5 18V19H19V18H5ZM3 13V16H21V13H3ZM5 13H19V14H5V13ZM6 14V15H18V14H6Z" fill="#32CD32"/>
        <path d="M7 6H17V12H7V6ZM9 8H15V10H9V8Z" fill="#32CD32"/>
        <circle cx="8.5" cy="19.5" r="1.5" stroke="#32CD32" strokeWidth="2"/>
        <circle cx="15.5" cy="19.5" r="1.5" stroke="#32CD32" strokeWidth="2"/>
    </svg>
);

const CustomizedItinerariesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#32CD32"/>
        <path d="M3 17V19H21V17H3ZM5 17H19V18H5V17Z" fill="#32CD32"/>
        <path d="M8 12L10 14L14 10" stroke="#32CD32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const KnowledgeableGuidesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z" fill="#32CD32"/>
        <path d="M6 22V20C6 18.3431 7.34315 17 9 17H15C16.6569 17 18 18.3431 18 20V22H6ZM8 20H16C16 19.4477 15.5523 19 15 19H9C8.44772 19 8 19.4477 8 20Z" fill="#32CD32"/>
        <path d="M19 8V10C19 11.1046 18.1046 12 17 12H7C5.89543 12 5 11.1046 5 10V8H19ZM7 8H17V10H7V8Z" fill="#32CD32"/>
        <path d="M12 12V16M12 16H10M12 16H14" stroke="#32CD32" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const GroupToursIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8Z" fill="#32CD32"/>
        <path d="M6 18C6 16.3431 7.34315 15 9 15H15C16.6569 15 18 16.3431 18 18V20H6V18ZM8 18V19H16V18C16 17.4477 15.5523 17 15 17H9C8.44772 17 8 17.4477 8 18Z" fill="#32CD32"/>
        <path d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10Z" fill="#32CD32"/>
        <path d="M22 16V18H20C20 16.3431 18.6569 15 17 15C18.6569 15 20 16.3431 20 18V20H22V16Z" fill="#32CD32"/>
        <path d="M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10Z" fill="#32CD32"/>
        <path d="M2 16V18C2 16.3431 3.34315 15 5 15C3.34315 15 2 16.3431 2 18V20H0V16H2Z" fill="#32CD32"/>
    </svg>
);


function Home() {
    const [currentHeaderSilde, setCurrentHeaderSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const slides = [
        { image: image1 },
        { image: slide2 },
        { image: image39 },
        { image: image49 }
    ];
    const [curruntSlide, setCurrentSlide] = useState(0);
    const [chooseAreaAnimate, setChooseAreaAnimate] = useState(true)
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const chooseAreaSlides = [
        {
            image: slide6,
            desc: 'THE EXPERIENCE'
        },
        {
            image: slide7,
            desc: 'THE HUMAN CONNECTION'
        },
        {
            image: slide8,
            desc: 'COMFORT & SAFETY'
        },
        {
            image: slide9,
            desc: 'THE EXPERIENCE'
        },
        {
            image: slide10,
            desc: 'THE HUMAN CONNECTION'
        },
        {
            image: image45,
            desc: 'COMFORT & SAFETY'
        },
        {
            image: slide12,
            desc: 'COMFORT & SAFETY'
        }

    ]

    const reviewsData = [
        {
            name: "Lean Lander",
            date: "March 12, 2026",
            rating: 5,
            image: image23,
            review: "The safari experience was beyond my expectations. The guides were so knowledgeable and we saw so many elephants up close. The resort itself is a peaceful haven."
        },
        {
            name: "Jaqu S.",
            date: "March 17, 2026",
            rating: 5,
            image: image28,
            review: "Absolutely incredible! The wildlife sightings were spectacular. Our guide knew every animal by name and shared fascinating stories about Udawalawe."
        },
        {
            name: "Kim Grobe-Venhaus",
            date: "March 19, 2026",
            rating: 5,
            image: image29,
            review: "Green Wild Safari Resort exceeded all our expectations. The eco-friendly approach and authentic experiences made our trip unforgettable."
        },
        {
            name: "Sarah Mitchell",
            date: "March 22, 2026",
            rating: 5,
            image: image25,
            review: "The morning safari was magical. Watching the sunrise over the grasslands while elephants roamed freely was a once-in-a-lifetime experience."
        },
        {
            name: "David Chen",
            date: "March 25, 2026",
            rating: 5,
            image: image26,
            review: "Outstanding service and incredible wildlife encounters. The resort's commitment to conservation is truly inspiring."
        },
        {
            name: "Maria Rodriguez",
            date: "March 28, 2026",
            rating: 5,
            image: image27,
            review: "From the moment we arrived, everything was perfect. The guides, the vehicles, the accommodations - all world-class."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeaderSlide((prev) => (prev + 1) % slides.length)
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        if (curruntSlide === chooseAreaSlides.length) {
            const timer = setTimeout(() => {
                setChooseAreaAnimate(false);
                setCurrentSlide(0);
                setTimeout(() => setChooseAreaAnimate(true), 50);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [curruntSlide, chooseAreaSlides.length]);

    const whatsappNumber = "94769392153";

    const handleWhatsApp = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Gallery lightbox state
    const galleryImages = [
        image11, image12, image13, image14,
        image15, image16, image42, image18,
        image19, image20, image21, image22,
        // Additional images to fill 50+
        image30, image31, image32, image33,
        image37, image36, image35, image34,
        image38, image39, image40, image41,
        image42, image43, image44, image45,
        image49, image48, image47, image46,
        image50, image6, image11, image12,
        image13, image14, image15, image16,
        image17, image18, image19, image20,
        image21, image22, image7, image8,
        image9, image10, image6, image11,
        image12, image13
    ];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    const closeLightbox = () => setLightboxOpen(false);
    const prevImage = useCallback(() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length), [galleryImages.length]);
    const nextImage = useCallback(() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length), [galleryImages.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, nextImage, prevImage]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInquirySubmit = () => {
        if (!formData.name || !formData.phone) {
            alert("Please fill in at least your name and phone number.");
            return;
        }
        const text = `Inquiry from Website:
                Name: ${formData.name}
                Email: ${formData.email}
                Phone: ${formData.phone}
                Message: ${formData.message}`;
        handleWhatsApp(text);
    };
    return (
        <div className="min-h-screen overflow-x-hidden">

            <div id="home" className="relative h-screen">
                <img src={slides[currentHeaderSilde].image} className="absolute inset-0 w-full h-full z-0" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeaderSlide(index)}
                            className={`w-4 h-4 rounded-full transition ${currentHeaderSilde === index
                                ? "scale-110"
                                : "bg-white/50"
                                }`}
                            style={currentHeaderSilde === index ? { backgroundColor: '#2eb872' } : {}}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <div className="relative z-20 flex flex-col min-h-[calc(100vh)]">
                    <nav className="bg-black h-16 md:h-20 flex justify-between items-center px-6 md:px-12 overflow-visible">
                        <div className="flex items-center mr-30">
                            <img src={logo} className="h-16 md:h-48 w-auto " />
                        </div>
                        {/* Desktop Navigation bar */}
                        <div className="hidden md:flex gap-8 items-center justify-end">
                            <a href="#home" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">Home</a>
                            <a href="#about" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| About us</a>
                            <a href="#safari" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Safari Packages</a>
                            <a href="#gallery" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Gallery</a>
                            <a href="#review" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Review</a>
                            <a href="#contact" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Contact us</a>
                            <button onClick={() => handleWhatsApp("Hello, I would like to book a safari/stay.")} style={{ backgroundColor: '#2eb872' }} className="text-black font-semibold border-0 rounded-lg h-10 px-6 hover:opacity-90 transition duration-300 text-sm">Book Now</button>
                        </div>
                        {/* Mobile navigation bar */}
                        <button className="md:hidden text-white text-2xl border-0 bg-transparent cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </nav>

                    {menuOpen && (
                        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 py-20 animate-in fade-in zoom-in duration-300 overflow-y-auto">
                            <a href="#home" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#about" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>About us</a>
                            <a href="#safari" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Safari Packages</a>
                            <a href="#gallery" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Gallery</a>
                            <a href="#review" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Review</a>
                            <a href="#contact" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact us</a>
                            <button onClick={() => handleWhatsApp("Hello, I would like to book a safari/stay.")} style={{ backgroundColor: '#2eb872' }} className="text-black font-bold border-0 rounded-xl h-12 px-8 mt-4 hover:opacity-90 transition duration-300">Book Now</button>
                        </div>
                    )}

                    <div className="flex flex-1 flex-col items-center justify-center text-center gap-5 px-4 sm:px-6 lg:px-8">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">UNFORGETTABLE SAFARIS &</div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">PREMIUM STAYS.</div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">Witness the giants of Udawalawe by day and relax in our eco-luxury resort by night</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-3xl">
                            <button onClick={() => document.getElementById('safari').scrollIntoView({ behavior: 'smooth' })} style={{ borderRadius: '8px', backgroundColor: '#2eb872' }} className="border-0 text-white font-semibold px-6 py-3 md:px-7 md:py-4 text-sm md:text-base w-full shadow-lg hover:bg-lime-300 transition duration-300">Book a Safari</button>
                            <button onClick={() => document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' })} style={{ borderRadius: '8px', backgroundColor: '#2eb872' }} className="border-0 text-white font-semibold px-6 py-3 md:px-7 md:py-4 text-sm md:text-base w-full shadow-lg hover:bg-lime-300 transition duration-300">Explore Rooms</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Wild Section */}
            <div id="about" className="relative overflow-hidden">
                <img src={image2} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/50"></div>

                <div className="relative z-10 flex flex-col items-center text-center pt-8 md:pt-12 pb-20 md:pb-28 px-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex flex-row gap-2 flex-wrap justify-center">
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">GREEN</div>
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-lime-400 text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">WILD</div>
                        </div>
                        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '600' }} className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">SAFARI RESORT</div>
                        <div className="text-sm sm:text-base md:text-xl text-gray-200 font-light mt-3 mb-8">Where The Wild Meets The Green: Your Gateway To Udawalawe.</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-white w-full min-h-100 sm:min-h-125 md:min-h-150 rounded-2xl shadow-xl p-4 sm:p-6 overflow-hidden"
                    >
                        <div className="flex flex-col lg:flex-row pt-4 sm:pt-8 px-6 sm:px-12 md:px-24 lg:px-32 gap-8 items-center">
                            
                            {/* Text Content - Left Side */}
                            <div className="flex flex-col flex-1 text-left items-start">
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }} className="text-lime-400 text-[20px] sm:text-[26px] md:text-[40px] pb-3 text-left uppercase">Our Concept</div>
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-black text-[14px] sm:text-[16px] md:text-[18px] pb-8 text-left max-w-2xl">
                                    Built with eco-friendly materials and guided by years of expert tracking, we offer an authentic sanctuary for nature lovers. Witness the giants of the wild in unparalleled comfort.
                                </div>
                                
                                {/* Features List */}
                                <div className="flex flex-col gap-6 w-full">
                                    {/* Item 1 */}
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                        <img src={icon4} alt="Eco" className="h-10 w-10 shrink-0" />
                                        <div className="text-left">
                                            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[14px] sm:text-[15px] md:text-[17px] uppercase">Eco-Friendly Stays</div>
                                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[11px] sm:text-[12px] md:text-[14px] leading-tight">Built with sustainable materials</div>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                        <img src={icon3} alt="Wild" className="h-10 w-10 shrink-0" />
                                        <div className="text-left">
                                            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[14px] sm:text-[15px] md:text-[17px] uppercase">Wild Neighborhood</div>
                                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[11px] sm:text-[12px] md:text-[14px] leading-tight">Frequent sightings near resort</div>
                                        </div>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                        <img src={icon1} alt="Food" className="h-10 w-10 shrink-0" />
                                        <div className="text-left">
                                            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[14px] sm:text-[15px] md:text-[17px] uppercase">Authentic Cuisine</div>
                                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[11px] sm:text-[12px] md:text-[14px] leading-tight">Traditional Sri Lankan organic</div>
                                        </div>
                                    </div>
                                    {/* Item 4 */}
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                        <img src={icon2} alt="Expert" className="h-10 w-10 shrink-0" />
                                        <div className="text-left">
                                            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[14px] sm:text-[15px] md:text-[17px] uppercase">Expert Naturalists</div>
                                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[11px] sm:text-[12px] md:text-[14px] leading-tight">Guiding you through secrets</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Gallery - Right Side */}
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-row gap-4 shrink-0 items-center justify-center w-full lg:w-auto mt-12 lg:mt-0"
                            >
                                <div className="flex flex-col gap-4 h-64 sm:h-80 md:h-96 lg:h-[450px]">
                                    <img src={image6} className="w-32 sm:w-40 md:w-44 lg:w-48 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                    <img src={image30} className="w-32 sm:w-40 md:w-44 lg:w-48 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                </div>
                                <div className="flex flex-col gap-4 h-64 sm:h-80 md:h-96 lg:h-[450px]">
                                    <img src={image5} className="w-32 sm:w-40 md:w-44 lg:w-48 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                    <img src={image4} className="w-32 sm:w-40 md:w-44 lg:w-48 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                            </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/*Why Choose Us*/}
            <div className="relative min-h-screen bg-black">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col items-center py-8 md:py-16 lg:py-24 text-center px-4 sm:px-8 md:px-10 max-w-[1400px] mx-auto w-full"
                >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">WHY CHOOSE</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="-mt-2 font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">OUR SAFARI TOURS</div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-lime-400 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] mt-2">Authentic, sustainable, And Unforgettable Encounters In Udawalawe</div>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-16 md:pb-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            {[image8, image9, image10, image11].map((img, idx) => (
                                <div key={idx} className="overflow-hidden rounded-3xl shadow-2xl h-56 sm:h-64 lg:h-72 bg-white">
                                    <img src={img} alt={`Our story ${idx + 1}`} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
                                </div>
                            ))}
                        </div>
                        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl">
                            <span className="text-lime-400 uppercase tracking-[0.3em] text-xs font-semibold">Our Story</span>
                            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-3xl sm:text-4xl mt-4 leading-tight">
                                Passionate about wildlife, culture, and unforgettable safari journeys.
                            </h3>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-300 text-sm sm:text-base leading-relaxed mt-6">
                                Since our founding, we have been dedicated to crafting sustainable safari experiences that celebrate Sri Lanka's natural wonders. From sunrise drives across Udawalawe to evenings around the campfire with local storytellers, every moment is designed to feel personal, authentic, and deeply connected to the land.
                            </p>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                                Our story is built on trust, respect for wildlife, and a commitment to leaving a positive impact on the communities we visit.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* NEW FEATURE GRID CONTENT START */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-left"
                >
                    {/* Safari Jeep Tours */}
                    <div className="flex flex-col items-start gap-4">
                        <SafariJeepIcon />
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700',textAlign: 'justify'  }} className="text-white text-xl font-bold mt-2">Safari Jeep Tours</h3>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', textAlign: 'justify' }} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Embark on an exciting safari adventure through Udawalawe National Park with our expert guides. Get up close and personal with wildlife while exploring the park's stunning landscapes.
                        </p>
                    </div>

                    {/* Customized Itineraries */}
                    <div className="flex flex-col items-start gap-4">
                        <CustomizedItinerariesIcon />
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700'  }} className="text-white text-xl font-bold mt-2">Customized Itineraries</h3>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' , textAlign: 'justify'  }} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Tailor your safari experience to your preferences with our customized itineraries. Whether you're interested in specific wildlife sightings or prefer a longer expedition, we can create a personalized package just for you.
                        </p>
                    </div>

                    {/* Knowledgeable Guides */}
                    <div className="flex flex-col items-start gap-4">
                        <KnowledgeableGuidesIcon />
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xl font-bold mt-2">Knowledgeable Guides</h3>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400',textAlign: 'justify'  }} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Our experienced safari guides are passionate about wildlife and possess in-depth knowledge of the flora, fauna, and ecosystems in Udawalawe. They will enhance your safari experience with insightful information and fascinating stories.
                        </p>
                    </div>

                    {/* Group and Private Tours */}
                    <div className="flex flex-col items-start gap-4">
                        <GroupToursIcon />
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xl font-bold mt-2">Group and Private Tours</h3>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400',textAlign: 'justify' }} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Whether you're traveling solo, with a group of friends, or as a family, we offer both group and private safari tours. Choose the option that suits your preferences and enjoy a personalized safari experience.
                        </p>
                    </div>
                </motion.div>
               
                    {/* WHY CHOOSE US SECTION */}
<div className="relative min-h-screen bg-white py-16 md:py-24">
    <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center text-center px-4 max-w-[1400px] mx-auto w-full mb-16"
    >
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-black text-3xl sm:text-4xl md:text-[56px] leading-tight">
            WHY <span className="text-lime-500">CHOOSE</span><br />OUR SAFARI TOURS
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-sm md:text-xl mt-4 max-w-2xl">
            Authentic, sustainable, and unforgettable encounters in Udawalawe.
        </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row px-6 md:px-16 gap-12 items-center max-w-[1400px] mx-auto">
        {/* Left Side: Feature Grid */}
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
            {[
                { title: "EXPERT TRACKING", desc: "Our guides know every secret path of the park.", icon: icon2 },
                { title: "SAFETY FIRST", desc: "Specially modified 4x4 vehicles for a secure ride.", icon: icon3 },
                { title: "ECO-CONSCIOUS", desc: "We prioritize the well-being of the wildlife.", icon: icon4 },
                { title: "BEST PRICING", desc: "Premium experiences at competitive local rates[cite: 1].", icon: icon1 }
            ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-lime-400 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <img src={item.icon} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-black mb-2 text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </motion.div>

        {/* Right Side: Animated Image Carousel */}
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 w-full overflow-hidden rounded-[40px] shadow-2xl relative"
        >
            <div
                className={`flex ${chooseAreaAnimate ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
                style={{ transform: `translateX(-${curruntSlide * 100}%)` }}
            >
                {chooseAreaSlides.map((slide, index) => (
                    <div key={index} className="w-full shrink-0 relative group">
                        <img
                            src={slide.image}
                            className="w-full h-[400px] md:h-[550px] object-cover"
                            alt="Safari Experience"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <span className="text-lime-400 font-bold tracking-widest text-xs mb-2">LIMITED SPOTS AVAILABLE</span>
                            <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{slide.desc}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination Indicators */}
            <div className="absolute bottom-4 right-8 flex gap-2">
                {chooseAreaSlides.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${curruntSlide === i ? 'w-8' : 'w-2 bg-white/50'}`} style={curruntSlide === i ? { backgroundColor: '#2eb872' } : {}} />
                ))}
            </div>
        </motion.div>
    </div>
</div>

                {/* Statistics Section - Changed to dark theme matching features */}
                <div className="bg-lime-950 py-12 md:py-20 px-4 sm:px-6 md:px-10 my-0">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold">5000+</div>
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }} className="text-lime-400 text-base sm:text-lg md:text-[18px] mt-3">Satisfied Customers</div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold">10+</div>
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }} className="text-lime-400 text-base sm:text-lg md:text-[18px] mt-3">Years of Experience</div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold">99%</div>
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }} className="text-lime-400 text-base sm:text-lg md:text-[18px] mt-3">Customer Satisfaction Rate</div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold">100%</div>
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }} className="text-lime-400 text-base sm:text-lg md:text-[18px] mt-3">Safety Record</div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Rest of the component (Udawalawe Park onwards) on white background */}
                <div className="bg-white">
               
                <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 gap-8 lg:gap-12 items-stretch justify-center max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col sm:grid sm:grid-cols-2 gap-0 lg:flex lg:flex-col lg:gap-0 shrink-0"
                    >
                       
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col flex-1"
                    >
                      
                    </motion.div>
                </div>


                {/* UDAWALAWE NATIONAL PARK SECTION */}
<div className="bg-white overflow-hidden py-16 md:py-24">
    <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center text-center px-4 mb-16"
    >
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-black text-3xl md:text-5xl tracking-tight">
            UDAWALAWE <span className="text-lime-500">NATIONAL PARK</span>
        </h2>
        <div style={{ backgroundColor: '#2eb872' }} className="w-20 h-1.5 mt-4 rounded-full"></div>
    </motion.div>

    <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 gap-12 lg:gap-20 items-center justify-center max-w-[1400px] mx-auto">
        
        {/* Left Side: 4 Equal Images */}
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
        >
            <div className="overflow-hidden rounded-2xl shadow-lg h-72 md:h-80">
                <img src={image7} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wildlife 1" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg h-72 md:h-80">
                <img src={image8} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wildlife 2" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg h-72 md:h-80">
                <img src={image9} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wildlife 3" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg h-72 md:h-80">
                <img src={image10} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wildlife 4" />
            </div>
        </motion.div>

        {/* Right Side: Structured Content */}
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:w-1/2"
        >
            <p style={{ fontFamily: 'poppins'}} className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 text-justify">
              Welcome to one of the world's premier wildlife destinations. Spanning over 30,000 hectares of sun-drenched grasslands and ancient forests, Udawalawe National Park offers an immersive safari experience that rivals the Great Savannahs of Africa. Nestled against the backdrop of the central highlands, this sanctuary is a masterpiece of biodiversity, where nature remains untamed and every turn of the trail reveals a new wonder.
            </p>

            <div className="space-y-8">
                <div className="flex gap-5 group">
                    <div style={{ backgroundColor: '#2eb872' }} className="w-12 h-12 shrink-0 text-black flex items-center justify-center rounded-xl font-bold text-xl group-hover:rotate-12 transition-transform">01</div>
                    <div>
                        <h4 style={{ fontFamily: 'poppins' }} className="font-bold text-black text-xl">The Gentle Giants</h4>
                        <p className="text-gray-600 text-xl" textsize = "40px">Home to 250+ resident Sri Lankan Elephants. Sightings are virtually guaranteed year-round.</p>
                    </div>
                </div>

                <div className="flex gap-5 group">
                    <div style={{ backgroundColor: '#2eb872' }} className="w-12 h-12 shrink-0 text-black flex items-center justify-center rounded-xl font-bold text-xl group-hover:rotate-12 transition-transform">02</div>
                    <div>
                        <h4 style={{ fontFamily: 'poppins' }} className="font-bold text-black text-xl">The Wild Residents</h4>
                        <p className="text-gray-600 text-xl">Spot leopards, sloth bears, wild water buffalo, and spotted deer grazing the savannah.</p>
                    </div>
                </div>

                <div className="flex gap-5 group">
                    <div style={{ backgroundColor: '#2eb872' }} className="w-12 h-12 shrink-0 text-black flex items-center justify-center rounded-xl font-bold text-xl group-hover:rotate-12 transition-transform">03</div>
                    <div>
                        <h4 style={{ fontFamily: 'poppins' }} className="font-bold text-black text-xl">Paradise for Birdlife</h4>
                        <p className="text-gray-600 text-xl">A haven for birdwatchers with over 180 recorded species, including majestic raptors.</p>
                    </div>
                </div>
            </div>

            
        </motion.div>
    </div>
</div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-16 md:py-24 max-w-[1500px] mx-auto px-6"
                >
                    <div
                        id="safari"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                        className="text-black font-semibold flex justify-center text-center text-2xl sm:text-3xl md:text-[48px] px-4"
                    >
                        OUR EXCLUSIVE SAFARI PACKAGES
                    </div>
       
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-gray-400 flex justify-center text-center text-base sm:text-xl md:text-[28px] px-4">Tailor-made wildlife experiences designed for comfort, safety, and breathtaking sightings</div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-8 md:gap-20 px-4 md:px-10 pt-10 md:pt-20">

                        {/* Card 1 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[30px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">MORNING SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[13px] text-center mb-3">Best For: Elephant sightings and bird watching.</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[13px] text-center mb-4">Time: 6:00 AM – 10:00 AM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider mt-2">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Expert Guide</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Experience from a professional naturalist.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Comfortable 4x4</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Specially modified safari jeep.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Park Fees</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">All entry permits and taxes included.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '1000' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Light Snacks</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Fresh water and morning snacks.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8 mb-2">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', backgroundColor: '#2eb872' }} className="font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[30px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">EVENING SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[13px] text-center mb-3">Best For: Golden hour photography and dramatic landscapes</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[13px] text-center mb-2">Time: 2:30 PM – 6:30 PM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider mt-4">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Photo Ops</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Guided stops at the best sunset viewpoints.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Luxury Jeep</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">4x4 vehicle with open-top viewing.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Trackers</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Experienced trackers to find leopards and bears.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Refreshments</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Chilled water and evening beverages.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6 mb-2">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', backgroundColor: '#2eb872' }} className="font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[30px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">FULL DAY SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[13px] text-center mb-3">BEST FOR: DEEP EXPLORATION AND SPOTTING RARE WILDLIFE</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[13px] text-center mb-4">Time: 6:00 AM – 6:00 PM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Full Access</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Extended exploration of the deep jungle.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Gourmet Picnic</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Packed breakfast and lunch inside the park.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">Premium Service</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Dedicated guide for the entire 12 hours.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[12px] font-bold text-left whitespace-nowrap">All-Inclusive</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[12px] text-left leading-tight pl-1">Parking, entry fees, and insurance cover.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', backgroundColor: '#2eb872' }} className="font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ROOM CARDS SECTION */}
                <motion.div
                    id="rooms"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="pt-4 md:pt-4 max-w-[1600px] mx-auto px-6"
                >
                    <div className="flex flex-col items-center pb-4 text-center px-4">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="font-semibold text-black text-3xl md:text-[48px] leading-tight">A LUXURY STAY WHERE WILD ELEPHANTS<br />ROAM NEARBY</div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base md:text-[18px] mt-4 max-w-2xl">Experience Eco-Luxury Living Just Minutes Away From The Udawalawe National Park. Your Sanctuary In The Heart Of The Wild.</div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between px-8 md:px-25 pt-10 gap-12 pb-20 ">

                        {/* Room Card 1 */}
                        <div className="w-full lg:w-90 bg-[#3A3A3A] p-3 rounded-2xl">

                            <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                                <div className="relative">
                                    <img src={room1} className="w-full h-80 object-cover" />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} 
                                    style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#2eb872' }}
                                    className="w-full text-black text-[12px] font-semibold rounded-md py-2 hover:opacity-90 transition">
                                    BOOK NOW
                                
                                </button>
                            </div>

                            <div className="bg-[#3A3A3A] pb-3 text-center">
                                <span className="text-lime-400 text-[10px] underline cursor-pointer"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    What’s Included
                                </span>
                            </div>

                        </div>

                        {/* Room Card 2 */}
                        <div className="w-full lg:w-80 bg-[#3A3A3A] p-3 rounded-2xl">

                            <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                                <div className="relative">
                                    <img src={room2} className="w-full h-80 object-cover" />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} 
                                    style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#2eb872' }}
                                    className="w-full text-black text-[12px] font-semibold rounded-md py-2 hover:opacity-90 transition">
                                    BOOK NOW
                                </button>
                            </div>

                            <div className="bg-[#3A3A3A] pb-3 text-center">
                                <span className="text-lime-400 text-xs sm:text-[10px] underline cursor-pointer"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    What’s Included
                                </span>
                            </div>

                        </div>
                        {/* Room Card 3 */}
                        <div className="w-full lg:w-80 bg-[#3A3A3A] p-3 rounded-2xl">
                            <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                                <div className="relative">
                                    <img src={room3} className="w-full h-80 object-cover" />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} 
                                    style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#2eb872' }}
                                    className="w-full text-black text-[12px] font-semibold rounded-md py-2 hover:opacity-90 transition">
                                    BOOK NOW
                                </button>
                            </div>

                            <div className="bg-[#3A3A3A] pb-3 text-center">
                                <span className="text-lime-400 text-xs sm:text-[10px] underline cursor-pointer"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    What’s Included
                                </span>
                            </div>

                        </div>
                    </div>
                </motion.div>
                {/*Gallerry*/}
                <div className="pt-4 md:pt-4 max-w-[1450px] mx-auto">
                    <div id="gallery" className="flex flex-col items-center justify-center mb-6 px-4 text-center">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black text-2xl sm:text-3xl md:text-[48px] font-semibold">
                            WILDERNESS &amp; WELLBEING
                        </div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-black text-base sm:text-xl md:text-[28px] font-semibold">
                            Authentic safaris, refined relaxation. Captured by our guests.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 px-4 md:px-16">
                        {galleryImages.slice(0, 12).map((img, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden group cursor-default"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                {/*12th image */}
                                {index === 11 && (
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity">
                                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl md:text-5xl font-bold">more</span>
                                        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-white/80 text-sm md:text-base mt-1">View Gallery</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Overlay */}
                {lightboxOpen && (
                    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center cursor-default" onClick={closeLightbox}>
                        {/* Close button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 text-white text-5xl font-light hover:text-lime-400 transition-colors z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center border-0 cursor-pointer"
                            style={{ fontFamily: 'sans-serif', lineHeight: 1 }}
                        >
                            &times;
                        </button>

                        {/* Image counter */}
                        <div className="absolute top-6 left-6 text-white/70 text-sm z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {lightboxIndex + 1} / {galleryImages.length}
                        </div>

                        {/* Previous button */}
                        <div
                            className="absolute left-0 top-20 bottom-0 w-1/3 flex items-center justify-start pl-4 md:pl-8 z-10"
                            style={{ cursor: 'default' }}
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Next button */}
                        <div
                            className="absolute right-0 top-20 bottom-0 w-1/3 flex items-center justify-end pr-4 md:pr-8 z-10"
                            style={{ cursor: 'default' }}
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Enlarged Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={galleryImages[lightboxIndex]}
                            className="w-full max-w-[1000px] h-[60vh] md:h-[75vh] object-cover rounded-lg shadow-2xl border-2 border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
                {/* Guest Experiences Section */}
<div id="review" className="py-20 md:py-32 bg-white relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
    
    <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16 text-center"
        >
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-black text-3xl md:text-5xl lg:text-[56px] mb-4">
                VOICES FROM THE WILD
            </h2>
            <div style={{ backgroundColor: '#2eb872' }} className="w-24 h-1 mb-6"></div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-gray-600 max-w-2xl text-lg">
                Discover why travelers from around the globe choose Green Wild for their Udawalawe adventure.
            </p>
        </motion.div>


        {/* Review Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {reviewsData.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex-shrink-0 w-80 bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative cursor-pointer ${
                                index === currentReviewIndex ? 'ring-2 ring-lime-400 shadow-lg' : ''
                            }`}
                            onClick={() => setCurrentReviewIndex(index)}
                        >
                            {/* Quotation Mark Decoration */}
                            <div className="absolute top-4 right-6 text-lime-400/20 text-4xl font-serif">"</div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-lime-400 p-0.5">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black text-base">{review.name}</h4>
                                    <p className="text-gray-400 text-xs">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-gray-700 leading-relaxed italic text-sm line-clamp-3">
                                "{review.review}"
                            </p>

                            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                                <span className="text-xs font-bold text-lime-600 tracking-widest uppercase">Verified Stay</span>
                                <div className="flex items-center gap-2">
                                    {/* Auto-scrolling review platforms */}
                                    <div className="relative overflow-hidden w-24 h-5">
                                        <div className="flex animate-scroll-platforms absolute">
                                            <img src={iconGoogle} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Google Review" />
                                            <img src={iconFacebook} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Facebook Review" />
                                            <img src={iconInstagram} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Instagram Review" />
                                            <img src={icon11} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="TripAdvisor" />
                                            <img src={icon12} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Booking.com" />
                                            <img src={icon13} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Trustpilot" />
                                            {/* Duplicate for seamless loop */}
                                            <img src={iconGoogle} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Google Review" />
                                            <img src={iconFacebook} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Facebook Review" />
                                            <img src={iconInstagram} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Instagram Review" />
                                            <img src={icon11} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="TripAdvisor" />
                                            <img src={icon12} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Booking.com" />
                                            <img src={icon13} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2" alt="Trustpilot" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviewsData.length)}
                    className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                    <span>Next Review</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        
        {/* Auto-scrolling Customer Images */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
        >
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-center text-black text-xl md:text-2xl mb-8">
                Our Happy Guests
            </h3>
            <div className="relative overflow-hidden">
                <div className="flex animate-scroll-slow">
                    {/* First set of images */}
                    {reviewsData.map((review, index) => (
                        <div key={`first-${index}`} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 mx-2">
                            <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-full h-full object-cover rounded-full border-2 border-lime-400 shadow-lg hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {reviewsData.map((review, index) => (
                        <div key={`second-${index}`} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 mx-2">
                            <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-full h-full object-cover rounded-full border-2 border-lime-400 shadow-lg hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                    {/* Third set for longer scroll */}
                    {reviewsData.map((review, index) => (
                        <div key={`third-${index}`} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 mx-2">
                            <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-full h-full object-cover rounded-full border-2 border-lime-400 shadow-lg hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
        
        {/* Auto-scrolling Testimonial Highlights */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
        >
            <div className="relative overflow-hidden bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl p-6">
                <div className="flex animate-scroll-testimonials">
                    {/* Testimonial highlights */}
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Beyond expectations"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Knowledgeable guides"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Spectacular wildlife"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Eco-friendly resort"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Unforgettable experience"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "World-class service"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Beyond expectations"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Knowledgeable guides"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Spectacular wildlife"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Eco-friendly resort"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "Unforgettable experience"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                    <div className="flex-shrink-0 mx-4 text-center">
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} className="text-lime-600 text-lg md:text-xl italic">
                            "World-class service"
                        </p>
                        <span className="text-gray-500 text-sm">★★★★★</span>
                    </div>
                </div>
            </div>
        </motion.div>
        
        
    </div>
</div>
                {/*contact us */}
                <div className="pt-4 md:pt-4 max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        id="contact"
                        className="flex flex-col items-center px-4 md:px-20 text-center"
                    >
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">CONTACT OUR WILD GUIDES</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }} className="text-black/50 text-base sm:text-xl md:text-[28px] text-center">Planning your adventure in Udawalawe should be as smooth as the experience itself Our expert guides are ready to help you</div>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row px-4 md:px-15 pt-10 md:pt-15 gap-10">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col flex-1"
                        >
                            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }} className="font-semibold text-lime-400 text-xl md:text-[28px]">
                                SEND US A NOTE
                            </div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="pt-4 text-[13px] text-black/70 pb-6">
                                Use the from below for any inquiries oe bespoke safari planning we will get back to you within 24 hours
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconPhone} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Call/WhatsApp</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">0769392153</div>
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconMail} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Email</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">greenwildsafariresort@gmail.com</div>
                                        </div>
                                    </div>
                                    {/* Location */}
                                    <div className="flex flex-row items-start gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconLocation} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Our Location</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">Green Wild Safari Resort,<br />Thanamalvila Rd, Udawalawa 70190</div>
                                        </div>
                                    </div>
                                    {/* Support*/}
                                    <div className="mt-2">
                                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70 mb-2">SUPPORT &amp; RESOURCES</div>
                                        <div className="flex gap-3 items-center">
                                            <img src={iconGoogle} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                            <img src={iconFacebook} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                            <img src={iconInstagram} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="flex items-start">
                                    <img src={image24} className="w-48 sm:w-56 md:w-64 h-auto rounded-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex-1 flex flex-col gap-4"
                        >
                            <div className="bg-[#3A3A3A] rounded-3xl p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                                FULL NAME
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Gimshan Menaka"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                                EMAIL ADDRESS
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="gimshanmenaka@gmail.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                            PHONE NUMBER
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="07x xx xx xxx"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                            YOUR MESSAGE
                                        </label>
                                        <textarea
                                            placeholder="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300 resize-none"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={handleInquirySubmit}
                                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', backgroundColor: '#2eb872' }}
                                    className="text-black font-bold text-[16px] px-12 py-3 rounded-xl hover:opacity-90 transition duration-300"
                                >
                                    SEND INQUIRE
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                {/*other places*/}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col items-center py-16 md:py-24 px-4 text-center"
                >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">OTHER PLACES IN UDAWALAWE</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }} className="text-black/70 text-base sm:text-xl md:text-[28px] text-center">Step outside the safari and uncover the rich history and scenic beauty of the Udawalawe region.</div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col lg:flex-row justify-center gap-10 px-10 mt-12 pb-15"
                >

                    {/* Card 1 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon11} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Elephant Transit Home (ETH)<br />
                                Care for Orphaned Giants
                            </div>
                        </div>

                        <img src={image25} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Witness baby elephants being rehabilitated and bottle-fed.
                            A heartwarming look at conservation in action.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Nature</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Wildlife</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 5 mins | Time: 1 hour
                        </div>

                        <button
                            onClick={() => window.open("https://en.wikipedia.org/wiki/Udawalawe_Elephant_Transit_Home", "_blank")}
                            style={{ backgroundColor: '#2eb872' }}
                            className="w-full text-black text-sm py-2 rounded-xl hover:opacity-90 transition"
                        >
                            View Details
                        </button>
                    </div>


                    {/* Card 2 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon12} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Sankapala Raja Maha Vihara <br />Legendary Cave Temple
                            </div>
                        </div>

                        <img src={image26} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Explore ancient rock caves and history linked to King Dutugemunu’s giant warrior, Pussadeva.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">History</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Culture</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 25 mins | Time: 1.5 hours
                        </div>

                        <button
                            onClick={() => window.open("https://amazinglanka.com/wp/sankapala/", "_blank")}
                            style={{ backgroundColor: '#2eb872' }}
                            className="w-full text-black text-sm py-2 rounded-xl hover:opacity-90 transition"
                        >
                            View Details
                        </button>
                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon13} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Maduwanwela Walawwa <br />Historic Manor House
                            </div>
                        </div>

                        <img src={image27} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Step back in time at this massive 17th-century aristocratic home, famous for its architecture.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">History</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Architecture</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 25 mins | Time: 2 hours
                        </div>

                        <button
                            onClick={() => window.open("https://si.wikipedia.org/wiki/%E0%B6%B8%E0%B6%A9%E0%B7%94%E0%B7%80%E0%B6%B1%E0%B7%8A%E0%B7%80%E0%B7%99%E0%B6%BD_%E0%B7%80%E0%B6%BD%E0%B7%80%E0%B7%8A%E0%B7%80", "_blank")}
                            style={{ backgroundColor: '#2eb872' }}
                            className="w-full text-black text-sm py-2 rounded-xl hover:opacity-90 transition"
                        >
                            View Details
                        </button>
                    </div>

                </motion.div>
                </div> {/* End of bg-white for lower sections */}

                {/*Footer*/}
                <footer className="bg-[#2D2F2C] text-white px-10 pt-12 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Left */}
                        <div>
                            <div className="flex items-center gap-4">
                                <img src={footerLogo} className="w-16 h-16" />
                                <div className="text-xl font-semibold">
                                    GREEN WILD SAFARI RESORT
                                </div>
                            </div>

                            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                                EXPERIENCE NATURE’S TRUE GIANTS. Committed to sustainable sustainability and ethical wildlife encounters since 2010. Sri Lanka’s Premier Safari Experience."
                            </p>

                            <div className="flex gap-4 mt-6">
                                <img src={iconGoogle} className="w-6 h-6 cursor-pointer" />
                                <img src={iconFacebook} className="w-6 h-6 cursor-pointer" />
                                <img src={iconInstagram} className="w-6 h-6 cursor-pointer" />
                            </div>
                        </div>

                        {/* Middle */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#home" className="hover:#2eb872 transition duration-300 cursor-pointer">• Home</a></li>
                                <li><a href="#about" className="hover:#2eb872 transition duration-300 cursor-pointer">• About Us</a></li>
                                <li><a href="#safari" className="hover:#2eb872 transition duration-300 cursor-pointer">• Safari Packages</a></li>
                                <li><a href="#gallery" className="hover:#2eb872 transition duration-300 cursor-pointer">• Gallery</a></li>
                                <li><a href="#review" className="hover:#2eb872 transition duration-300 cursor-pointer">• Review</a></li>
                                <li><a href="#contact" className="hover:#2eb872 transition duration-300 cursor-pointer">• Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Right */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>

                            <div className="flex items-start gap-3 mb-4">
                                <img src={iconLocation} className="w-5 h-5 mt-1" />
                                <p className="text-gray-300 text-sm">
                                    Green Wild Safari Resort, Thanamalvila Rd, Udawalawe 70190
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src={iconPhone} className="w-5 h-5" />
                                <p className="text-gray-300 text-sm">0769392153</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src={iconMail} className="w-5 h-5" />
                                <p className="text-gray-300 text-sm">
                                    greenwildsafariresort@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t #2eb872 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

                        <div>© 2026 Green Wild Safari Resort</div>

                        <div className="mt-2 md:mt-0">
                            Designed & Developed By <a href="https://www.axstartech.com/" target="_blank" rel="noopener noreferrer" className="text-lime-400 font-semibold hover:text-lime-300 transition duration-300">AXSTAR</a>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Home;