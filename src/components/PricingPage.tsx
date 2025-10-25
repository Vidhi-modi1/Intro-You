import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import heroBackground from "figma:asset/a24e647a1bac8b175f483ad9895f554b95277f68.png";
import heartButtonIcon from "figma:asset/3b78bb2c9df6774abaf1349c5427ba87c276ded9.png";
import howWorksHeartIcon from "figma:asset/061a76defe5a622732879b36b3de1f4032a6ad5b.png";
import howWorksMessageIcon from "figma:asset/9b3a6b4c7f03aa957ec22f59df76c4d020d92a37.png";
import newHeartIcon from "figma:asset/6a1b654a7eeca9a8d7baeba8bd31a76f96a7d0b2.png";

interface PricingPageProps { }

export function PricingPage({ }: PricingPageProps) {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const membershipTiers = [
    {
      title: "Passive Matching",
      subtitle:
        "Your profile will be visible, but you won't be actively introduced.",
      price: "Free",
      price1: "Free",
      period: "",
      features: [
        "Limited introductions & Passive matching only",
        "Get notified when someone requests to be introduced to you",
        "Accept or pass on intros easily & message directly",
      ],
      buttonText: "Continue for Free",
      popular: false,
      note: "Our Basic Access is free. You’ll receive limited matches and we’ll notify you if a suitable introduction becomes available.",
    },
    {
      title: "Complete Member",
      subtitle:
        "Unlock the IntroYou experience with curated introductions made just for you",
      price: "£199.00",
      price1: "£199",
      period: "6 Months plan",
      features: [
        "Handpicked introductions based on compatibility",
        "Priority matchmaking from team",
        "Increased visibility + faster intros",
        "Accept or pass on intros easily",
        "Private, secure messaging",
      ],
      buttonText: "Get Started",
      popular: true,
      note: "This is a one-time payment only which gives you six months of personalised, hand-curated introductions.",
    },
    {
      title: "Concierge Service",
      subtitle:
        "A bespoke matchmaking experience with your own dedicated matchmaker",
      price: "£499.00",
      price1: "£499",
      period: "6 Months plan",
      features: [
        "1:1 Consultation Call",
        "Expert profile refinement",
        "Personally handpicked introductions",
        "Highest visibility + faster intros",
        "Regular support & feedback",
        "Private, secure messaging",
        "Friendly refund policy if there is no fit after the call",
      ],
      buttonText: "Get Started",
      popular: false,
      note: "This is a one-time payment only which gives you six months of personalised, hand-curated introductions.",
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



  const toggleCard = (index: number) => {
    if (expandedCard !== index) {
      setExpandedCard(index);
    }
  };
  
  
  
  return (
    <div className="min-h-screen bg-white ctm-body-main">
      {/* Header */}
      <header className="flex justify-center py-4 px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="hover:opacity-80 transition-opacity duration-200 logo-inner"
          >
            <img
              src={logoImage}
              alt="IntroYou"
              className="h-8 w-auto cursor-pointer"
            />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-white py-16 pb-[190px] px-6 relative bg-cover bg-top bg-no-repeat price-banner"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 letter-06 price-detail">
          <h1 className="text-[48px] mb-4 font-semibold">Hi Raphael,</h1>
          {/* <p className="text-lg mb-2">
            Thanks for sharing your story with us!
          </p> */}
          <p className="mb-8">
            We've loved getting to know you and we're excited to
            start making meaningful introductions curated just
            for you.
          </p>
          <p>
            To begin your journey, simply choose the <span className="font-bold">IntroYou </span>
            membership that feels right for you:
          </p>
        </div>
      </section>

      {/* Membership Cards */}

      {/* Membership Cards */}
      <section className="relative -mt-32 px-6 z-20 md:pb-[100px] pb-20 price-main">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.13fr_1fr] items-center max-w-5xl mx-auto md:gap-0 gap-5">
          {membershipTiers.map((tier, index) => (
            <div key={index}
             className="relative">
              <Card
                className={`relative bg-white gap-0 text-gray-900 shadow-lg w-full justify-between ${tier.popular ? "border-2 border-[#C747C5] min-h-[547px]" : "border-none min-h-[485px]"
                  }`}
              >
                {/* Badge for each card */}
                {index === 0 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center text-white text-base font-semibold z-10 letter-04 font-raleway"
                    style={{
                      background: "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                      opacity: 0.6,
                      borderRadius: "8.33599px 8.33599px 0px 0px",
                    }}
                  >
                    Basic Access
                  </div>
                )}
                {tier.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 h-10 flex items-center justify-center text-white font-semibold z-10 letter-04 text-xl"
                    style={{
                      background: "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                      borderRadius: "12px 12px 0px 0px",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                {index === 2 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center text-white text-base font-semibold bg-black z-10"
                    style={{
                      borderRadius: "8.33599px 8.33599px 0px 0px",
                    }}
                  >
                    Bespoke
                  </div>
                )}

                <CardHeader
                  className={`text-center ${index === 0 ? "pt-10 pb-4" : tier.popular ? "pt-12 pb-4" : "pt-10 pb-4"
                    }`}
                >
                  <CardTitle className="text-xl mb-2 playfair-display card-title">
                    {tier.title}
                  </CardTitle>
                  <p className="text-sm text-707070 letter-36 leading-relaxed letter-36 card-detail">
                    {tier.subtitle}
                  </p>
                  <ul className="space-y-3 mb-6 text-left min-h-[218px]">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-start gap-2 ${tier.popular ? "text-base" : "text-sm"}`}
                      >
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className={`${tier.popular ? "text-base" : "text-sm"} leading-[17px]`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    {tier.popular ? (
                      <button
                        className="w-full text-white py-4 px-6 font-normal flex items-center justify-between"
                        style={{
                          background: "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                          borderRadius: "12px",
                        }}
                      >
                        <span>{tier.buttonText}!</span>
                        <span className="font-bold card-month">
                          {tier.price}

                          {/* {tier.period && <span className="text-sm font-normal">{tier.period}</span>} */}
                        </span>
                      </button>
                    ) : index === 0 ? (
                      <button
                        className="w-full py-4 px-6 bg-gray-800 text-white hover:bg-gray-900 font-medium flex items-center justify-between"
                        style={{ borderRadius: "12px" }}
                      >
                        <span className="text-sm">Continue for Free</span>
                        <span className="font-bold text-sm">{tier.price}</span>
                      </button>
                    ) : (
                      <button
                        className="w-full py-4 px-6 bg-gray-800 text-white hover:bg-gray-900 font-medium flex items-center justify-between"
                        style={{ borderRadius: "12px" }}
                      >
                        <span className="text-sm">{tier.buttonText}</span>
                        <span className="font-bold text-sm card-month">
                          {tier.price}
                          {/* {tier.period && <span className="text-sm font-normal">{tier.period}</span>} */}
                        </span>
                      </button>
                    )}
                    {/* ✅ Dynamic Note Text */}
                    <p className="text-xs text-gray-500 text-center bottom-small-detail">
                      {tier.note}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Layout */}
        <div className="md:hidden max-w-lg mx-auto">
          <div className="flex mb-4 items-center">
            {membershipTiers.map((tier, index) => (
              // <button
              //   key={index}
              //   onClick={() => toggleCard(expandedCard === index ? null : index)}
              //   className={`price-block ${expandedCard === index ? "active active-block" : ""}`}
              // >
              // <button
              //   key={index}
              //   onClick={() => toggleCard(index)}
              //   className={`price-block ${expandedCard === index ? "active active-block" : ""}`}
              // >
              <button
                  key={index}
                  onClick={() => toggleCard(index)}
                  className={`price-block ${
                    expandedCard === index ? "active active-block" : ""
                  } ${
                    index === 0
                      ? "price-basic"
                      : tier.popular
                        ? "price-popular"
                        : "price-bespoke"
                  }`}
                >
                <div
                  className="price-badge"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(90deg, #820080 0%, #C747C5 100%)"
                        : tier.popular
                          ? "linear-gradient(90deg, #820080 0%, #C747C5 100%)"
                          : "linear-gradient(90deg, #0E0E0E 0%, #494545 100%)",
                    opacity: index === 0 ? 0.6 : 1,
                  }}
                >
                  {index === 0 ? "Basic Access" : tier.popular ? "Most Popular" : "Bespoke"}
                </div>

                <div className="price-content">
                  <h3 className="price-title">{tier.title}</h3>
                  <div className={`price-value ${expandedCard === index ? "active" : ""}`}>
                    {tier.price1}
                    <span className="price-period">{tier.period || ""}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Card Details */}
          {expandedCard !== null && (
            <div
              className="bg-white overflow-hidden mb-4 price-top-block"
              style={{
                border: "1px solid #EAEAEA",
                boxShadow: "0px 32px 26px -15px rgba(41, 31, 6, 0.12)",
                borderRadius: "16px",
              }}
            >
              {/* Special headers */}
              {membershipTiers[expandedCard].popular && (
                <div
                  className="text-white p-4 text-center detail-main-price"
                  style={{
                    background: "linear-gradient(90deg, #820080 0%, #C747C5 100%)",
                    borderRadius: "16px 16px 0px 0px",
                  }}
                >
                  <h3 className="font-bold text-lg playfair-display">Most Popular</h3>
                </div>
              )}

              {expandedCard === 2 && (
                <div className="text-white p-4 text-center detail-main-price" style={{ background: "#171D29" }}>
                  <h3 className="font-bold text-lg playfair-display">Bespoke</h3>
                </div>
              )}

              <div className="p-6 price-inner-main">
                <h3 className="text-xl font-bold playfair-display mb-2">
                  {membershipTiers[expandedCard].title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed price-detail-span">
                  {membershipTiers[expandedCard].subtitle}
                </p>

                <ul className="space-y-3 mb-6">
                  {membershipTiers[expandedCard].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-4 px-4 font-medium rounded-lg flex items-center justify-between text-lg"
                  style={{
                    background:
                      expandedCard === 0
                        ? "#171D29"
                        : expandedCard === 1
                          ? "linear-gradient(90deg, #820080 0%, #C747C5 100%)"
                          : "#171D29",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                >
                  <span>
                    {expandedCard === 0
                      ? "Continue for Free"
                      : expandedCard === 1
                        ? "Get Started!"
                        : "Get Started!"}
                  </span>
                  <span className="font-bold card-month">
                    {membershipTiers[expandedCard].price}
                    {/* {membershipTiers[expandedCard].period && (
              <span className="text-sm font-normal">
                {membershipTiers[expandedCard].period}
              </span>
            )} */}
                  </span>
                </button>

                {/* ✅ Mobile Note Text */}
                <p className="text-xs text-gray-500 text-center mt-3 pt-3 match-mobile-detail-content">
                  {membershipTiers[expandedCard].note}
                </p>
              </div>
            </div>
          )}
        </div>

      </section>

      {/* How IntroYou Works Section */}
      <section className="py-20 px-6 bg-white intro-different-wrp pt-0" id="howItWorks">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[48px] mb-4 playfair-display font-semibold letter-53 text-0E0E0E">
              How <span style={{ color: "#820080" }}>IntroYou</span> Works?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-0E0E0E">
              Personalised, compatible introductions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-[12px]">
            {/* Box 1 - Tell us about yourself */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-wrp dif-inner-main">
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
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={howWorksHeartIcon}
                      alt="Tell us about yourself"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  Tell us about yourself
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                  Take a few minutes to share who you are, your values & what
                  you're looking for. We ask the right questions to understand
                  your goals and what really matters to you.
                </p>
              </div>
            </div>

            {/* Box 2 - We curate your introductions */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
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
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={newHeartIcon}
                      alt="We curate your introductions"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  We curate your introductions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                  Our team personally reviews every profile and selects introductions with care. Each match is intentional, reflecting your mindset, lifestyle & goals, so you’re only shown people who genuinely fit.
                </p>
              </div>
            </div>

            {/* Box 3 - Receive your introductions */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
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
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={howWorksMessageIcon}
                      alt="Receive your introductions"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  Receive your introductions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                  When there’s a strong match, we send you their profile. If you’re both interested, you’re introduced and can connect directly. No endless swiping, just meaningful introductions that actually lead somewhere.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 btn-wrp">
            <a href="https://introyou-beta.vercel.app/profile"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 btn-link btn-main ctm-btn-icon"
              style={{ backgroundColor: "#820080" }}
            >
              <span className="letter-04" style={{ backgroundColor: "transparent" }}>Find your match</span>
              <img src={heartButtonIcon} alt="heart" className="w-5 h-5 h-icon" />
            </a>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="faq-wrapper" style={{ backgroundColor: "#F2F0F5" }} id="faq">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 faq-row justify-center">


            {/* Right Content - FAQ */}
            <div className="w-full lg:w-1/2 faq-right">
              <h2 className="text-3xl lg:text-4xl mb-8 playfair-display font-semibold text-0E0E0E">
                Frequently Asked Questions
              </h2>

              <div
                className="space-y-4 "
                style={{ background: "#FFFFFF", borderRadius: "8px" }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden mb-0 ${openFaq === index ? "faq-active" : ""}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
                      style={{
                        borderWidth: "1px 1px 0px 1px",
                        borderStyle: "solid",
                        borderColor: "#F7F7F7",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <span className="font-normal text-left pr-4 letter-06 text-0E0E0E">{faq.question}</span>
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
                        className="p-4 pt-2 text-sm leading-relaxed transition-all duration-300 ease-in-out faq-detail"
                        style={{
                          background: "#F7F7F7",
                          color: "#4B4B4B",
                          borderWidth: "0px 1px 1px 1px",
                          borderStyle: "solid",
                          borderColor: "#F7F7F7",
                        }}
                      >
                        <p className="letter-06 text-494545">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}