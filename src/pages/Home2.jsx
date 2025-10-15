import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImpactSection from "../components/ImpactSection";
import chef1 from "../assets/e2.jpg";
import chef2 from "../assets/e1.png";
import chef3 from "../assets/e3.jpg";
import home2hero from "../assets/v2.mov";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import buffet1 from "../assets/buffet1.jpg";
import buffet2 from "../assets/buffet2.jpg";
import heritage from "../assets/heritage.jpg";

const translations = {
  English: {
      heroTitle: "Grow Your Business\nWith Digital Marketing",
      heroDesc: "Unlock your brand's potential with expert SEO, social media, and targeted campaigns. Reach your audience and drive real results with our digital marketing solutions.",
      readMore: "Read More",
      specialsTitle: "What Makes Us Different — Your Unique Selling Points",
      specials: [
        "Proven Results: Our campaigns deliver measurable growth and ROI for businesses of all sizes.",
        "Data-Driven Strategies: We use analytics and insights to optimize every campaign for maximum impact.",
        "Creative Solutions: Innovative marketing ideas tailored to your brand.",
        "Dedicated Support: Transparent reporting and ongoing client care."
      ],
      heritageTitle: "Process Overview — How We Handle Client Projects",
      heritageDesc: "Our proven process ensures every client receives personalized, results-driven digital marketing solutions. Here’s how we work:",
      heritageList: [
        "Discovery & Strategy: We start by understanding your business, goals, and audience.",
        "Custom Planning: Our team crafts a tailored marketing plan for your unique needs.",
        "Execution: We launch campaigns, optimize content, and manage channels for maximum impact.",
        "Reporting & Improvement: Transparent analytics and ongoing optimization to ensure success."
      ],
      heritageBtn: "See Our Process",
      professionalsTitle: "Meet Our Professionals",
      chef1: "Gordon Ramsay",
      chef2: "Dominique Crenn",
      chef3: "Auguste Escoffier",
      chefRole: "Digital Marketing Expert",
      eventsTitle: "Why Choose Us",
      musicNights: "Proven Results",
      buffetThemes: "Data-Driven Strategies",
      eventsCardTitle: "Expert Team",
      eventsCardDesc: "Work with certified digital marketing professionals who stay ahead of industry trends.",
      eventsList: [
        "Our campaigns deliver measurable growth and ROI for businesses of all sizes.",
        "We use analytics and insights to optimize every campaign for maximum impact.",
        "Creative and innovative marketing solutions.",
        "Dedicated support and transparent reporting.",
      ],
      eventsBtn: "See Our Results",
      ctaTitle: "Ready to Grow with Social Media?",
      ctaDesc: "Let our experts help you build your brand, engage your audience, and drive results through social media. Contact us today for a free consultation!",
      reserveBtn: "Get Started",
      orderBtn: "Contact Us"
  },
  Arabic: {
    heroTitle: "اختبر تجربة الطعام الفاخر في فوديفاي",
    heroDesc: "مرحبًا بك في فوديفاي، حيث كل وجبة هي احتفال! استمتع بأطباق من إعداد الطهاة، وأجواء مريحة، وتوصيل سريع. اكتشف قائمتنا المتنوعة، العروض الخاصة، والخدمة الاستثنائية—كل ذلك من أجلك.",
    readMore: "اقرأ المزيد",
    specialsTitle: "معرض أطباق الشيف الخاصة",
    specials: ["طبق خاص 1", "طبق خاص 2", "طبق خاص 3", "طبق خاص 4"],
    heritageTitle: "الإرث والتقاليد",
    heritageDesc: "بدأت رحلة مطعمنا منذ عقود، متجذرة في شغف النكهات الأصيلة والضيافة الدافئة. من بدايات متواضعة إلى وجهة طهي مشهورة، بني إرثنا على التقاليد والابتكار والتميز. كل طبق يروي قصة—عن العائلة والثقافة وفرحة مشاركة الطعام الرائع.",
    heritageList: [
      "تأسس عام 1985، يخدم أجيالاً من عشاق الطعام",
      "مملوك ومدار عائليًا بفخر",
      "نحترم الوصفات التقليدية مع لمسة عصرية",
      "حاصلون على جوائز في الطعم والخدمة",
    ],
    heritageBtn: "اعرف المزيد",
    professionalsTitle: "تعرف على محترفينا",
    chef1: "غوردون رامزي",
    chef2: "دومينيك كرين",
    chef3: "أوغست إسكوفير",
    chefRole: "طاهٍ",
    eventsTitle: "الفعاليات الحية وليالي الطعام",
    musicNights: "ليالي الموسيقى",
    buffetThemes: "مواضيع البوفيه",
    eventsCardTitle: "أمسيات لا تُنسى",
    eventsCardDesc: "انضم إلينا في ليالي الموسيقى الحية، والبوفيهات ذات المواضيع، وتجارب الطعام الحصرية. تجمع فعالياتنا بين الطعام الرائع، والترفيه، والأجواء الحيوية لجميع الأعمار.",
    eventsList: [
      "عروض موسيقية حية أسبوعية",
      "مواضيع بوفيه متجددة",
      "ضيوف مميزون",
      "متعة لجميع أفراد العائلة",
    ],
    eventsBtn: "شاهد الفعاليات القادمة",
    ctaTitle: "احجز طاولتك أو اطلب عبر الإنترنت!",
    ctaDesc: "اختبر الطعام الفاخر، أطباق الشيف الخاصة، والأمسيات التي لا تُنسى في فوديفاي. احجز طاولتك لليلة مميزة أو اطلب أطباقك المفضلة للتوصيل. نحن هنا لإسعاد ذوقك—كل يوم!",
    reserveBtn: "احجز طاولة",
    orderBtn: "اطلب عبر الإنترنت",
  },
  Hebrew: {
    heroTitle: "חווית אוכל גורמה בפודיפיי",
    heroDesc: "ברוכים הבאים לפודיפיי, כאן כל ארוחה היא חגיגה! תהנו ממנות שף, אווירה נעימה ומשלוח מהיר. גלו את התפריט המגוון שלנו, מבצעים מיוחדים ושירות יוצא דופן—הכל בשבילכם.",
    readMore: "קרא עוד",
    specialsTitle: "גלריית מנות השף",
    specials: ["מנה מיוחדת 1", "מנה מיוחדת 2", "מנה מיוחדת 3", "מנה מיוחדת 4"],
    heritageTitle: "מורשת ומסורת",
    heritageDesc: "המסע של המסעדה שלנו החל לפני עשרות שנים, מתוך תשוקה לטעמים אותנטיים ואירוח חם. מהתחלה צנועה ליעד קולינרי נחשב, המורשת שלנו נבנתה על מסורת, חדשנות ומחויבות למצוינות. כל מנה מספרת סיפור—על משפחה, תרבות ושמחת השיתוף.",
    heritageList: [
      "נוסד ב-1985, משרת דורות של אוהבי אוכל",
      "בבעלות וניהול משפחתי בגאווה",
      "כיבוד מתכונים מסורתיים עם טוויסט מודרני",
      "מוכר למצוינות בטעם ובשירות",
    ],
    heritageBtn: "למידע נוסף",
    professionalsTitle: "הכירו את המקצוענים שלנו",
    chef1: "גורדון רמזי",
    chef2: "דומיניק קרן",
    chef3: "אוגוסט אסקופייה",
    chefRole: "שף",
    eventsTitle: "אירועים חיים ולילות אוכל",
    musicNights: "לילות מוזיקה",
    buffetThemes: "נושאי בופה",
    eventsCardTitle: "ערבים בלתי נשכחים",
    eventsCardDesc: "הצטרפו אלינו לערבי מוזיקה חיה, בופה נושאי וחוויות אוכל ייחודיות. האירועים שלנו משלבים אוכל נהדר, בידור ואווירה תוססת לכל הגילאים.",
    eventsList: [
      "הופעות מוזיקה חיה שבועיות",
      "נושאי בופה מתחלפים",
      "אורחים מיוחדים",
      "כיף לכל המשפחה",
    ],
    eventsBtn: "צפה באירועים הקרובים",
    ctaTitle: "הזמן שולחן או הזמן אונליין!",
    ctaDesc: "חווית אוכל גורמה, מנות שף וערבים בלתי נשכחים בפודיפיי. הזמינו שולחן לערב מיוחד או הזמינו את המנות האהובות עליכם למשלוח. אנחנו כאן כדי לפנק אתכם—כל יום!",
    reserveBtn: "הזמן שולחן",
    orderBtn: "הזמן אונליין",
  },
};

