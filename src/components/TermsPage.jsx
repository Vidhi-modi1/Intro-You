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
  <h1 className="text-4xl font-bold mb-4 text-[#820080] text-center">
    Terms and Conditions of Use
  </h1>

  {/* -------------------- 1. Introduction -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      1. Introduction
    </h2>
    <p className="mb-2">
      Welcome to IntroYou, a premium matchmaking platform operated by Intro International
      Group L.L.C-FZ, a UAE-registered company (referred to as “IntroYou”, “we”, or “us”).
      We provide personal matchmaking and introduction services via our platform at
      <a href="https://intro-you.com" className="text-[#820080] underline ml-1">https://intro-you.com</a>.
    </p>
    <p className="mb-2">
      All payments for our services are securely collected by Triple AMT Group Ltd,
      a UK-registered company (Company No. 10502502), acting solely as a payment collection
      agent on our behalf. The service itself is provided exclusively by Intro International Group L.L.C-FZ.
    </p>
    <p>
      By using the platform, you agree to these Terms. If you do not agree, you must not use the service.
    </p>
  </section>

  {/* -------------------- 2. Definitions -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">2. Definitions</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>“Platform” / “Service” </strong>– The matchmaking website and services offered by IntroYou.</li>
      <li><strong>“User” / “Member” / “You” </strong>– Anyone who accesses, registers for, or uses the Platform.</li>
      <li><strong>“IntroYou” / “We” / “Us” </strong>– Intro International Group L.L.C-FZ, the service provider.</li>
      <li><strong>“Triple AMT Group Ltd” </strong>– The UK-based payment collection agent acting on behalf of IntroYou.</li>
      <li><strong>“Membership Plans” </strong>– Our service tiers: Passive (Free), Gold (One-time), and Concierge (One-time).</li>
      <li><strong>“Match” </strong>– A suggested introduction made via the Platform.</li>
      <li><strong>“Message” </strong>– Any communication sent between matched users on the Platform.</li>
    </ul>
  </section>

  {/* -------------------- 3. Eligibility and Age Confirmation -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      3. Eligibility and Age Confirmation
    </h2>
    <p className="mb-2">
      <strong>3.1 Adult Only Service (18+):</strong> The IntroYou Service is strictly for adults aged 18 or over.
      By registering for an account or otherwise using the Platform, you represent and warrant that you are at least
      eighteen (18) years old and legally capable of entering into this agreement.
      We do not permit anyone under 18 to use IntroYou. You will be required to confirm your age during sign-up,
      and you will not be allowed to proceed without explicitly confirming that you are 18 or older.
      If we discover or suspect that a user is under 18, we reserve the right to suspend or terminate the account immediately.
    </p>
    <p>
      <strong>3.2 Legal Capacity:</strong> By using the Service, you also confirm that you have the right, authority, and capacity
      to agree to these Terms and to abide by them. You must not have been previously prohibited by us from using the Service.
      The Service is offered for personal use only; you may not use it if you are barred by law from doing so or if using it would violate any law in your jurisdiction.
    </p>
  </section>

  {/* -------------------- 4. Account Registration and User Account Security -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      4. Account Registration and User Account Security
    </h2>
    <p className="mb-2">
      <strong>4.1 Account Creation:</strong> To use features like creating a profile or messaging matches, you must register an account
      and provide truthful, accurate, current, and complete information about yourself — including personal and matchmaking-related details such as religion, sexuality, and preferences.
      We collect this sensitive information solely to improve our matchmaking service.
    </p>
    <p className="mb-2">
      The IntroYou service is not offered to or intended for residents of the UAE. All services are supplied exclusively from the UAE by Intro International Group L.L.C-FZ,
      while payments may be collected by Triple AMT Group Ltd in the UK. By creating an account, you explicitly consent to our collection and use of your sensitive personal data for matchmaking purposes.
    </p>
    <p className="mb-2">
      <strong>4.2 Accuracy of Information:</strong> You agree to provide accurate and truthful information when registering and to keep your account information updated. Impersonation is strictly prohibited. Each individual may maintain only one account.
    </p>
    <p className="mb-2">
      <strong>4.3 Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and must not share them with anyone. Notify us immediately if you suspect unauthorised access. You are liable for all activities under your account.
    </p>
    <p className="mb-2">
      <strong>4.4 Account Use and Ownership:</strong> Your account is personal to you and may not be transferred or shared. If you create an account on behalf of a business (where explicitly permitted), you must have authority to bind that entity.
    </p>
    <p className="mb-2">
      <strong>4.5 Profile Information and Privacy:</strong> Profile information you provide (except private credentials) may be visible to other users. Do not include contact details like phone numbers or addresses in public sections. Communication should stay within the platform until mutual consent to share externally.
    </p>
    <p>
      <strong>4.6 Sensitive Data Handling:</strong> Sensitive information is processed securely under UK GDPR and Data Protection Act 2018 and used only for matchmaking purposes.
    </p>
  </section>

  {/* -------------------- 5. Services and Membership Plans -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      5. Services and Membership Plans
    </h2>
    <p className="mb-2">
      IntroYou offers multiple membership tiers to cater to different user needs. Currently, we provide a free Passive Plan and two premium paid plans known as the Gold Plan and Concierge Plan. Each plan offers different features as outlined below and on our website.
    </p>
    <ul className="list-disc pl-5 space-y-2 mb-2">
      <li><strong>Passive Membership:</strong> Free; you may be shown to others and occasionally receive match suggestions.</li>
      <li><strong>Gold Membership:</strong> A one-time paid upgrade with enhanced profile visibility and personalised human-curated matches.</li>
      <li><strong>Concierge Membership:</strong> A bespoke service offering full personal support and hand-selected introductions from our matchmaking team.</li>
    </ul>
    <p>
      Every tier is human-led and carefully curated for quality matches based on your preferences and relationship goals.
    </p>
  </section>

  {/* -------------------- 6. Fees, Refunds and Cancellation Policy -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      6. Fees, Refunds and Cancellation Policy
    </h2>
    <p className="mb-2">
      <strong>6.1 Payment Obligations:</strong> When purchasing a Gold or Concierge plan, you agree to pay the one-time fee shown for that service. Payments must be made in full at purchase using our approved methods. You will receive confirmation once processed.
    </p>
    <p className="mb-2">
      <strong>6.2 No Refunds Policy:</strong> All fees are final and non-refundable except where required by law. Refunds are not issued for dissatisfaction, unmet matches, or change of mind. By purchasing and immediately accessing our services, you agree to waive statutory cool-off rights where permitted by law.
    </p>
    <p className="mb-2">
      <strong>6.3 Upgrades and Downgrades:</strong> Plans are one-time purchases, not subscriptions. Free members may upgrade any time. Higher tiers include lower tier benefits; no partial refunds for downgrades.
    </p>
    <p className="mb-2">
      <strong>6.4 Account Termination and Forfeiture of Fees:</strong> If your account is terminated for breach of these Terms or you delete your account voluntarily, any unused paid features are forfeited without refund.
    </p>
    <p>
      <strong>6.5 Chargebacks and Payment Disputes:</strong> Contact us first to resolve any payment issue. Initiating a chargeback without contact may lead to account suspension and liability for fees incurred.
    </p>
  </section>

  {/* -------------------- 7. Acceptable Use and User Conduct -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      7. Acceptable Use and User Conduct
    </h2>
    <p className="mb-2">
      We are committed to maintaining a respectful, safe, and lawful environment on IntroYou. By using our Service, you agree to follow these rules. Violation may result in immediate suspension or termination.
    </p>
    <ul className="list-disc pl-5 space-y-2 mb-2">
      <li>Use IntroYou only for personal, lawful, non-commercial purposes.</li>
      <li>Do not post illegal, infringing, offensive, obscene, or fraudulent content.</li>
      <li>No harassment, hate speech, or threats toward other users.</li>
      <li>No spam, advertising, or data-harvesting activities.</li>
      <li>Respect others’ privacy; don’t share personal data without consent.</li>
      <li>No automated scripts, bots, or malicious code.</li>
      <li>Follow profile guidelines — accurate photos, no explicit material in public areas.</li>
    </ul>
    <p>
      Report any violations or unsafe behaviour to our support team. We will review and take appropriate action.
    </p>
  </section>

  {/* -------------------- 8. User Content and Intellectual Property Rights -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      8. User Content and Intellectual Property Rights
    </h2>
    <p className="mb-2">
      You retain ownership of all content you submit to IntroYou. By uploading or sharing content, you grant us a worldwide, non-exclusive, royalty-free licence to use, modify, display, and distribute it solely for operating and promoting the Service.
    </p>
    <p className="mb-2">
      You are responsible for the accuracy and legality of your content. We may moderate or remove violating material and suspend repeat offenders. All IntroYou trademarks, software, and systems remain our property and must not be copied or reverse-engineered.
    </p>
    <p>
      Feedback or ideas you submit may be used freely to improve the Service without obligation or compensation.
    </p>
  </section>
  {/* -------------------- 9. Privacy and Data Protection -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      9. Privacy and Data Protection
    </h2>
    <p className="mb-2">
      Your privacy is very important to us. Our use of your personal data is governed by our
      <strong> Privacy Policy</strong>, available on our website, which is incorporated into these Terms.
      By using the Service, you acknowledge that you have read and agreed to it.
    </p>
    <p className="mb-2">
      We collect personal information (such as name, age, location, and preferences) and sensitive
      details (such as religion or sexuality) solely to provide tailored matchmaking.
      This data is processed under UK GDPR and the Data Protection Act 2018, stored securely, and shared only with trusted providers like payment processors.
    </p>
    <p className="mb-2">
      You can manage or delete your data at any time. Although we use reasonable security measures, no system is foolproof;
      you remain responsible for protecting your password and for any data you share with other users.
    </p>
  </section>

  {/* -------------------- 10. Account Suspension and Termination -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      10. Account Suspension and Termination
    </h2>
    <p className="mb-2">
      We may suspend or terminate your account if you violate these Terms or engage in conduct that harms the platform, users, or our reputation.
      Serious breaches—such as impersonation, scams, or illegal content—can result in immediate, permanent removal without notice.
    </p>
    <p className="mb-2">
      If your account is terminated for misconduct, you will not be entitled to any refund.
      You may delete your account at any time; your profile will be removed from public view, though some data may be retained as required by law.
    </p>
    <p>
      If you believe your account was wrongly terminated, you can appeal by contacting us.
      We reserve the right to modify, suspend, or discontinue the Service entirely.
    </p>
  </section>

  {/* -------------------- 11. Disclaimers -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">11. Disclaimers</h2>
    <ul className="list-disc pl-5 space-y-2 mb-2">
      <li><strong>Service Provided “As Is”:</strong> We do not guarantee the Service will be error-free, uninterrupted, or that it will meet your expectations.</li>
      <li><strong>No Warranty of Outcomes:</strong> Compatibility and chemistry cannot be assured; decisions based on matches are at your own risk.</li>
      <li><strong>User Conduct:</strong> While profiles are manually reviewed, we cannot guarantee that all users are who they claim to be—use caution.</li>
      <li><strong>No Liability for User Actions:</strong> Interactions with other users, online or offline, are entirely your responsibility.</li>
      <li><strong>Third-Party Services:</strong> External services such as payment gateways are outside our control and governed by their own terms.</li>
      <li><strong>No Implied Warranties:</strong> All implied warranties (merchantability, fitness for purpose, etc.) are disclaimed to the extent permitted by law.</li>
    </ul>
  </section>

  {/* -------------------- 12. No Guarantee of Match Outcomes -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      12. No Guarantee of Match Outcomes
    </h2>
    <p className="mb-2">
      IntroYou makes no guarantee that you will find a successful match, date, partner, or relationship.
      Every user’s journey is unique, and outcomes depend on personal factors beyond our control.
    </p>
    <p>
      Dissatisfaction or unsuccessful experiences do not constitute grounds for compensation or refund,
      though we welcome reports of misconduct to help us maintain safety and quality.
    </p>
  </section>

  {/* -------------------- 13. Limitation of Liability -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      13. Limitation of Liability
    </h2>
    <p className="mb-2">
      To the fullest extent permitted by law, Intro International Group L.L.C-FZ, Triple AMT Group Ltd, and their affiliates
      will not be liable for indirect, incidental, special, or consequential damages, including loss of profits or data.
    </p>
    <p className="mb-2">
      Except where prohibited by law, our total liability to you shall not exceed the greater of (a) the amount you paid to us in the past 12 months or (b) £100 GBP.
    </p>
    <p className="mb-2">
      Nothing in these Terms excludes liability for death, personal injury caused by negligence, or fraud.
      You agree to indemnify and hold harmless IntroYou and its affiliates from claims arising from your misuse of the Service or breach of these Terms.
    </p>
  </section>

  {/* -------------------- 14. Dispute Resolution -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      14. Dispute Resolution
    </h2>
    <p className="mb-2">
      We encourage you to contact us first to resolve any issue informally by emailing
      <a href="mailto:support@intro-you.com" className="text-[#820080] underline ml-1">support@intro-you.com</a>.
      If unresolved, mediation or court proceedings may follow under the laws of England and Wales.
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>No class actions are permitted; disputes must be brought individually.</li>
      <li>We may seek injunctive relief to prevent misuse of our intellectual property or Service.</li>
    </ul>
  </section>

  {/* -------------------- 15. Governing Law and Jurisdiction -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      15. Governing Law and Jurisdiction
    </h2>
    <p>
      These Terms are governed by the laws of England and Wales.
      Any disputes shall be resolved exclusively in the English courts.
      Payments are processed by Triple AMT Group Ltd (UK) as collection agent for Intro International Group L.L.C-FZ (UAE).
    </p>
  </section>

  {/* -------------------- 16. Miscellaneous Provisions -------------------- */}
  <section className="mb-6">
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      16. Miscellaneous Provisions
    </h2>
    <ul className="list-disc pl-5 space-y-2 mb-2">
      <li><strong>Entire Agreement:</strong> These Terms and the Privacy Policy form the entire agreement between you and IntroYou.</li>
      <li><strong>Severability:</strong> If any term is found invalid, the rest remain in effect.</li>
      <li><strong>No Waiver:</strong> Our failure to enforce any right does not constitute a waiver of it.</li>
      <li><strong>Assignment:</strong> You may not transfer these Terms without our written consent; we may assign them in connection with a merger or sale.</li>
      <li><strong>Relationship of Parties:</strong> Nothing here creates a partnership or employment relationship.</li>
      <li><strong>Third-Party Rights:</strong> Only you and IntroYou may enforce these Terms; no third party benefits apply except Triple AMT as payment agent.</li>
      <li><strong>Notices:</strong> We may communicate with you electronically via email or in-app notifications.</li>
      <li><strong>Language:</strong> These Terms are in English; translations are for convenience only.</li>
      <li><strong>Survival:</strong> Provisions such as liability limits and indemnities survive termination of your account.</li>
    </ul>
  </section>

  {/* -------------------- 17. Contact Information -------------------- */}
  <section>
    <h2 className="font-semibold text-lg text-[#820080] mb-2">
      17. Contact Information
    </h2>
    <p className="mb-2">
      For questions, concerns, or feedback regarding these Terms or the IntroYou Service, please contact us:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Email: <a href="mailto:support@intro-you.com" className="text-[#820080] underline">support@intro-you.com</a></li>
      <li>Website: <a href="https://intro-you.com" className="text-[#820080] underline">https://intro-you.com</a></li>
    </ul>
    <p className="mt-2">
      We aim to respond within two business days and value your feedback in helping us improve the IntroYou experience.
    </p>
  </section>
</main>


            {/* Footer */}
                <FooterApp />
          </div>         
} 

export default TermsPage;