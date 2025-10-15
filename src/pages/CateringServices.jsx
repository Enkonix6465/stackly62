import React, { useState } from "react";
import cateringVideo from "../assets/catering.mp4";
import catering1 from "../assets/catering1.jpg";
import catering2 from "../assets/catering2.jpg";
import catering3 from "../assets/catering3.webp";


import { FaConciergeBell, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Social Media Marketing Services",
    heroDesc: "Grow your brand and engage your audience with creative social media campaigns. Drive real results on every major platform!",
    aboutTitle: "About Our Social Media Marketing",
    about: [
      "Our social media marketing service helps your business connect with customers and build a loyal online community.",
      "We create and manage engaging content, run targeted ad campaigns, and grow your followers on platforms like Facebook, Instagram, LinkedIn, and more.",
      "Our team uses the latest trends, analytics, and creative strategies to maximize your reach and impact.",
      "Track your results with transparent monthly reports and insights. We focus on measurable growth and brand awareness.",
      "Flexible plans and custom strategies are available for businesses of all sizes. Get started and see your social media presence thrive!"
    ],
    pricingTitle: "Social Media Packages",
    pricingDesc: "Choose a package that fits your business goals. Upgrade anytime — no hidden fees!",
    plans: [
      { name: "Starter Social", price: "$99", period: "/month", features: ["Content creation", "Profile management", "Monthly reporting"], highlighted: false },
      { name: "Growth Social", price: "$299", period: "/month", features: ["Ad campaigns", "Influencer outreach", "Bi-weekly analytics"], highlighted: true },
      { name: "Premium Social", price: "$499", period: "/month", features: ["Full-service management", "Creative strategy", "Dedicated social manager", "Custom campaigns"], highlighted: false },
    ],
    testimonials: [
      { name: "Jennifer Clark", role: "Marketing Director", text: "Our engagement and followers grew fast. The campaigns and creative posts really work!" },
      { name: "Robert King", role: "Business Owner", text: "The ad campaigns brought us new customers every week. Highly recommend their social media team." },
      { name: "Linda Perez", role: "Startup Founder", text: "Affordable and effective! I love the transparent reporting and real-time results." },
      { name: "Chris Allen", role: "E-commerce Manager", text: "Best social media agency experience I've had. Excellent support and creative ideas." },
      { name: "Sophia Brown", role: "Designer", text: "Our brand’s online presence improved quickly. The content and posts are top-notch!" },
    ],
    testimonialsTitle: "What Our Social Media Clients Say",
    stepsTitle: "How Social Media Marketing Works",
    stepsDesc: "Getting results with social media is simple and effective.",
    steps: [
      { title: "Profile Setup & Audit", description: "We analyze your current profiles and set up optimized accounts." },
      { title: "Content & Campaigns", description: "We create engaging posts and run targeted ad campaigns for your audience." },
      { title: "Growth & Engagement", description: "We grow your followers and boost engagement with creative strategies." },
      { title: "Track & Improve", description: "Monitor results with monthly reports and analytics for ongoing success." },
    ],
    ctaTitle: "Ready to Grow Your Social Media?",
    ctaDesc: "Contact us now and get your social media marketing started <br /> fast, effective, and with real results. See the difference today!",
    ctaBtn: "Get Started",
  },
  ar: {
    heroTitle: "خدمات تموين استثنائية",
    heroDesc: "اجعل مناسباتك لا تُنسى مع أطباق فاخرة، خدمة مثالية، وتقديم رائع — مباشرة إلى مكان الحدث!",
    aboutTitle: "عن خدمات التموين",
    about: [
      "نحن متخصصون في خلق تجارب طعام لا تُنسى لحفلات الزفاف، الفعاليات، الحفلات الخاصة، والاحتفالات من جميع الأحجام.",
      "من عشاء فاخر إلى بوفيهات متنوعة، يصمم طهاتنا قوائم تناسب ذوقك وموضوعك وميزانيتك.",
      "باستخدام مكونات طازجة وفاخرة فقط، نضمن أن كل طبق مليء بالنكهة ومقدم بشكل جميل.",
      "فريقنا المحترف يتولى كل شيء — من التخطيط للقائمة، التوصيل، التجهيز، والخدمة — حتى تركز على الاستمتاع بمناسبتك.",
      "اختر من باقات التموين المرنة أو اطلب قائمة مخصصة بالكامل لمناسبتك الخاصة."
    ],
    pricingTitle: "باقاتنا",
    pricingDesc: "سواء كانت مناسبة حميمة أو احتفالًا كبيرًا، لدينا باقة تناسب كل حدث.",
    plans: [
      { name: "حدث أساسي", price: "$199", period: "/فعالية", features: ["حتى 20 ضيفًا", "خيارات قائمة قياسية", "توصيل مجاني حتى 10 أميال"], highlighted: false },
      { name: "حدث مميز", price: "$499", period: "/فعالية", features: ["حتى 50 ضيفًا", "قائمة مخصصة", "مدير فعالية خاص"], highlighted: true },
      { name: "حدث كبير", price: "$999", period: "/فعالية", features: ["أكثر من 100 ضيف", "قائمة مخصصة بالكامل", "فريق طهاة وخدمة كاملة في الموقع"], highlighted: false },
    ],
    testimonials: [
      { name: "جينيفر كلارك", role: "منظمة فعاليات", text: "كان التموين رائعًا — كل طبق كان طازجًا وجميل التقديم وفي الوقت المحدد!" },
      { name: "روبرت كينج", role: "مدير شركة", text: "استعنّا بهم لمؤتمرنا السنوي. الخدمة كانت احترافية وسلسة." },
      { name: "ليندا بيريز", role: "عروس", text: "كان بوفيه الزفاف مثاليًا! الضيوف أحبوا كل شيء والفريق اهتم بكل التفاصيل." },
      { name: "كريس ألين", role: "مالك مطعم", text: "أداروا فعالية كبيرة دون أي مشاكل. خدمة يمكن الاعتماد عليها حقًا." },
      { name: "صوفيا براون", role: "مضيفة عيد ميلاد", text: "طعام لذيذ، فريق رائع، وتنظيم خالٍ من التوتر — أنصح بهم بشدة!" },
    ],
    testimonialsTitle: "ماذا يقول العملاء",
    stepsTitle: "كيف تعمل الخدمة",
    stepsDesc: "حجز خدمة التموين لدينا سهل وخالٍ من التوتر.",
    steps: [
      { title: "خطط قائمتك", description: "اختر من مجموعة واسعة من المطابخ وخصصها لمناسبتك." },
      { title: "أكد الحجز", description: "احجز التاريخ، أكد التفاصيل، واسترح بينما نجهز كل شيء." },
      { title: "توصيل في الوقت المحدد", description: "نقوم بالتوصيل والتجهيز لكل شيء طازج وساخن وجميل التقديم." },
      { title: "استمتع بمناسبتك", description: "نعتني بالخدمة حتى تركز على ضيوفك." },
    ],
    ctaTitle: "جاهز لحجز مناسبتك؟",
    ctaDesc: "دعنا نهتم بالطعام بينما تركز على خلق لحظات لا تُنسى. احجز خدمة التموين الآن!",
    ctaBtn: "احجز الآن",
  },
  he: {
    heroTitle: "שירותי קייטרינג יוצאי דופן",
    heroDesc: "הפכו את האירועים שלכם לבלתי נשכחים עם מנות גורמה, שירות מושלם והגשה מרהיבה — עד למקום האירוע!",
    aboutTitle: "על שירותי הקייטרינג",
    about: [
      "אנו מתמחים ביצירת חוויות קולינריות בלתי נשכחות לחתונות, אירועים עסקיים, מסיבות פרטיות וחגיגות בכל גודל.",
      "מארוחות ערב אלגנטיות ועד בופה עשיר, השפים שלנו בונים תפריטים מותאמים לטעם, לנושא ולתקציב שלכם.",
      "באמצעות מרכיבים טריים ואיכותיים בלבד, אנו מבטיחים שכל מנה תהיה עשירה בטעם ומוגשת בצורה מרהיבה.",
      "הצוות המקצועי שלנו דואג להכל — תכנון תפריט, משלוח, סידור ושירות — כדי שתוכלו ליהנות מהאירוע.",
      "בחרו מתוך חבילות קייטרינג גמישות או בקשו תפריט מותאם אישית לאירוע שלכם."
    ],
    pricingTitle: "החבילות שלנו",
    pricingDesc: "בין אם זו התכנסות אינטימית או חגיגה גדולה, יש לנו חבילה לכל אירוע.",
    plans: [
      { name: "אירוע בסיסי", price: "$199", period: "/אירוע", features: ["עד 20 אורחים", "אפשרויות תפריט סטנדרטיות", "משלוח חינם עד 10 מייל"], highlighted: false },
      { name: "אירוע פרימיום", price: "$499", period: "/אירוע", features: ["עד 50 אורחים", "תפריט מותאם אישית", "מנהל אירוע ייעודי"], highlighted: true },
      { name: "אירוע גדול", price: "$999", period: "/אירוע", features: ["100+ אורחים", "תפריט מותאם במלואו", "צוות שפים ושירות מלא במקום"], highlighted: false },
    ],
    testimonials: [
      { name: "ג'ניפר קלארק", role: "מתכננת אירועים", text: "הקייטרינג היה מושלם — כל מנה הייתה טרייה, יפהפיה ובזמן!" },
      { name: "רוברט קינג", role: "מנהל חברה", text: "הזמנו אותם לכנס השנתי שלנו. השירות היה מקצועי וזורם." },
      { name: "לינדה פרז", role: "כלה", text: "הבופה בחתונה היה מושלם! האורחים אהבו כל ביס והצוות דאג להכל." },
      { name: "כריס אלן", role: "בעל מסעדה", text: "הם ניהלו אירוע גדול בלי שום בעיה. שירות אמין באמת." },
      { name: "סופיה בראון", role: "מארחת יום הולדת", text: "אוכל טעים, צוות נהדר וארגון ללא דאגות — ממליצה בחום!" },
    ],
    testimonialsTitle: "מה הלקוחות אומרים",
    stepsTitle: "איך זה עובד",
    stepsDesc: "הזמנת שירותי הקייטרינג שלנו פשוטה וללא דאגות.",
    steps: [
      { title: "תכננו את התפריט", description: "בחרו מתוך מגוון רחב של מטבחים והתאימו לאירוע שלכם." },
      { title: "אשרו את ההזמנה", description: "שריינו תאריך, אשרו פרטים ותנו לנו לדאוג לכל השאר." },
      { title: "משלוח בזמן", description: "אנו דואגים למשלוח ולסידור הכל טרי, חם ומוגש בצורה מרהיבה." },
      { title: "תיהנו מהאירוע", description: "אנחנו נטפל בשירות כדי שתוכלו להתמקד באורחים." },
    ],
    ctaTitle: "מוכנים להזמין לאירוע?",
    ctaDesc: "תנו לנו לדאוג לאוכל בזמן שאתם יוצרים רגעים בלתי נשכחים. הזמינו שירותי קייטרינג עוד היום!",
    ctaBtn: "הזמן עכשיו",
  },
};

