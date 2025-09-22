import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const PolicyPage =() =>{
       const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
         
       return  <div className="min-h-screen bg-white">
             {/* Header */}
              <HeaderApp />
   
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
           We conduct manual checks, maintain secure hosting, provide reporting systems, and suspend accounts for breaches.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Users must secure credentials, not screenshot or share content, act respectfully, and report misconduct. </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            3. Meeting in Person
          </h2>
          <p>
            Users are responsible for safety when meeting offline. Meet in public, inform a contact, and avoid home addresses.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            4. Prohibited Conduct
          </h2>
          <p>
           Includes false profiles, impersonation, harassment, offensive content, commercial use, or misuse of the service.
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
           We disclaim liability for user conduct and offline meetings. Liability is capped per T&Cs.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            7. Amendments
          </h2>
          <p>
            We may revise this Policy. Continued use constitutes acceptance.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-semibold text-xl text-[#820080] mb-2">
            8. Contact
          </h2>
          <p>
            Email:{" "}
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
              <FooterApp />
             </div>            
}   

export default PolicyPage;