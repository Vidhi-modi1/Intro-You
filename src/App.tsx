import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Heart,
  Users,
  UserCheck,
} from "lucide-react";
import { HomePage } from "./components/HomePage";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import heroBackground from "figma:asset/a24e647a1bac8b175f483ad9895f554b95277f68.png";
import profileIcon from "figma:asset/27492c6e724222628b804e461cfac75033e6ac8e.png";
import heartIcon from "figma:asset/8915fbafd245a5980de87c2e8fb926af94a7bb65.png";
import messageIcon from "figma:asset/9b3a6b4c7f03aa957ec22f59df76c4d020d92a37.png";
import heartButtonIcon from "figma:asset/3b78bb2c9df6774abaf1349c5427ba87c276ded9.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing'>('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // If we're on home page, render HomePage component
  if (currentPage === 'home') {
    return <HomePage onNavigateToPricing={() => setCurrentPage('pricing')} />;
  }

  const membershipTiers = [
    {
      title: "Passive Matching",
      subtitle:
        "Your profile will be visible, but you won't be actively introduced.",
      price: "£0",
      period: "",
      features: [
        "Limited introductions & Passive matching only",
        "Get notified when someone requests to be introduced to you",
        "Accept or pass on intros easily & message directly",
      ],
      buttonText: "Continue for free",
      popular: false,
    },
    {
      title: "Complete Member",
      subtitle:
        "Unlock the IntroYou experience with curated introductions made just for you",
      price: "£49",
      period: "/mo",
      features: [
        "Handpicked introductions based on compatibility",
        "Priority matchmaking from team",
        "Increased visibility + faster intros",
        "Accept or pass on intros easily",
        "Private, secure messaging",
      ],
      buttonText: "Get My Match",
      popular: true,
    },
    {
      title: "Concierge Service",
      subtitle:
        "A bespoke matchmaking experience with your own dedicated matchmaker",
      price: "£199",
      period: "/mo",
      features: [
        "1:1 Consultation Call",
        "Expert profile refinement",
        "Personally handpicked introductions",
        "Highest visibility + faster intros",
        "Regular support & feedback",
        "Private, secure messaging",
        "Friendly refund policy if there is no fit after the call",
      ],
      buttonText: "Schedule a Call",
      popular: false,
    },
  ];

  const howItWorks = [
    {
      icon: profileIcon,
      title: "Tell us about yourself",
      description:
        "Take a few minutes to share who you are, your values & what you're looking for. We ask the right questions to understand your goals and what really matters to you.",
    },
    {
      icon: heartIcon,
      title: "We curate your introductions",
      description:
        "Our team personally reviews every profile and selects the best matches. We're selective - we choose only reflecting your interests. Before & goals, so you're only shown people you genuinely fit.",
    },
    {
      icon: messageIcon,
      title: "Receive your introductions",
      description:
        "When there's a strong match, we send you their profile at lunch time to when your heart's a beating. Just wait meaningful introductions that actually lead somewhere.",
    },
  ];

  const faqs = [
    {
      question:
        "What makes IntroYou different from dating apps?",
      answer:
        "Getting apps throw you into a sea of options, IntroYou is different. Introductions are highly personalised by our team. No swiping, no small talk for the sake of it. Just real compatibility and intentional intro that save your time and energy.",
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
      question:
        "How do I actually get matched and speak to someone?",
      answer:
        "Our team handles the matching process and facilitates introductions between compatible members.",
    },
    {
      question: "Is this just for serious relationships?",
      answer:
        "We cater to various relationship goals, from casual dating to serious long-term commitments.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-center py-4 px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src={logoImage}
              alt="IntroYou"
              className="h-8 w-auto"
            />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-white py-16 pb-[190px] px-6 relative bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl mb-4">Hi, Raphael!</h1>
          <p className="text-lg mb-2">
            Thanks for sharing your story with us!
          </p>
          <p className="mb-8">
            We've loved getting to know you and we're excited to
            start making meaningful introductions curated just
            for you.
          </p>
          <p>
            To begin your journey, simply choose the IntroYou
            membership that feels right for you:
          </p>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="relative -mt-32 px-6 z-20 md:pb-[100px] pb-20">
        <div className="grid md:grid-cols-[1fr_1.13fr_1fr] items-center max-w-5xl mx-auto md:gap-0 gap-5">
          {membershipTiers.map((tier, index) => (
            <div key={index} className="relative">
              <Card
                className={`relative bg-white gap-0 text-gray-900 shadow-lg w-full justify-between ${
                  tier.popular
                    ? "border-2 border-[#C747C5] min-h-[547px]"
                    : "border-none min-h-[485px]"
                }`}
              >
                {/* Badge for each card */}
                {index === 0 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center text-white text-sm font-semibold z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                      opacity: 0.6,
                      borderRadius:
                        "8.33599px 8.33599px 0px 0px",
                    }}
                  >
                    Join Free
                  </div>
                )}
                {tier.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 h-10 flex items-center justify-center text-white font-semibold z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                      borderRadius: "12px 12px 0px 0px",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                {index === 2 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center text-white text-sm font-semibold bg-black z-10"
                    style={{
                      borderRadius:
                        "8.33599px 8.33599px 0px 0px",
                    }}
                  >
                    Beespoke
                  </div>
                )}

                <CardHeader
                  className={`text-center ${index === 0 ? "pt-10 pb-4" : tier.popular ? "pt-12 pb-4" : "pt-10 pb-4"}`}
                >
                  <CardTitle className="text-lg mb-2 playfair-display">
                    {tier.title}
                  </CardTitle>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {tier.subtitle}
                  </p>
                  <ul className="space-y-3 mb-6 text-left min-h-[218px]">
                    {tier.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start gap-2 ${tier.popular ? "text-base" : "text-sm"}`}
                        >
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span
                            className={`${tier.popular ? "text-base" : "text-sm"} leading-[17px]`}
                          >
                            {feature}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    {tier.popular ? (
                      <button
                        className="w-full text-white py-3 px-4 font-medium flex items-center justify-between"
                        style={{
                          background:
                            "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                          borderRadius: "12px",
                        }}
                      >
                        <span>{tier.buttonText}!</span>
                        <span className="font-bold">
                          {tier.price}
                          {tier.period && (
                            <span className="text-sm font-normal">
                              {tier.period}
                            </span>
                          )}
                        </span>
                      </button>
                    ) : index === 0 ? (
                      <button
                        className="w-full py-3 px-4 bg-gray-800 text-white hover:bg-gray-900 font-medium flex items-center justify-between"
                        style={{ borderRadius: "12px" }}
                      >
                        <span>Continue for free</span>
                        <span className="font-bold">
                          {tier.price}
                        </span>
                      </button>
                    ) : (
                      <button
                        className="w-full py-3 px-4 bg-gray-800 text-white hover:bg-gray-900 font-medium flex items-center justify-between"
                        style={{ borderRadius: "12px" }}
                      >
                        <span>{tier.buttonText}</span>
                        <span className="font-bold">
                          {tier.price}
                          {tier.period && (
                            <span className="text-sm font-normal">
                              {tier.period}
                            </span>
                          )}
                        </span>
                      </button>
                    )}
                    <p className="text-xs text-gray-500 text-center">
                      Our membership can be cancelled at any
                      time on our website.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* How IntroYou Works */}
      <section className="py-16 px-6">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-4xl mb-4 playfair-display">
            How{" "}
            <span style={{ color: "#820080" }}>IntroYou</span>{" "}
            Works?
          </h2>
          <p className="text-gray-600 mb-12">
            Modern matchmaking. Built for introverts. Not
            algorithms.
          </p>

          <div className="flex-col md:flex-row md:flex gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center w-full p-6 md:w-1/3 md:mb-0 mb-8"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEEEEE",
                  boxShadow:
                    "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#FFEBFF" }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg mb-3 playfair-display">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <button
            className="mt-12 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 mx-auto"
            style={{ backgroundColor: "#820080" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#9A0A94";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#820080";
            }}
          >
            <span>Find your match</span>
            <img
              src={heartButtonIcon}
              alt="heart"
              className="w-4 h-4"
            />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#F2F0F5" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-center mb-12 playfair-display">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
                  <div key={index} className="overflow-hidden mb-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
                      style={{
                        background: openFaq === index ? "#F7F7F7" : "#FFFFFF", // Change color when open
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
                        className="p-4 pt-2 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out"
                        style={{
                          background: "#FFFFFF",
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
      </section>

    </div>
  );
}