const stepIcons = [
  <FaConciergeBell size={28} className="text-white" />,
  <FaShoppingCart size={28} className="text-white" />,
  <FaTruck size={28} className="text-white" />,
  <FaSmile size={28} className="text-white" />,
];

const CateringServicesHero = () => {
  // Language and theme state synced with Header
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  // Map UI language names to codes
  const langMap = {
    English: 'en',
    Arabic: 'ar',
    Hebrew: 'he',
    en: 'en',
    ar: 'ar',
    he: 'he',
  };
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  // Testimonial carousel
  const [index, setIndex] = useState(0);
  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % translations[language].testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + translations[language].testimonials.length) % translations[language].testimonials.length);
  };
  const testimonial = translations[language].testimonials[index];

  // Section background classes
  const sectionBg = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const sectionAltBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#79BAEC]/10 text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div dir={dir} className={sectionBg}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-full font-semibold shadow transition duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      {/* Hero Section */}
  <section className="relative w-full h-[85vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={cateringVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

  {/* About Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image - balanced height */}
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <img
              src={catering1}
              alt="Our Catering Service"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content - balanced height */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify">
            <h2 className="text-4xl font-bold mb-6" style={{color:'#79BAEC', ...(dir === 'rtl' ? {textAlign:'right'} : {})}}>
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p className="mb-4" key={i} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
  <h2 className="text-4xl font-bold mb-4" style={{color:'#79BAEC', ...(dir === 'rtl' ? {textAlign:'right'} : {})}}>{translations[language].pricingTitle}</h2>
  <p className="max-w-2xl mx-auto mb-12" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].pricingDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations[language].plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? (theme === 'dark' ? 'bg-[#79BAEC] text-white scale-105' : 'bg-[#79BAEC] text-white scale-105') : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition 
                  ${plan.highlighted 
                    ? "bg-white text-[#79BAEC] hover:bg-gray-100" 
                    : "bg-[#79BAEC] text-white hover:bg-[#79BAEC]/80"}`}
              >
                {language === 'ar' ? 'احجز الآن' : language === 'he' ? 'הזמן עכשיו' : 'Book Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Card */}
          <div className="text-center md:text-left">
            <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
              {translations[language].testimonialsTitle}
            </h2>
            <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
              <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-[#79BAEC] text-sm">{testimonial.role}</p>
            </div>

            {/* Arrows */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#79BAEC] text-white hover:bg-[#79BAEC]/80 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#79BAEC] text-white hover:bg-[#79BAEC]/80 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={catering2}
              alt="Catering dishes"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`}>
        <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].stepsTitle}</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].stepsDesc}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {translations[language].steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step card */}
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-[#79BAEC]' : 'bg-[#79BAEC]'}`}> 
                  {stepIcons[index]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
              </div>

              {/* Arrow (between steps only, hidden on small screens) */}
              {index < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={catering3}
          alt="Catering service"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  <div className="absolute inset-0" style={{backgroundColor: '#79BAEC', opacity: 0.7, zIndex: 0}}></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].ctaDesc}
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CateringServicesHero;
