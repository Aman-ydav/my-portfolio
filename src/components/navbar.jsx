import { useState, useEffect, useRef } from "react";
import logoDark from "../assets/logo-dark.png";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full max-h-20 fixed top-0 left-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[#0f0f0f]/40 backdrop-blur-sm shadow-sm border-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 ">
        <a href="/" className="clickBounce" onClick={(e) => e.preventDefault()}>
          <img
            className="h-20 w-auto logo-bounce cursor-pointer"
            src={logoDark}
            alt="logo"
            draggable="false"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-white text-md font-medium">
          <button className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl">Projects</button>
          <button className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl">Experience</button>
          <button className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl">Education</button>
          <button className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl">Coding Profiles</button>
          <button className="clickBounce bounce nav-item bg-[#1c1b2a] p-1 px-3 rounded-3xl">Contact</button>
        </nav>

   
        <div className="text-2xl hidden lg:block">
          <button className="cursor-pointer bounce clickBounce">🌞</button>
        </div>

        {!isMenuOpen && (
          <div className="lg:hidden">
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>
        )}
      </div>


      <div
        className={`lg:hidden fixed top-20 left-0 w-full h-full bg-[#030314]/90 text-white transition-all duration-300 z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div ref={menuRef} className="px-6 pb-8a a  relative">
         
          <button
            className="absolute top-4 right-6 text-3xl z-50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
          <button className="block w-full text-2xl nav-item">Projects</button>
          <button className="block w-full text-2xl nav-item">Experience</button>
          <button className="block w-full text-2xl nav-item">Education</button>
          <button className="block w-full text-2xl nav-item">Coding Profiles</button>
          <button className="block w-full text-2xl nav-item">Contact</button>

          <div className="pt-4">
            <button className="text-xl">🌞</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
