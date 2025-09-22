import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const  TermsPage =() =>{

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const  navigate =useNavigate()
      
    return  <div className="min-h-screen bg-white">
          {/* Header */}
            <HeaderApp />

            {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-[#820080]">
          Terms and Conditions of Use
        </h1>
        {/* <p className="text-sm text-gray-500 mb-8">
          Last updated: [Insert Date]
        </p> */}

        {/* Sections */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            1. Company Information
          </h2>
          <p>
            IntroYou is operated by TRIPLE AMT GROUP LTD, a company incorporated
            in England and Wales (company number 10502502), with its registered
            office at 20-22 Wenlock Road, London, England, N1 7GU.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            2. Eligibility
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The service is strictly for individuals aged 18 years or over. By
              registering, you confirm that you are at least 18 years old.
            </li>
            <li>
              We reserve the right to request proof of age and to suspend or
              terminate any account where age eligibility cannot be verified.
            </li>
            <li>Each individual may maintain only one active account.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            3. Description of Service
          </h2>
          <p className="mb-2">
            IntroYou provides a human-curated introduction service through a
            web-based platform. Matches are selected by our team and not by
            automated algorithms. Once both parties accept an introduction, a
            private chat function within the platform is enabled.
          </p>
          <p className="mb-2">
            The service is intended solely to facilitate introductions. We make
            no representation, warranty, or guarantee:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>as to the number of introductions you will receive;</li>
            <li>that any introductions will be compatible; or</li>
            <li>
              that any relationship will result from use of the service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            4. Memberships and Fees
          </h2>
          <p className="mb-2">Membership options are as follows:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free Membership: Passive profile; introductions only if matched by a paying member.</li>
            <li>Complete Membership: £99 for three months (one-time payment).</li>
            <li>Concierge Membership: £349 for three months (one-time payment).</li>
          </ul>
          <p className="mt-2">
            Memberships expire automatically at the end of the applicable
            period. Continued use requires re-purchase. All fees are payable in
            advance via approved third-party payment processors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            5. Refunds and Cancellations
          </h2>
          <p className="mb-2">
            All membership fees are non-refundable, save where:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              required by law (including any statutory cooling-off rights), or
            </li>
            <li>we fail to deliver the purchased service.</li>
          </ul>
          <p className="mt-2">
            Refunds are not available once an introduction has been provided.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-[#820080] mb-2">
            6. User Obligations
          </h2>
          <p>Users agree that they will:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Provide accurate, current, and truthful information when
              registering and maintaining a profile.
            </li>
          </ul>
        </section>
      </main>
            {/* Footer */}
                <FooterApp />
          </div>         
} 

export default TermsPage;