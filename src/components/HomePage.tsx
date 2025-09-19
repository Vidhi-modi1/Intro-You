import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import heroBackground from "../assets/banner-video.mov";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import mediaLogos from "figma:asset/f155cf5f41db1f44deca305754495067df65f873.png";
import bbcLogo from "figma:asset/1210440e0f5e84f8df640df0d164921393ab8ca5.png";
import heartButtonIcon from "figma:asset/3b78bb2c9df6774abaf1349c5427ba87c276ded9.png";
import realShape from "figma:asset/fa1763f5797a2ff04f21d43071f92fb79857ebc5.png";
import circleShape from "figma:asset/aad7ff2e480d658db8abe3b73463af325f0a21df.png";
import arrowShape from "figma:asset/fce5844d210ee2d3265bd497d9b2c5555c866698.png";
import calendarIcon from "figma:asset/81c41d1d6733784ca73d53fe239e70a98afa1216.png";
import heartDifferentIcon from "figma:asset/b5c905144a82df1d07d3c81634872a6e0759c964.png";
import accessibilityIcon from "figma:asset/bc6e9ad348132897f4f27a875b5d5e0690eeb05e.png";
import checkmarkIcon from "figma:asset/bbfa7dab0f3da1d7dc12afef0fcc570a0c0938ad.png";
import heartQualityIcon from "figma:asset/9a01c0ec700bff6c443470f8ae3258406f8e9cb9.png";
import crownIcon from "figma:asset/ee5659954383da0b2c7868fe55fbafef4aab0e8c.png";
import storyImage from "figma:asset/820b19f86ad00b340976857c50ff77be15edfd15.png";
import foundersPhoto from "../assets/4f12ee2c221edd065a303114b625d92e4910a7b8.jpg";
import storyBehindBackground from "figma:asset/bfd7a40e72d57066b21cd625646ed2f44048a20a.png";
import backImage from "../assets/back-img.png";
import signatureImage from "figma:asset/13eeee068b52e50b597138d02c16d2f4dec876c9.png";
import heartNewIcon from "figma:asset/9a01c0ec700bff6c443470f8ae3258406f8e9cb9.png";
import howWorksProfileIcon from "figma:asset/70d102236106b2282d6f55b8f4f57cc3afea6a4d.png";
import howWorksHeartIcon from "figma:asset/061a76defe5a622732879b36b3de1f4032a6ad5b.png";
import howWorksMessageIcon from "figma:asset/9b3a6b4c7f03aa957ec22f59df76c4d020d92a37.png";
import itvLogo from "figma:asset/42ee49936b73610672e2b436b1ba768efc10af46.png";
import yahooLogo from "figma:asset/479c0fe2738f5e7d0b30db9870c578ff1475e1e1.png";
import helloLogo from "figma:asset/06fa05f9678fd2ac3dabb2e027ef576a5189deb3.png";
import okLogo from "figma:asset/9de38ac436bf7565f58efb43962b8412693dbee6.png";
import eveningStandardLogo from "figma:asset/ec81fdd89f366266d987dd261b9be975f13b8b25.png";
import metroLogo from "figma:asset/aef650f951484abfb3ef17f88802e8cc52c4149f.png";
import newHeartIcon from "figma:asset/6a1b654a7eeca9a8d7baeba8bd31a76f96a7d0b2.png";
import coupleImage from "figma:asset/3de54880b8a6b5ee1f5705a511ff2be04da832a8.png";
import yahooLogoExtra from "figma:asset/290973993221e5de301713490e3618ef76960344.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userGender, setUserGender] = useState("Woman");
  const [lookingFor, setLookingFor] = useState("Man");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes IntroYou different from dating apps?",
      answer:
        "Dating apps throw you into a sea of options, IntroYou is a premium introduction service where every match is thoughtfully handpicked by our team. No algorithms, no small talk for the sake of it. Just real compatibility and intentional intros that save your time and energy.",
    },
    {
      question: "How do I know the people on here are real?",
      answer:
        "All profiles are manually verified by our team to ensure authenticity and quality.",
    },
    {
      question: "Will I see profiles before you introduce me?",
      answer:
        "You'll receive curated introductions with full profiles for your review before connecting.",
    },
    {
      question: "Will my profile be visible to everyone?",
      answer:
        "Your profile visibility is controlled and only shown to carefully selected potential matches.",
    },
    {
      question: "How do I actually get matched and speak to someone?",
      answer:
        "Our team handles the matching process and facilitates introductions between compatible members.",
    },
    {
      question: "Is this just for serious relationships?",
      answer:
        "We cater to various relationship goals, from casual dating to serious long-term commitments.",
    },
  ];

  // Add this useEffect after your useState
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                //className="h-10 w-auto"
                 className="h-14 w-auto sm:h-14"
                width="185"
                height="48"
              />
            </div>

            {/* Desktop Menu (hidden on mobile) */}
            <nav className="hidden lg:flex space-x-8 mx-10">
              {/* <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">Home</a> */}
              <Link 
                  to="/" 
                 className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
                >
               Home
                </Link>
              <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">Why IntroYou</a>
              <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">About Us</a>
              <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">How it Works</a>
              <button 
                onClick={() => navigate('/pricing')} 
                className="text-gray-700 hover:text-[#820080] transition-colors duration-200"
              >
                Pricing
              </button>
              <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">Contact Us</a>
              {/* <a href="#" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">Terms & Conditions</a>
              <a  href="/policy" className="text-gray-700 hover:text-[#820080] transition-colors duration-200">Privacy Policy</a> */}
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
                //className="px-[62px] py-[12px] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                 className="px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: "#171D29" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2A3441";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#171D29";
                }}
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
                <img src={logoImage} alt="IntroYou" className="h-8" />
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
                  href="/join"
                  className="flex-1 py-3 rounded-md text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-center"
                  style={{ backgroundColor: "#820080" }}
                >
                  Join Now ♡
                </a>

                <a
                  href="/login"
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
                {/* <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/pricing');
                  }}
                  className="w-full py-3 rounded-md text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-center"
                  style={{ backgroundColor: "#820080" }}
                >
                  View Pricing
                </button> */}
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
                {/* <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Home</a> */}
                  <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1"
                >
                  Home
                </Link>
                <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Why IntroYou</a>
                <a href="\pricing" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">About Us</a>
                <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">How it Works</a>
                <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">FAQ</a>
                <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Contact Us</a>
                {/* <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Terms & Conditions</a>
                <a  href="/policy" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Privacy Policy</a> */}
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

      {/* Hero/Banner Section */}
      <section
        className="text-white py-20 px-6 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroBackground}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 banner-main">
          <h1 className="text-5xl md:text-[64px] mb-6 playfair-display leading-tight banner-heading">
            The Intentional Way To Date
          </h1>
          <p className="text-xl md:text-[32px] mb-12 text-gray-200 max-w-3xl mx-auto leading-10 font-normal">
            Thoughtful introductions, designed for people who want something
            real.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 banner-btn">
            <a href="https://introyou-beta.vercel.app/onboarding"
              className="w-full py-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
              style={{ backgroundColor: "#820080" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#9A0A94";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#820080";
              }}
            >
              Let's Find Your Match
            </a>
            {/* <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
              style={{ backgroundColor: "#171D29" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2A3441";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#171D29";
              }}
            >
              View Pricing
            </button> */}

            <a
              href="https://introyou-beta.vercel.app/onboarding/second"
              className="text-white hover:text-purple-300 transition-colors duration-200 text-lg underline underline-offset-4"
            >
              How It Works?
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-black">
        <div
          className="w-full mx-auto overflow-hidden"
          style={{ maxWidth: "1070px" }}
        >
          <div className="sub-title text-center pb-[16px]">
            <span className="text-white text-[24px] leading-[30px]">
              In the press
            </span>
          </div>
          
          {/* Desktop Marquee - Hidden on Mobile */}
          <div className="relative overflow-hidden hidden md:block">
            <div
              className="flex items-center animate-marquee"
              style={{ gap: "27px" }}
            >
              <img
                src={bbcLogo}
                alt="BBC"
                className="h-10 object-contain flex-shrink-0"
                width="98"
                height="28"
              />
              <img
                src={itvLogo}
                alt="ITV"
                className="h-10 object-contain flex-shrink-0"
                width="74"
                height="37"
              />
              <img
                src={yahooLogo}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
                width="150"
                height="37"
              />
              <img
                src={okLogo}
                alt="OK!"
                className="h-10 object-contain flex-shrink-0"
                width="100"
                height="34"
              />
              <img
                src={helloLogo}
                alt="HELLO!"
                className="h-10 object-contain flex-shrink-0"
                width="99"
                height="33"
              />
              <img
                src={eveningStandardLogo}
                alt="Evening Standard"
                className="h-10 object-contain flex-shrink-0"
                width="150"
                height="34"
              />
              <img
                src={metroLogo}
                alt="Metro"
                className="h-10 object-contain flex-shrink-0"
              />

              {/* Duplicate for seamless loop */}
              <img
                src={bbcLogo}
                alt="BBC"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={itvLogo}
                alt="ITV"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={yahooLogo}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={yahooLogoExtra}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={okLogo}
                alt="OK!"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={helloLogo}
                alt="HELLO!"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={eveningStandardLogo}
                alt="Evening Standard"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={metroLogo}
                alt="Metro"
                className="h-10 object-contain flex-shrink-0"
              />
            </div>
          </div>
          
          {/* Mobile Slider - Visible only on Mobile */}
          <div className="md:hidden px-4 mobile-slider">
            <Swiper
              modules={[FreeMode, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              freeMode={false}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="w-full press-logos-swiper pb-10"
            >
              <SwiperSlide>
                <img
                  src={bbcLogo}
                  alt="BBC"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={itvLogo}
                  alt="ITV"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={yahooLogo}
                  alt="Yahoo"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={okLogo}
                  alt="OK!"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={helloLogo}
                  alt="HELLO!"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={eveningStandardLogo}
                  alt="Evening Standard"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={metroLogo}
                  alt="Metro"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={yahooLogoExtra}
                  alt="Yahoo"
                  className="h-10 object-contain w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Introduce You Section */}
      <section className="py-20 px-6 bg-grey intro-wrp">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - 5/12 */}
            <div className="w-full lg:w-5/12 intro-left">
              <h2 className="text-[44px] mb-[35px] playfair-display leading-tight">
                Done with apps?
                <br />
                Try something{" "}
                <span className="relative inline-block">
                  <span>real.</span>
                  <div className="absolute flex items-center justify-center w-[110px] h-[80px] -left-[10px] -top-[6px] real-circle">
                    <img
                      src={circleShape}
                      alt=""
                      className="w-full h-full object-contain"
                      style={{ transform: "translateY(-2px)" }}
                    />
                  </div>
                  <img
                    src={arrowShape}
                    alt=""
                    className="absolute -left-[80px] top-[38px] w-[60px] h-[55px] object-contain arrow-icon"
                  />
                </span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Instead of getting lost in endless profiles, we wanted them.
                Instead, you'll receive curated introductions curated around
                compatibility and intention, giving you the best chance of
                meeting someone truly special.
              </p>
            </div>

            {/* Right Content - Form - 7/12 */}
            <div className="w-full lg:w-7/12 intro-right">
              <div
                className="bg-white p-6 lg:p-8 rounded-2xl intro-form"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 32px 26px -15px rgba(41, 31, 6, 0.12)",
                  borderRadius: "16px",
                }}
              >
                <h3 className="text-lg lg:text-xl playfair-display">
                  Who would you like us to introduce you to?
                </h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm">
                  Select your preference to begin your journey.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* I'm a dropdown */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 font-bold">
                        I'm a
                      </label>
                      <div className="relative">
                        <select
                          value={userGender}
                          onChange={(e) => setUserGender(e.target.value)}
                          className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="Woman">Woman</option>
                          <option value="Man">Man</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Looking for a dropdown */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 font-bold">
                        I’d like to be introduced to
                      </label>
                      <div className="relative">
                        <select
                          value={lookingFor}
                          onChange={(e) => setLookingFor(e.target.value)}
                          className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="Woman">Woman</option>
                          <option value="Man">Man</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <a href="https://introyou-beta.vercel.app/login"
                    onClick={() => navigate('/pricing')}
                    className="w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 mt-6 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#820080" }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#9A0A94";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#820080";
                    }}
                  >
                    <span>Let Us Introduce You</span>
                    <img
                      src={heartButtonIcon}
                      alt="heart"
                      className="w-4 h-4 h-icon"
                    />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IntroYou is Different Section */}
      <section className="py-20 px-6 bg-white intro-different-wrp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 playfair-display">
              Why <span style={{ color: "#820080" }}>IntroYou</span> is
              Different?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern matchmaking, built for introverts—not algorithms.
            </p>
          </div>

          {/* Flex Layout - All boxes same size */}
          <div className=" mx-auto">
            <div className="flex flex-wrap justify-center -mx-[6px]">
              {/* Box 1 - Curated Introductions */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-wrp">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={heartNewIcon}
                        alt="Curated Introductions"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Curated Introductions. No Swiping.
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Endless swiping is a waste of time. Here, every profile is
                    hand-selected for real compatibility based on what you're
                    looking for. You only see people who actually match your
                    standards.
                  </p>
                </div>
              </div>

              {/* Box 2 - Discreet by Design */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px]">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={accessibilityIcon}
                        alt="Discreet by Design"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Discreet by Design
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your profile isn't public and can't be searched.
                    Introductions are private and intentional, shared only when
                    there's genuine alignment with your preferences.
                  </p>
                </div>
              </div>

              {/* Box 3 - Designed for Real Connections */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-block">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={heartDifferentIcon}
                        alt="Designed for Real Connections"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Designed for Real Connections
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We can't promise love at first sight, but every feature is
                    built to give you the best chance of finding it. Meaningful
                    introductions, genuine people, & a process designed to help
                    something real begin.
                  </p>
                </div>
              </div>

              {/* Box 4 - Quality Over Quantity */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px]">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={checkmarkIcon}
                        alt="Quality Over Quantity"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Quality Over Quantity
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    No bots. No spam. No time-wasters. Every person is vetted by
                    us, so you only meet like-minded singles who match your
                    standards.
                  </p>
                </div>
              </div>

              {/* Box 5 - A Premium Community */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px]">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={crownIcon}
                        alt="A Premium Community"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    A Premium Community
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Most apps are crowded with people looking for flings.
                    IntroYou is different. It's a trusted space of singles who
                    want real connections. If you're here, you're already ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 btn-wrp">
            <a href="https://introyou-beta.vercel.app/login"
              // onClick={() => navigate('/pricing')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-link"
              style={{ backgroundColor: "#820080" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#9A0A94";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#820080";
              }}
            >
              <span>Find your match</span>
              <img src={heartButtonIcon} alt="heart" className="w-5 h-5 h-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* The Story Behind IntroYou Section */}
      <section
        className="py-20 px-20 text-white relative overflow-hidden story-wrp"
        style={{
          background: `linear-gradient(180deg, #812F95 0%, #802F94 36.3%, #4A1B56 65.43%, #290F2F 104.64%), url(${storyBehindBackground})`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "normal, overlay",
          clipPath: "polygon(0 88%, 0 0, 100% 0, 100% 88%, 50% 100%)",
        }}
      >
        {/* Full Section Overlay Image */}
        <div
          className="absolute inset-0 bg-overlay-img"
          style={{
            backgroundImage: `url(${backImage})`,
            backgroundSize: "50%",
            backgroundPosition: "left",
            mixBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(129, 47, 149, 0.7) 0%, rgba(128, 47, 148, 0.7) 36.3%, rgba(74, 27, 86, 0.8) 65.43%, rgba(41, 15, 47, 0.9) 104.64%)",
            zIndex: 2,
          }}
        ></div>

        <div className="mx-auto relative z-10" style={{ zIndex: 3 }}>
          <h2 className="text-3xl lg:text-4xl mb-8 playfair-display text-center">
            The Story Behind IntroYou
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 story-row">
            {/* Left Content - Circular Image */}
            <div
              className="w-full lg:w-1/2 flex justify-center lg:justify-center  px-6 lg:px-12"
            // style={{
            //   backgroundImage: `url(${storyBehindBackground})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
            >
              <div className="relative mt-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <img
                    src={foundersPhoto}
                    alt="Akshay & Harpreet - Founders of IntroYou"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-12">
              <div className="space-y-6 text-base lg:text-lg leading-relaxed">
                {/* Signature */}
                <div className="mt-12 signature signature-mobile">
                  <img
                    src={signatureImage}
                    alt="Akshay & Harpreet Signature"
                    className="h-12 lg:h-20 mb-2 object-contain"
                    width="330"
                    height="53"
                  />
                  <div className="text-sm lg:text-base opacity-90">Founders</div>
                </div>
                <p>
                  Our journey began in the most unexpected way. Two strangers
                  competing on a{" "}
                  <span className="font-medium">BBC Business TV Show</span>{" "}
                  turned into an emotional connection and eventually marriage.
                </p>

                <p>
                  We were lucky enough to connect naturally in person. But we
                  know it isn't that easy anymore. Dating apps loneliness is
                  real, and they've lost the genuine spark of real connection.
                </p>

                <p>
                  That's why we created{" "}
                  <span className="font-medium">IntroYou</span>. Real
                  introductions that are thoughtful, intentional and
                  pressure-free. A modern alternative to endless swiping and old
                  fashioned matchmaking.
                </p>

                <p>
                  We believe everyone deserves the chance to meet someone
                  meaningful. And we can't wait to IntroYou.
                </p>

              </div>

              {/* Signature */}
              <div className="mt-12 signature">
                <img
                  src={signatureImage}
                  alt="Akshay & Harpreet Signature"
                  className="h-12 lg:h-20 mb-2 object-contain"
                  width="330"
                  height="53"
                />
                <div className="text-sm lg:text-base opacity-90">Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IntroYou Works Section */}
      <section className="py-20 px-6 bg-white intro-different-wrp">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 playfair-display">
              How <span style={{ color: "#820080" }}>IntroYou</span> Works?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern matchmaking, built for introverts—not algorithms.
            </p>
          </div>

          {/* Flex Layout - All boxes same size */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center -mx-[12px]">
              {/* Box 1 - Tell us about yourself */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-wrp">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={newHeartIcon}
                        alt="Tell us about yourself"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Tell us about yourself
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Take a few minutes to share who you are, your values & what
                    you're looking for. We ask the right questions to understand
                    your goals and what really matters to you.
                  </p>
                </div>
              </div>

              {/* Box 2 - We curate your introductions */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px]">
                <div
                  className="p-6 text-center  h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={howWorksHeartIcon}
                        alt="We curate your introductions"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    We curate your introductions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team personally reviews every profile and selects
                    introductions with care. Each match is intentional,
                    reflecting your mindset, lifestyle & goals, so you're only
                    shown people who genuinely fit.
                  </p>
                </div>
              </div>

              {/* Box 3 - Receive your introductions */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px]">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={howWorksMessageIcon}
                        alt="Receive your introductions"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 playfair-display">
                    Receive your introductions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    When there's a strong match, we send you their profile. If
                    you're both interested, you're introduced and can connect
                    directly. No endless swiping, just meaningful introductions
                    that actually lead somewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a href="https://introyou-beta.vercel.app/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-link"
              style={{ backgroundColor: "#820080" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#9A0A94";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#820080";
              }}
            >
              <span>Find your match</span>
              <img src={heartButtonIcon} alt="heart" className="w-5 h-5 h-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 faq-wrapper" style={{ backgroundColor: "#F2F0F5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 faq-row">
            {/* Left Content - Image */}
            <div className="w-full lg:w-1/2 flex justify-center faq-left">
              <div className="relative bg-image">
                <div
                  className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden relative bg-image-main"
                  style={{
                    backgroundImage: `url(${coupleImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-image-main-overlay"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(23, 29, 41, 0.256) 0%, rgba(23, 29, 41, 0.64) 100%)",
                      borderRadius: "24px",
                    }}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-8 left-6 right-6 text-white">
                    <h3 className="text-3xl lg:text-3xl mb-2 playfair-display">
                      Tired of dating apps?
                    </h3>
                    <p className="text-sm mb-6 opacity-90">
                      That’s because they are built to keep you scrolling & single. We’re not. Let us IntroYou.
                    </p>
                    <a href="https://introyou-beta.vercel.app/onboarding"
                      className="px-6 block text-center py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto w-full"
                      style={{ backgroundColor: "#820080" }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#9A0A94";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#820080";
                      }}
                    >
                      Tell us who you are looking for
                    </a>
                    <p className="text-sm mt-2 opacity-75 text-center">
                      It takes only 3-minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - FAQ */}
            <div className="w-full lg:w-1/2 faq-right">
              <h2 className="text-3xl lg:text-4xl mb-8 playfair-display ">
                Frequently Asked Questions
              </h2>

              <div
                className="space-y-4 "
                style={{ background: "#FFFFFF", borderRadius: "8px" }}
              >
                {faqs.map((faq, index) => (
                  <div key={index} className="overflow-hidden mb-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
                      style={{
                        // background:
                        //   openFaq === index
                        //     ? "#F7F7F7"
                        //     : "#FFFFFF",
                        borderWidth: "1px 1px 0px 1px",
                        borderStyle: "solid",
                        borderColor: "#F7F7F7",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <span className="font-medium text-left pr-4">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp
                          className="w-5 h-5 transition-transform duration-300 flex-shrink-0"
                          style={{ color: "#C747C5" }}
                        />
                      ) : (
                        <ChevronDown
                          className="w-5 h-5 transition-transform duration-300 flex-shrink-0"
                          style={{ color: "#C747C5" }}
                        />
                      )}
                    </button>
                    {openFaq === index && (
                      <div
                        className="p-4 pt-2 text-sm leading-relaxed transition-all duration-300 ease-in-out"
                        style={{
                          background: openFaq === index ? "#F7F7F7" : "#FFFFFF", // Change color here
                          color: "#4B4B4B", // optional: change text color if needed
                          borderWidth: "0px 1px 1px 1px",
                          borderStyle: "solid",
                          borderColor: "#F7F7F7",
                          borderRadius: "0px 0px 8px 8px",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-white footer"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
      >
        <div className="max-w-8xl mx-auto py-12 px-6 footer-main">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content - Logo and Description */}
            <div className="w-full lg:w-2/12 footer-top">
              <img src={logoImage} alt="IntroYou" className="h-8 mb-4" />
              <p className="text-gray-600 mb-6">
                Thoughtful introductions,
                <br />
                not endless swiping.
              </p>
            </div>

            {/* Menu Sections with Borders */}
            <div
              className="w-full lg:w-5/12 footer-menu"
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                paddingLeft: "74px",
                paddingRight: "74px",
              }}
            >
              <h4 className="font-medium mb-4 text-[#820080] playfair-display mb-[38px] text-[22px] mobile-heading">
                Menu
              </h4>
              <div className="grid grid-cols-2 gap-8">
                {/* Left Menu Column */}
                <div>
                  <h4 className="font-medium mb-4 text-[#820080] playfair-display mb-[38px] text-[22px] desktop-heading">
                    Menu
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="mb-5">
                      {/* <a
                        href="/"
                        className="hover:text-black transition-colors"
                      >
                        Home Page
                      </a> */}
                        <Link 
                  to="/" 
                  className="hover:text-black transition-colors"
                
                >
                Home Page
                </Link>
                    </li>
                    <li className="mb-5">
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        How It Works
                      </a>
                    </li>
                    <li className="mb-5">
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Meet the Founders
                      </a>
                    </li>
                    <li className="mb-5">
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Why IntroYou
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Menu Column */}
                <div>
                  <h4 className="font-medium mb-4 text-transparent playfair-display mb-[38px] text-[22px] desktop-heading">
                    Menu
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="mb-5">
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mb-5">
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-5">
                      {/* <a
                        href="/terms"
                        className="hover:text-black transition-colors"
                      >
                        Terms & Privacy
                      </a> */}
                                      <Link 
                  to="/terms" 
                  className="hover:text-black transition-colors"
                
                >
                Terms & Privacy
                </Link>

                    </li>
                    <li className="mb-5">
                      {/* <a
                        href="/policy"
                        className="hover:text-black transition-colors"
                      >
                        Safe Dating Policy
                      </a> */}
             
                <Link 
                  to="/policy" 
                 className="hover:text-black transition-colors"
                >
                  Safe Dating Policy
                </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Content - Know Someone Section and Social Media */}
            <div className="w-full lg:w-5/12 max-w-[407px] md:ml-[80px] footer-bottom">
              {/* Know Someone Section */}
              <div
                className="p-6 mb-6 inline-block w-full"
                style={{
                  background: "#F7F7F7",
                  borderRadius: "167.763px",
                }}
              >
                <div className="flex items-start justify-center gap-3">
                  <div className="text-center">
                    <h4 className="font-medium text-black ">
                      Know someone tired of dating apps?
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Help them meet someone real
                    </p>
                    <p className="text-[#820080] text-sm font-medium flex justify-center gap-1">
                      Share <span className="font-bold">IntroYou</span> with a
                      friend{" "}
                      <img
                        src={footerHeartIcon}
                        alt="Heart"
                        className="w-4 h-4 flex-shrink-0 h-icon"
                      />
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons - Separate and Centered */}
              <div className="flex items-center justify-center gap-4 footer-social">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-600">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
                  <span className="text-sm text-gray-600">Tik Tok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Full Width */}
        <div
          className="mt-12 py-[12px] text-center footer-copy"
          style={{
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            backgroundColor: "#F7F7F7",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-medium">
              &copy; 2025 IntroYou. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
