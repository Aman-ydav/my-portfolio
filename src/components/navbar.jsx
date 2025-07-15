import { useState, useEffect } from "react";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import './navbar.css';

function Navbar() {

  return (
    <header className="fixed h-17 w-full flex justify-between">
        <div className="logo flex justify-evenly flex-1">
            <a href="./" className="clickBounce" onClick={(e) => e.preventDefault()}><img className="h-18 w-20 logo-bounce cursor-pointer" src={logoDark} alt="logo" /></a>
        </div>
        <nav className="nav flex flex-wrap justify-center gap-12 sm:gap-10 items-center flex-1/2 text-white text-l">
            <button className="cursor-pointer clickBounce bounce">Projects</button>
            <button className="cursor-pointer clickBounce bounce">Experience</button>
            <button className="cursor-pointer clickBounce bounce">Education</button>
            <button className="cursor-pointer clickBounce bounce">Coding Profiles</button>
            <button className="cursor-pointer clickBounce bounce">Contact</button>
        </nav>
        <div className="mode flex flex-1 justify-center text-2xl">
            <button className="justify-self-end  cursor-pointer bounce clickBounce">🌞</button>
        </div>
    </header>
  );
}

export default Navbar;
