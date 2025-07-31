import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logoDark from "../assets/logo-dark.png";
import "./navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import Gif from "../assets/un.gif";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Coding Profiles", to: "coding" },
   
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-0
          ${
            isMenuOpen || isScrolled
              ? "bg-[#0f0f0f]/50 backdrop-blur-sm shadow-0"
              : "bg-transparent"
          } `}
      >
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-2">
          <a
            href="/"
            className="clickBounce"
            onClick={(e) => e.preventDefault()}
          >
            <img
              className="h-18 w-auto logo-bounce cursor-pointer mx-5"
              src={logoDark}
              alt="logo"
              draggable="false"
            />
          </a>

          <nav className="hidden lg:flex justify-center items-center gap-8 text-white text-md font-medium">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={700}
                spy={true}
                offset={-100}
                activeClass="active-nav"
                className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="text-2xl hidden lg:block px-5">
            <img
              src={Gif}
              alt="Wink emoji"
              className="w-15 h-15 cursor-pointer"
              draggable={false}
            />
          </div>

          <div className="lg:hidden text-white text-3xl z-50">
            <button
              ref={buttonRef}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed w-full top-0 left-0 z-40 bg-[#0f0f0f]/40 backdrop-blur-sm text-white px-2 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-18 items-center">
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="active-nav"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-md w-[100%] font-medium text-white hover:bg-[#1c1b2a] px-8 p-2 rounded-xl cursor-pointer"
                >
                  {label}
                </Link>
              ))}
              <img
                src={Gif}
                alt="Wink emoji"
                className="w-15 h-15 cursor-pointer"
                draggable={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
