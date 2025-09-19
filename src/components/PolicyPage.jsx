import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";

const PolicyPage =() =>{
       const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
         
       return  <div className="min-h-screen bg-white">
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
                       <a href="#" className="block text-gray-700 hover:text-[#820080] transition-all duration-200 hover:translate-x-1">Privacy Policy</a> */}
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
   
               {/* Main Content */}

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-[#820080]">
          Safety & Security Policy
        </h1>
        {/* <p className="text-sm text-gray-500 mb-8">
          Last updated: 18 September 2025
        </p> */}

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            1. Security Commitments by IntroYou
          </h2>
          <p>
            We conduct manual checks, maintain secure hosting, provide reporting
            systems, and suspend accounts for breaches.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Secure your credentials.</li>
            <li>Do not screenshot or share content.</li>
            <li>Act respectfully towards others.</li>
            <li>Report misconduct promptly.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            3. Meeting in Person
          </h2>
          <p>
            Users are responsible for safety when meeting offline. Always meet
            in public, inform a trusted contact, and avoid sharing home
            addresses.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            4. Prohibited Conduct
          </h2>
          <p>
            Prohibited conduct includes false profiles, impersonation,
            harassment, offensive content, commercial use, or misuse of the
            service.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            5. Incident Response
          </h2>
          <p>
            Reports can be sent to{" "}
            <a
              href="mailto:support@intro-you.com"
              className="text-[#820080] underline"
            >
              support@intro-you.com
            </a>
            . We investigate and may suspend accounts or refer cases to
            authorities.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            We disclaim liability for user conduct and offline meetings.
            Liability is capped as per our Terms & Conditions.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            7. Amendments
          </h2>
          <p>
            We may revise this Policy. Continued use of the platform constitutes
            acceptance of the revised Policy.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            8. Contact
          </h2>
          <p>
            For questions, contact us at{" "}
            <a
              href="mailto:support@intro-you.com"
              className="text-[#820080] underline"
            >
              support@intro-you.com
            </a>
          </p>
        </section>
      </main>
                     
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
                                     href="#"
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
                            
                                     <Link 
                                                  to="/terms" 
                                                  className="hover:text-black transition-colors"
                                                
                                                >
                                                Terms & Privacy
                                                </Link>
                                 </li>
                                 <li className="mb-5">
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
}   

export default PolicyPage;