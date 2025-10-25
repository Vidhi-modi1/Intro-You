import React, { useState } from "react";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";

const HeaderApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (location.pathname !== "/") {
      // Navigate to home page and pass target id
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (

    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-[16px] header-main">
          {/* Left: Hamburger + Socials (Mobile Only for Hamburger) */}
          <div className="flex flex-wrap items-center flex-1 humburger">
            {/* Hamburger button - only mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Vertical separator (only mobile when hamburger is visible) */}
            <div className="w-px h-6 bg-gray-300 mx-4 divider lg:hidden"></div>

            {/* Social media icons (always visible) */}
            <div className="flex items-center space-x-4 social-icons">
              <a
                href="#"
                className="p-2 rounded-full hover:bg-purple-50 transition-colors duration-200"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-5 h-5"
                  width="187"
                  height="48"
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-purple-50 transition-colors duration-200"
              >
                <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center logo-img">
            <img
              src={logoImage}
              alt="IntroYou"
              className="h-10 w-auto cursor-pointer"
              //className="h-14 w-auto sm:h-14"
              width="185"
              height="48"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <nav className="hidden lg:flex space-x-8 mx-10">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Home
            </Link>

            <span
              onClick={() => handleScrollTo("whyIntroYou")}
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Why IntroYou
            </span>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              About Us
            </Link>
            <span
              onClick={() => handleScrollTo("howItWorks")}
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              How it Works
            </span>
            <button
              onClick={() => navigate('/pricing')}
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Pricing
            </button>
            <span
              onClick={() => handleScrollTo("faq")}
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              FAQ
            </span>
            <span
              onClick={() => handleScrollTo("contactUs")}
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Contact Us
            </span>
            <Link
              to="/terms"
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/policy"
              className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
            >
              Privacy Policy
            </Link>

          </nav>

          {/* Right: Login button */}
          <div className="flex-1 flex justify-end login-button">
            <a href="https://introyou-beta.vercel.app/login"
              className="px-[62px]  py-[12px] sm:px-4 sm:py-2 text-white font-medium rounded-lg transition-all duration-300 btn-main"
              style={{ backgroundColor: "#171D29" }}
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay with Transitions */}
        <div
          className={`
            fixed inset-0 z-50 bg-white flex flex-col justify-between mobile-menu-main lg:hidden
            transition-all duration-300 ease-in-out overflow-y-auto
            ${mobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
            }
          `}
          style={{
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          {/* Top section */}
          <div
            className={`
              transition-all duration-500 ease-out
              ${mobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
              }
            `}
            style={{
              transitionDelay: mobileMenuOpen ? '100ms' : '0ms'
            }}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
              <img src={logoImage} alt="IntroYou" className="h-8 cursor-pointer" onClick={() => navigate('/')} />
              <div className="w-6"></div>
            </div>

            {/* Buttons */}
            <div
              className={`
                flex gap-2 px-4 py-4 transition-all duration-500 ease-out menu-btns
                ${mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                }
              `}
              style={{
                transitionDelay: mobileMenuOpen ? '200ms' : '0ms'
              }}
            >
              <a
                href="https://introyou-beta.vercel.app/profile"
                className="flex-1 py-3 rounded-md text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-center"
                style={{ backgroundColor: "#820080" }}
              >
                Join Now ♡
              </a>

              <a
                //href="/login"
                href="https://introyou-beta.vercel.app/login"
                className="flex-1 py-3 rounded-md text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-center"
                style={{ backgroundColor: "#171D29" }}
              >
                Login
              </a>

            </div>

            {/* Pricing Button */}
            <div
              className={`
                px-4 py-2 transition-all duration-500 ease-out
                ${mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                }
              `}
              style={{
                transitionDelay: mobileMenuOpen ? '250ms' : '0ms'
              }}
            >
            </div>

            {/* Menu Links */}
            <nav
              className={`
                px-4 py-4 space-y-4 transition-all duration-500 ease-out
                ${mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                }
              `}
              style={{
                transitionDelay: mobileMenuOpen ? '300ms' : '0ms'
              }}
            >
              <p className="font-semibold">Menu</p>
              <Link
                to="/"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Home
              </Link>
              <span
                onClick={() => handleScrollTo("whyIntroYou")}
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Why IntroYou
              </span>
              <Link
                to="/pricing"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                About Us
              </Link>
              <span
                onClick={() => handleScrollTo("howItWorks")}
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                How it Works
              </span>

              <span
                onClick={() => handleScrollTo("faq")}
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                FAQ
              </span>

              <Link
                to="/contact"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Contact Us
              </Link>
              <Link
                to="/terms"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/policy"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Privacy Policy
              </Link>
              <Link
                to="/safedatingpolicy"
                className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
              >
                Safe Dating Policy
              </Link>
            </nav>
          </div>

          {/* Footer */}
          <div
            className={`
              text-center text-xs text-gray-500 transition-all duration-500 ease-out header-footer-copy
              ${mobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
              }
            `}
            style={{
              transitionDelay: mobileMenuOpen ? '400ms' : '0ms'
            }}
          >
            <p>© 2025 IntroYou</p>
            <p>All Rights Reserved</p>
            <div className="bottom-header">
              <a href="#" className="hover:text-[#820080] transition-colors duration-200">introyou.co.uk</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export default HeaderApp