export default function Home2() {
  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };
  const chefRef = React.useRef(null);
  const navigate = useNavigate();
  // Determine RTL based on language
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const isRTL = language === 'Arabic';
  // Select translations for current language
  const t = translations[language] || translations['English'];

  // Scroll handler for Read More
  const handleReadMore = () => {
    if (chefRef.current) {
      chefRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // ...existing code...
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    // ...existing effect logic...
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
  <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          src={home2hero}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-6">{t.heroTitle}</h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">{t.heroDesc}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </section>

      {/* Specials Gallery Section */}
      <section className={`py-20 px-6 md:px-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#79BAEC]/20'} text-center`}>
        <h2 className="text-4xl font-bold text-[#79BAEC] mb-8">{t.specialsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.specials.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white bg-opacity-80 rounded-2xl shadow-lg p-8">
              <span className="text-lg font-semibold text-gray-900">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview Section - Redesigned */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8 text-center drop-shadow-lg">{t.heritageTitle}</h2>
        <p className="mb-10 text-lg text-blue-900 text-center max-w-2xl">{t.heritageDesc}</p>
        <div className="w-full max-w-3xl mx-auto">
          <ol className="relative border-l-4 border-blue-400">
            {t.heritageList.map((item, i) => (
              <li key={i} className="mb-10 ml-8 flex items-start relative">
                <span className="flex items-center justify-center w-10 h-10 bg-white border-4 border-blue-400 rounded-full shadow-lg absolute -left-5 text-blue-700 font-bold text-xl">{i + 1}</span>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 w-full">
                  <span className="text-lg font-semibold text-blue-800">{item}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meet Our Professionals Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#79BAEC]/20'}`} ref={chefRef}>
        <h2 className={`text-5xl md:text-6xl font-serif font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-[#79BAEC]'}`}>{t.professionalsTitle}</h2>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <img src={chef1} alt="Gordon Ramsay" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef1}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
          <div className="flex flex-col items-center relative">
            <img src={chef3} alt="Dominique Crenn" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
            </div>
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef2}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={chef2} alt="Auguste Escoffier" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef3}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
        </div>
      </section>

      {/* Live Events & Dining Nights Section */}
        {/* Tools & Technologies Section */}
        <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#79BAEC]/20'}`}>
          <div className="max-w-5xl w-full mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center ${theme === 'dark' ? 'text-white' : 'text-[#79BAEC]'}`}>Digital Marketing Tools & Platforms</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 py-8">
              {['Google Analytics', 'Meta Ads Manager', 'SEMrush', 'Ahrefs', 'Mailchimp', 'Hootsuite', 'Canva', 'Google Ads', 'HubSpot', 'Buffer'].map((tool, idx) => (
                <span key={idx} className={`text-lg font-semibold px-6 py-3 rounded-xl shadow bg-white ${theme === 'dark' ? 'text-[#79BAEC] bg-[#181818]' : 'text-[#79BAEC]'}`}>{tool}</span>
              ))}
            </div>
            <p className={`mt-8 text-center text-base md:text-lg ${theme === 'dark' ? 'text-[#79BAEC]' : 'text-[#79BAEC]'}`}>We leverage industry-leading digital marketing platforms for analytics, advertising, SEO, email campaigns, social media management, and creative design to deliver measurable results for your business.</p>
          </div>
        </section>
        {/* Our Impact Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center justify-center" style={{backgroundColor:'#FFF6F6'}}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color:'#222'}}>Our Impact</h2>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-4 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl md:text-4xl font-bold text-black">1091+</span>
            <div className="mt-2 text-base text-black">Businesses Helped</div>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-bold text-black">120+</span>
            <div className="mt-2 text-base text-black">Campaigns Launched</div>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-bold text-black">1074+</span>
            <div className="mt-2 text-base text-black">Projects Delivered</div>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-bold text-black">25+</span>
            <div className="mt-2 text-base text-black">Countries Served</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{color: '#79BAEC'}}>{t.ctaTitle}</h2>
          <p className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-[#79BAEC]' : 'text-[#79BAEC]'}`}>{t.ctaDesc}</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <button onClick={() => navigate('/contactus')} className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition" style={{backgroundColor:'#79BAEC'}}>{t.reserveBtn}</button>
            <button onClick={() => navigate('/contactus')} className={`px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition border ${theme === 'dark' ? 'text-[#79BAEC] bg-[#181818] border-[#79BAEC] hover:bg-[#222]' : 'text-[#79BAEC] bg-white border-[#79BAEC] hover:bg-[#79BAEC]/10'}`}>{t.orderBtn}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
