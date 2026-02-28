import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
        const [showNavbar, setShowNavbar] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
        const [nav, setNav] = useState(false);

        const handleScroll = () => {
                if (window.scrollY > lastScrollY) {
                        setShowNavbar(false); // Hide on scroll down
                } else {
                        setShowNavbar(true); // Show on scroll up
                }
                setLastScrollY(window.scrollY);
        };

        useEffect(() => {
                window.addEventListener("scroll", handleScroll);
                return () => {
                        window.removeEventListener("scroll", handleScroll);
                };
        }, [lastScrollY]);

        useEffect(() => {
                // Prevent body scroll when nav menu is open
                if (nav) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }, [nav]);

        useEffect(() => {
                // Ensure Shery.js is loaded before calling the method
                if (window.Shery) {
                        Shery.makeMagnet(".a");
                        Shery.textAnimate(".b" /* Element to target.*/, {
                                //Parameters are optional.
                                style: 2,
                                y: 10,
                                delay: 0.1,
                                duration: .01,
                                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                                multiplier: 0.1,
                        });
                }
        }, []);

        const links = [
                { id: 1, link: "𝙷𝚘𝚖𝚎" },
                { id: 2, link: "𝙰𝚋𝚘𝚞𝚝" },
                { id: 3, link: "𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚘𝚗" },
                { id: 3, link: "𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎" },
                { id: 4, link: "𝚂𝚔𝚒𝚕𝚕𝚜" },
                { id: 5, link: "𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜" },
                { id: 6, link: "𝙲𝚘𝚗𝚝𝚊𝚌𝚝" },
        ];

        return (
                <>
                        <div
                                className={`z-10 flex justify-between items-center w-full h-20 bg-white/1 backdrop-blur-md fixed top-0 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                                        }`}
                        >
                                <div>
                                        <h1
                                                name=""
                                                className="a b ml-4 md:ml-40 text-3xl cursor-pointer hover:scale-105 duration-200 text-cyan-400 hover:text-cyan-600"
                                        >
                                                Ƥ尺ΛƝΛѴ
                                        </h1>
                                </div>

                                <ul className="hidden md:flex pr-16">
                                        {links.map(({ id, link }) => (
                                                <li
                                                        key={id}
                                                        className="a px-4 cursor-pointer text-2xl text-white hover:text-cyan-500 hover:scale-105 duration-200"
                                                >
                                                        <Link to={link} smooth duration={200}>
                                                                {link}
                                                        </Link>
                                                </li>
                                        ))}
                                </ul>

                                <div
                                        onClick={() => setNav(!nav)}
                                        className="pr-4 z-10 text-white md:hidden cursor-pointer"
                                >
                                        <div className="relative w-8 h-8 flex items-center justify-center">
                                                <FaBars
                                                        className={`absolute transition-all duration-300 ease-in-out transform ${nav ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100 hover:text-gray-300'
                                                                }`}
                                                        size={24}
                                                />
                                                <FaTimes
                                                        className={`absolute transition-all duration-300 ease-in-out transform ${nav ? 'rotate-0 scale-100 opacity-100 hover:text-gray-300' : '-rotate-180 scale-0 opacity-0'
                                                                }`}
                                                        size={24}
                                                />
                                        </div>
                                </div>

                                {nav && (
                                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white overflow-hidden">
                                                <div className="absolute inset-0">
                                                        <img
                                                                src="https://e1.pxfuel.com/desktop-wallpaper/203/641/desktop-wallpaper-black-and-white-polka-dot-textile-portrait-display.jpg"
                                                                alt="Background Pattern"
                                                                className="w-full h-full object-cover md:object-center"
                                                        />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                                                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 w-full px-8">
                                                        {links.map(({ id, link }, index) => (
                                                                <li
                                                                        key={id}
                                                                        className="w-auto transform transition-all duration-1000 ease-out"
                                                                        style={{
                                                                                animationDelay: `${index * 150}ms`,
                                                                                animation: nav ? 'spectacularReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
                                                                                opacity: 0,
                                                                                clipPath: 'inset(0 100% 0 0)'
                                                                        }}
                                                                >
                                                                        <Link
                                                                                onClick={() => setNav(false)}
                                                                                to={link}
                                                                                smooth
                                                                                duration={200}
                                                                                className="group relative block text-center py-2 px-4 text-lg md:text-xl font-bold tracking-wide text-white hover:text-transparent transition-all duration-500 hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105"
                                                                        >
                                                                                <span className="relative z-10 block">
                                                                                        {link}
                                                                                </span>
                                                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg"></div>
                                                                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                                                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg opacity-0 group-hover:opacity-40 transition-all duration-700 blur-xl"></div>
                                                                        </Link>
                                                                </li>
                                                        ))}
                                                </div>
                                        </ul>
                                )}
                        </div>
                </>
        );
};

export default Navbar;