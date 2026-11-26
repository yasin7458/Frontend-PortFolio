
import { useEffect, useRef, useState } from "react";

import {
    FaArrowUpRightFromSquare,
    FaBarsStaggered,
    FaXmark
} from "react-icons/fa6";

import { gsap } from "gsap";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navbarRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".navbar-logo, .navbar-links a, .navbar-actions", {
                y: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out"
            });

        }, navbarRef.current);

        return () => {
            ctx.revert();
        };

    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className="navbar" ref={navbarRef}>

            <div className="navbar-container">

                {/* BRAND */}

                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    YASIN<span>.</span>
                </a>

                {/* NAVIGATION */}

                <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

                    <a href="#home" onClick={closeMenu}>
                        <span>01</span>
                        Home
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        <span>02</span>
                        Work
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        <span>03</span>
                        Stack
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        <span>04</span>
                        About
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        <span>05</span>
                        Contact
                    </a>

                </nav>

                {/* ACTIONS */}

                <div className="navbar-actions">

                    <ThemeToggle />

                    <a
                        href="#contact"
                        className="navbar-contact"
                        onClick={closeMenu}
                    >
                        LET'S TALK
                        <FaArrowUpRightFromSquare />
                    </a>

                    {/* MOBILE MENU */}

                    <button
                        className="navbar-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        type="button"
                    >
                        {menuOpen ? <FaXmark /> : <FaBarsStaggered />}
                    </button>

                </div>

            </div>

        </header>

    );

}

export default Navbar;
