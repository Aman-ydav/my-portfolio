import { useState, useEffect } from "react";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import './navbar.css';

function Navbar() {
  const [isScrolled,setIsScrolled] = useState(false);
  useEffect(()=>{
    const onscroll = ()=>{
      setIsScrolled(window.scrollY>30)
    }
    window.addEventListener("scroll",onscroll);
    return ()=>window.removeEventListener("scroll",onscroll); // clean up ke liye, baad me ye dobara na chl jaye 
  },[]);
  return (
    <header className={`h-17 w-full flex justify-between fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#0f0f0f]/40 backdrop-blur-sm shadow-sm border-b border-white/1" : "bg-transparent"
      }`}>
        <div className="logo flex justify-evenly flex-1">
            <a href="./" className="clickBounce" onClick={(e) => e.preventDefault()}><img className="h-18 w-20 logo-bounce cursor-pointer" src={logoDark} alt="logo" /></a>
        </div>
        <nav className="nav flex flex-wrap justify-center gap-12 sm:gap-10 items-center flex-1/2 text-white text-l">
            <button className="cursor-pointer clickBounce bounce nav-item">Projects</button>
            <button className="cursor-pointer clickBounce bounce nav-item">Experience</button>
            <button className="cursor-pointer clickBounce bounce nav-item">Education</button>
            <button className="cursor-pointer clickBounce bounce nav-item">Coding Profiles</button>
            <button className="cursor-pointer clickBounce bounce nav-item">Contact</button>
        </nav>
        <div className="mode flex flex-1 justify-center text-2xl">
            <button className="justify-self-end  cursor-pointer bounce clickBounce">🌞</button>
        </div>
    </header>
  );
}

export default Navbar;
