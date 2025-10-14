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
  <h1 className="text-4xl font-bold mb-4 text-[#820080] text-center">Privacy Policy</h1>
  {/* <p className="text-sm text-gray-500 mb-8">Effective Date: 14 October 2025</p> */}

  {/* Section 1 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      1. Who We Are
    </h2>
    <p>
      IntroYou is operated and supplied by Intro International Group L.L.C-FZ, a
      company registered in Dubai, United Arab Emirates. We are the primary data
      controller for all personal data collected through the IntroYou platform.
      Payments are processed by Triple AMT Group Ltd, a UK-based entity acting
      solely as a payment collection agent. Triple AMT may access limited
      personal identifiers (such as your email) for payment and support purposes
      and is registered with the UK Information Commissioner’s Office (ICO).
    </p>
  </section>

  {/* Section 2 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">2. Scope</h2>
    <p>
      This Privacy Policy applies to all users of the IntroYou service,
      including website visitors and registered members. By using the platform,
      you consent to the collection and processing of your data as outlined in
      this policy.
    </p>
  </section>

  {/* Section 3 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      3. Data We Collect
    </h2>
    <p className="mb-2">We may collect and process the following categories of personal data:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Contact details: name, email address, phone number</li>
      <li>
        Identity and demographic data: date of birth, gender, ethnicity,
        religion, sexuality, nationality
      </li>
      <li>
        Lifestyle preferences: dietary habits, relationship preferences, hobbies,
        and values
      </li>
      <li>Location: city, country, and distance preferences</li>
      <li>
        Account and usage data: profile photos, login history, and match
        interactions
      </li>
      <li>
        Payment-related data (processed by Triple AMT): email and payment
        confirmations (no card details stored)
      </li>
    </ul>
    <p className="mt-2">
      We collect only the minimum data necessary to provide a safe and
      personalised matchmaking experience.
    </p>
  </section>

  {/* Section 4 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      4. Legal Basis for Processing
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Consent:</strong> for sensitive data such as religion or sexuality
      </li>
      <li>
        <strong>Performance of a contract:</strong> to deliver matchmaking services
      </li>
      <li>
        <strong>Legal obligation:</strong> for compliance with applicable laws
      </li>
      <li>
        <strong>Legitimate interests:</strong> to improve services, prevent fraud,
        and ensure security
      </li>
    </ul>
  </section>

  {/* Section 5 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      5. Sensitive Data
    </h2>
    <p>
      Some profile information (such as religion, ethnicity, or sexual
      orientation) may be classified as sensitive under UK GDPR. We collect and
      process this data only with your explicit consent to enhance matchmaking
      quality. You may withdraw consent anytime, though it may affect your
      access to certain features.
    </p>
  </section>

  {/* Section 6 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      6. Use of Your Data
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>To create and manage your matchmaking profile</li>
      <li>To deliver match suggestions based on compatibility</li>
      <li>To communicate updates, matches, or service improvements</li>
      <li>To process payments and provide support</li>
      <li>To investigate abuse, fraud, or security issues</li>
      <li>To comply with legal and regulatory obligations</li>
    </ul>
  </section>

  {/* Section 7 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">7. Data Sharing</h2>
    <p className="mb-2">We do not sell your personal data. It may only be shared with:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>IntroYou’s matchmaking team (under confidentiality agreements)</li>
      <li>Triple AMT Group Ltd (for payment processing only)</li>
      <li>
        Trusted technical providers (hosting, analytics, or support) acting under
        data protection contracts
      </li>
    </ul>
  </section>

  {/* Section 8 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      8. International Transfers
    </h2>
    <p>
      Your data may be stored or processed outside the UK or UAE, depending on
      our infrastructure providers. We implement appropriate safeguards such as
      standard contractual clauses to ensure compliance with UK GDPR.
    </p>
  </section>

  {/* Section 9 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">9. Data Retention</h2>
    <p className="mb-2">We retain your data only for as long as necessary:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Active users: while your account is open</li>
      <li>Inactive users: up to 24 months of inactivity</li>
      <li>Payment/legal records: up to 7 years (as required by law)</li>
    </ul>
    <p className="mt-2">
      You may request deletion of your data anytime by contacting{" "}
      <a href="mailto:support@intro-you.com" className="text-[#820080] underline">
        support@intro-you.com
      </a>
      .
    </p>
  </section>

  {/* Section 10 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">10. Your Rights</h2>
    <p className="mb-2">
      Under UK GDPR, you have the right to:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Access your personal data</li>
      <li>Request correction or update of information</li>
      <li>Withdraw consent for sensitive data</li>
      <li>Request deletion of your account and data</li>
      <li>Object to or restrict processing</li>
      <li>
        Lodge a complaint with the UK Information Commissioner’s Office (ICO)
      </li>
    </ul>
  </section>

  {/* Section 11 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">11. Data Security</h2>
    <p>
      We implement strong technical and organisational safeguards to protect
      your information from unauthorised access, misuse, or alteration. These
      include encryption, secure hosting, and strict access controls.
    </p>
  </section>

  {/* Section 12 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">12. Age Restriction</h2>
    <p>
      IntroYou is strictly for users aged 18 and above. We do not knowingly
      collect or store information from minors. If we discover an underage
      account, it will be deleted immediately along with associated data.
    </p>
  </section>

  {/* Section 13 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">13. Third-Party Services</h2>
    <p>
      We may use third-party tools (e.g., analytics, customer support platforms)
      to operate the platform. These providers access only the minimum data
      required for functionality and are bound by confidentiality and data
      protection obligations.
    </p>
  </section>

  {/* Section 14 */}
  <section className="mb-6">
    <h2 className="font-semibold text-xl text-[#820080] mb-2">14. Contact Us</h2>
    <p>
      For questions or concerns about this Privacy Policy, please contact our
      Data Protection Officer (DPO):
    </p>
    <p className="mt-2">
      Email:{" "}
      <a href="mailto:support@intro-you.com" className="text-[#820080] underline">
        support@intro-you.com
      </a>
    </p>
  </section>

  {/* Section 15 */}
  <section>
    <h2 className="font-semibold text-xl text-[#820080] mb-2">
      15. Updates to This Policy
    </h2>
    <p>
      We may update this policy periodically to reflect changes in law,
      technology, or our service practices. When we do, we’ll notify users via
      email or platform announcements. Continued use of the Service indicates
      your acceptance of the revised policy.
    </p>
  </section>
</main>

                     
               {/* Footer */}
              <FooterApp />
             </div>            
}   

export default PolicyPage;