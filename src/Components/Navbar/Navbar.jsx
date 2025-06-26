import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .my-nav {
          transition: all 0.7s ease;
        }
        .scrolled {
          padding-block: 0.2rem !important;
        }
        .mobile-menu {
          transition: all 0.3s ease-in-out;
          transform-origin: top;
        }
        .mobile-menu.open {
          transform: scaleY(1);
          opacity: 1;
        }
        .mobile-menu.closed {
          transform: scaleY(0);
          opacity: 0;
        }
        .hamburger-line {
          transition: all 0.3s ease;
        }
        .hamburger.open .line1 {
          transform: rotate(45deg) translate(4px, 4px);
        }
        .hamburger.open .line2 {
          opacity: 0;
        }
        .hamburger.open .line3 {
          transform: rotate(-45deg) translate(5px, -4px);
        }
        
        @media (max-width: 768px) {
          .dynamic-height-navbar {
            height: 100px !important;
            transition: height 0.5s ease-in-out !important;
          }
          .dynamic-height-navbar.menu-open {
            height: 350px !important;
          }
          .dynamic-height-navbar .nav-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 1rem;
          }
          .dynamic-height-navbar .nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          .dynamic-height-navbar .mobile-menu-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        
        @media (min-width: 769px) {
          .dynamic-height-navbar {
            height: auto !important;
          }
        }
      `}</style>

      <nav className={`my-nav dynamic-height-navbar bg-[#2c3e50] border-gray-200 dark:bg-gray-700 w-full px-3 sm:px-6 lg:px-20 py-2 sm:py-4 lg:py-6 fixed z-30 ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        
        <div className="nav-content md:hidden">
          <div className="nav-header">
            <a href="" className="flex items-center">
              <span className="self-center text-lg font-semibold whitespace-nowrap text-white uppercase">
                Start framework
              </span>
            </a>

            <button
              onClick={toggleMenu}
              type="button"
              className={`hamburger inline-flex items-center p-1.5 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isMenuOpen ? 'open' : ''}`}
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-4 h-4 flex flex-col justify-center items-center">
                <span className="hamburger-line line1 block w-4 h-0.5 bg-current mb-0.5"></span>
                <span className="hamburger-line line2 block w-4 h-0.5 bg-current mb-0.5"></span>
                <span className="hamburger-line line3 block w-4 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>

          <div className="mobile-menu-container">
            <div className={`mobile-menu w-full ${isMenuOpen ? 'open' : 'closed'}`}>
              <div className="space-y-4 bg-[#34495e] rounded-lg p-4 shadow-lg">
                <NavLink
                  to="about"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-lg text-white hover:bg-[#2c3e50] rounded-md bg-tranparnt transition-colors duration-200 uppercase text-center"
                >
                  About
                </NavLink>
                <NavLink
                  to="portfolio"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-lg text-white hover:bg-[#2c3e50] rounded-md bg-tranparnt transition-colors duration-200 uppercase text-center"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="contact"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-lg text-white hover:bg-[#2c3e50] rounded-md bg-tranparnt transition-colors duration-200 uppercase text-center"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-wrap items-center justify-between mx-auto p-2 sm:p-3 lg:p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-lg sm:text-xl lg:text-3xl font-semibold whitespace-nowrap dark:text-white uppercase">
              Start framework
            </span>
          </a>

          <div className="w-full md:block md:w-auto me-10 uppercase" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50  bg-tranparnt md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
              <li>
                <NavLink 
                  to="about" 
                  className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-[#17af91] rounded-md  duration-200"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="portfolio" 
                  className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-[#17af91] rounded-md  duration-200"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="contact" 
                  className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-[#17af91] rounded-md  duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

