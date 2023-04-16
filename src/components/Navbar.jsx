import { useState } from "react";

function Navbar() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(prev => !prev);
    }
    
    return (
        <nav>
            <a href="#" class="nav__logo">
                A.M. Portfolio.
            </a>
            
            <div class="hamburger-icon" id="hamburger-icon" onClick={toggleMobileNav}>

                <img 
                 src={isMobileNavOpen ? "/icons8-multiply-50.png" : "/icons8-hamburger-menu-50.png"}
                 alt="hamburger menu"
                />
                
            </div>

            <ul class={`nav__links ${isMobileNavOpen && "active"}`} id="nav-links">
                <li onClick={toggleMobileNav}>
                    <a href="#">About Me.</a>
                </li>
                <li onClick={toggleMobileNav}>
                    <a href="#portfolio">Portfolio.</a>
                </li>
                <li onClick={toggleMobileNav}>
                    <a href="#contact-form">Contact Me.</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;