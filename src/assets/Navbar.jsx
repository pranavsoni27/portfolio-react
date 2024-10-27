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
                { id: 4, link: "𝚂𝚔𝚒𝚕𝚕𝚜" },
                { id: 5, link: "𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜" },
                { id: 6, link: "𝙲𝚘𝚗𝚝𝚊𝚌𝚝" },
        ];

        return (
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
                                                <Link to={link} smooth duration={500}>
                                                        {link}
                                                </Link>
                                        </li>
                                ))}
                        </ul>

                        <div
                                onClick={() => setNav(!nav)}
                                className="pr-4 z-10 text-gray-500 md:hidden"
                        >
                                {nav ? (
                                        <FaTimes className="hover:text-gray-300 cursor-pointer" size={30} />
                                ) : (
                                        <FaBars className="hover:text-gray-300 cursor-pointer" size={30} />
                                )}
                        </div>

                        {nav && (
                                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg text-cyan-500">
                                        {links.map(({ id, link }) => (
                                                <li
                                                        key={id}
                                                        className="hover:text-gray-300 px-4 cursor-pointer py-6 text-4xl"
                                                >
                                                        <Link
                                                                onClick={() => setNav(false)}
                                                                to={link}
                                                                smooth
                                                                duration={500}
                                                        >
                                                                {link}
                                                        </Link>
                                                </li>
                                        ))}
                                </ul>
                        )}
                </div>
        );
};

export default Navbar;