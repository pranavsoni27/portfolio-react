import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [nav, setNav] = useState(false);

  // hide / show navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // disable background scroll
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  const links = [
    { id: 1, link: "𝙷𝚘𝚖𝚎" },
    { id: 2, link: "𝙰𝚋𝚘𝚞𝚝" },
    { id: 3, link: "𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚘𝚗" },
    { id: 4, link: "𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎" },
    { id: 5, link: "𝚂𝚔𝚒𝚕𝚕𝚜" },
    { id: 6, link: "𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜" },
    { id: 7, link: "𝙲𝚘𝚗𝚝𝚊𝚌𝚝" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 md:px-16
        bg-white/5 backdrop-blur-md z-50 transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <h1 className="text-3xl text-cyan-400 cursor-pointer">
          Ƥ尺ΛƝΛѴ
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li key={id} className="text-cyan-400 text-xl cursor-pointer hover:text-white">
              <Link to={link} smooth duration={300}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white cursor-pointer z-50"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {nav && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setNav(false)}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Glass menu */}
          <div
            className="relative z-50 w-[100%] h-[95%] max-w-md rounded-2xl
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-2xl p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-center space-y-6">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={300}
                    onClick={() => setNav(false)}
                    className="text-2xl font-semibold text-cyan-400 hover:text-white transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;