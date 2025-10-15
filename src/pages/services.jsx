import React, { useEffect, useState } from "react";
import servicehero from "../assets/v4.mov";
import { Link } from "react-router-dom";
import dealsImg from "../assets/deals.webp";
import ImpactSection from "../components/ImpactSection"; // adjust path


// Service images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";


const translations = {
  English: {
      heroTitle: "Our Digital Marketing Services",
      heroDesc: "From SEO and social media to PPC and content marketing — we help your business grow online with proven strategies.",
      readMore: "Read More",
      ongoingDeals: "Current Marketing Offers",
      deals: [
        "Free website audit for new clients.",
        "20% off your first SEO campaign.",
        "Buy one, get one free on social media ad management for the first month.",
        "Exclusive discounts for bulk PPC campaigns.",
        "Content marketing packages with extra blog posts included.",
        "Free consultation for all new business inquiries.",
        "Special rates for startups and small businesses.",
      ],
      exploreCategories: "Explore Our Services",
      exploreDesc1: "We offer a full suite of digital marketing solutions to help your brand reach, engage, and convert your ideal audience.",
      exploreDesc2: "Whether you need SEO, paid ads, social media, or creative content — our expert team delivers results tailored to your business goals.",
      contactTitle: "Ready to Grow Your Business?",
      contactDesc: "Have questions about digital marketing, campaign strategy, or our current offers? Our friendly team is here to help you with SEO, social media, PPC, and more. Reach out anytime — we’re excited to help your brand succeed!",
      letsDive: "Let's Get Started",
      categories: [
        { title: "SEO Optimization", desc: "Boost your website’s visibility and rankings on search engines." },
        { title: "Social Media Marketing", desc: "Engage your audience and grow your brand on all major platforms." },
        { title: "Pay-Per-Click (PPC)", desc: "Drive targeted traffic and maximize ROI with paid advertising." },
        { title: "Content Marketing", desc: "Build authority and trust with creative, high-quality content." },
      ],
      services: [
        {
          title: "SEO Optimization",
          desc: "Improve your website’s search engine rankings and attract organic traffic with our expert SEO strategies. We offer keyword research, on-page optimization, technical SEO, and link building to help your business stand out online.",
        },
        {
          title: "Social Media Marketing",
          desc: "Grow your brand and engage your audience with creative social media campaigns. We manage your profiles, create compelling content, and run targeted ads to increase followers and drive real results.",
        },
        {
          title: "Pay-Per-Click (PPC)",
          desc: "Maximize your advertising budget and reach your ideal customers with data-driven PPC campaigns. We handle Google Ads, Facebook Ads, and more to deliver measurable ROI and business growth.",
        },
        {
          title: "Content Marketing",
          desc: "Build trust and authority with high-quality content that resonates with your audience. Our team creates blogs, articles, videos, and graphics to boost engagement and support your marketing goals.",
        },
        {
          title: "Marketing Strategy & Consulting",
          desc: "Get expert guidance and a custom marketing plan tailored to your business. We analyze your market, set clear goals, and help you execute campaigns for long-term success.",
        },
        {
          title: "Branding & Creative Services",
          desc: "Elevate your brand with professional design, messaging, and creative assets. We help you stand out in a crowded market and connect with your audience on every channel.",
        },
      ],
  },
  Arabic: {
    heroTitle: "خدماتنا",
    heroDesc: "من التوصيل إلى باب المنزل إلى تناول الطعام الفاخر وخدمات التموين — لدينا كل احتياجاتك الغذائية.",
    readMore: "اقرأ المزيد",
    ongoingDeals: "العروض والخصومات الجارية",
    deals: [
      "خصم 20% على أول طلب توصيل.",
      "اشترِ واحدة واحصل على الأخرى مجانًا في وجبات نهاية الأسبوع المختارة.",
      "عروض عائلية خاصة بأسعار مخفضة.",
      "خصومات حصرية على التموين للطلبات الكبيرة.",
      "اشتراكات وجبات يومية مع توفير إضافي.",
      "حلوى مجانية مع كل طلب تناول طعام بقيمة أكثر من 999 روبية.",
      "ساعات السعادة: خصم إضافي 15% على الطلبات بين 3-5 مساءً.",
    ],
    exploreCategories: "استكشف فئاتنا",
    exploreDesc1: "مطعمنا مصمم لخدمة كل لحظة من يومك — من أول وجبة في الصباح إلى الرغبة في تناول الطعام ليلاً. تم اختيار كل فئة بعناية لتناسب نمط حياتك وتفضيلاتك.",
    exploreDesc2: "سواء كنت تبحث عن إفطار خفيف، أو غداء سريع في المكتب، أو عشاء عائلي دسم، أو شيئًا حلوًا لإنهاء يومك — لدينا كل شيء. يجمع طهاتنا بين المكونات الطازجة والنكهات الأصيلة لجعل كل لقمة لا تُنسى.",
    contactTitle: "جاهز للاستمتاع بوجبتك اللذيذة",
    contactDesc: "هل لديك أسئلة حول مطعمنا أو توصيل الطعام أو العروض الجارية؟ فريقنا الودود هنا لمساعدتك في الحجوزات، وحجوزات التموين، وطلبات الحفلات، وأي طلبات وجبات خاصة. تواصل معنا في أي وقت — يسعدنا خدمتك!",
    letsDive: "لنبدأ الآن",
    categories: [
      { title: "عروض الإفطار", desc: "ابدأ يومك بوجبات طازجة ومغذية ومليئة بالطاقة." },
      { title: "وجبات الغداء", desc: "وجبات متوازنة بمزيج مثالي من الطعم والتغذية." },
      { title: "ولائم العشاء", desc: "استمتع بأطباق شهية تجمع العائلات معًا." },
      { title: "الحلويات والمشروبات", desc: "حلويات لذيذة ومشروبات منعشة تكمل وجبتك." },
    ],
    services: [
      {
        title: "توصيل الطعام",
        desc: "وجبات سريعة وطازجة تُسلم إلى باب منزلك مع ضمان النظافة والطعم. نتعاون مع أفضل المطاعم والطهاة الموثوقين لضمان أن كل وجبة لذيذة وصحية ومعدة من أفضل المكونات. يضمن نظام التوصيل المتقدم لدينا وصول الطعام ساخنًا وطازجًا، مع الحفاظ على نكهته. سواء كان الإفطار أو الغداء أو العشاء أو الرغبة في تناول الطعام ليلاً، نحن هنا من أجلك. سريع وموثوق وبأسعار معقولة—توصيل الطعام لدينا يجعل حياتك أسهل وألذ كل يوم.",
      },
      {
        title: "خدمات التموين",
        desc: "حلول تموين لذيذة مصممة لحفلات الزفاف والمناسبات والحفلات والشركات من أي حجم. يقوم فريق التموين لدينا بإعداد قوائم طعام مخصصة لمناسبتك، ويقدم كل شيء من الوجبات الخفيفة إلى الوجبات الكاملة. نركز على العرض والطعم ورضا العملاء لترك انطباع دائم على ضيوفك. كل طبق يُعد بحب ونظافة وإبداع من قبل طهاتنا الخبراء. من التجمعات الصغيرة إلى الاحتفالات الكبرى، نتعامل مع جميع احتياجات التموين بعناية وتميز.",
      },
      {
        title: "تجربة تناول الطعام",
        desc: "ادخل إلى مطعمنا المريح واستمتع بتجربة طعام فاخرة لا مثيل لها. نجمع بين الديكورات الأنيقة والأجواء الترحيبية، مما يجعله مثاليًا للعائلات والأصدقاء أو الاجتماعات. يعد طهاتنا أطباقًا مميزة من مكونات موسمية طازجة لإرضاء ذوقك. يتم تقديم كل طاولة بعناية لضمان الراحة والرضا من البداية إلى النهاية. سواء كنت ترغب في وجبة عادية أو عشاء خاص، لدينا ما يناسب الجميع.",
      },
      {
        title: "طلبات الحفلات والوجبات الكبيرة",
        desc: "وجبات كبيرة مخصصة وبأسعار معقولة للحفلات والاحتفالات والتجمعات. مطبخنا مجهز للتعامل مع الطلبات الكبيرة دون المساس بالطعم أو الجودة. اختر من بين مجموعة واسعة من القوائم التي تشمل الوجبات الخفيفة والأطباق الرئيسية والحلويات لإرضاء جميع الضيوف. نقدم باقات مرنة تناسب ميزانيتك مع ضمان جودة الطعام. مع التوصيل في الوقت المناسب والنكهات اللذيذة، تضمن وجباتنا الكبيرة تجربة لا تُنسى لجميع ضيوفك.",
      },
      {
        title: "وجبات الاشتراك",
        desc: "خطط اشتراك وجبات صحية ولذيذة وبأسعار معقولة مصممة لنمط حياتك اليومي. يقدم اشتراكنا مجموعة متنوعة من الخيارات بما في ذلك الوجبات النباتية والبروتين العالي والوجبات المتوازنة. كل وجبة تُعد طازجة وبكميات مضبوطة لدعم أهدافك الصحية. نجعل تناول الطعام الصحي سهلاً من خلال توصيل الوجبات المغذية مباشرة إلى باب منزلك في الوقت المحدد. مع خطط مرنة وبدون تنازل عن الطعم، تساعدك خدمتنا على الحفاظ على روتين صحي بسهولة.",
      },
      {
        title: "الوجبات الجاهزة / الاستلام",
        desc: "خيارات وجبات جاهزة وسريعة للعملاء الذين يفضلون تناول وجباتهم أثناء التنقل. اطلب مسبقًا من خلال موقعنا أو التطبيق وتجنب الانتظار—سيكون طعامك جاهزًا ومعبأ. تضمن عبواتنا الحفاظ على الطعم والحرارة وعدم الانسكاب حتى تستمتع بوجبتك في أي مكان. سواء كنت في طريقك للعمل أو المنزل أو تخطط لنزهة سريعة، تناسب خدمتنا جدولك المزدحم. سريع وسهل ودائمًا لذيذ.",
      },
    ],
  },
  Hebrew: {
    heroTitle: "השירותים שלנו",
    heroDesc: "משלוח עד הבית, מסעדה יוקרתית וקייטרינג — כל הצרכים הקולינריים שלך במקום אחד.",
    readMore: "קרא עוד",
    ongoingDeals: "מבצעים והנחות שוטפות",
    deals: [
      "20% הנחה על הזמנת משלוח ראשונה.",
  "קנה אחד קבל אחד חינם בארוחות סופ\"ש נבחרות.",
      "חבילות משפחתיות מיוחדות במחירים מוזלים.",
      "הנחות קייטרינג בלעדיות להזמנות גדולות.",
      "מנויי ארוחות יומיות עם חיסכון נוסף.",
      "קינוח חינם בכל הזמנת מסעדה מעל 999 רופי.",
  "Happy Hours: 15% הנחה נוספת על הזמנות בין 3–5 אחה\"צ.",
    ],
    exploreCategories: "גלו את הקטגוריות שלנו",
    exploreDesc1: "המסעדה שלנו נועדה לשרת כל רגע ביום שלך — מהארוחה הראשונה בבוקר ועד החשק הלילי. כל קטגוריה נבחרה בקפידה כדי להתאים לאורח החיים וההעדפות שלך.",
    exploreDesc2: "בין אם אתם מחפשים ארוחת בוקר קלה, ארוחת צהריים מהירה, ארוחת ערב משפחתית עשירה או משהו מתוק לסיום היום — יש לנו הכל. השפים שלנו משלבים מרכיבים טריים עם טעמים אותנטיים כדי להפוך כל ביס לבלתי נשכח.",
    contactTitle: "מוכנים ליהנות מהארוחה הטעימה שלכם",
    contactDesc: "יש לכם שאלות על המסעדה, משלוחים או מבצעים? הצוות הידידותי שלנו כאן לעזור לכם בהזמנות, קייטרינג, הזמנות לאירועים וכל בקשה מיוחדת. פנו אלינו בכל עת — נשמח לשרת אתכם!",
    letsDive: "בואו נתחיל",
    categories: [
      { title: "ארוחות בוקר מיוחדות", desc: "התחילו את היום עם מנות טריות, מזינות ומלאות אנרגיה." },
      { title: "קומבינציות צהריים", desc: "ארוחות מאוזנות עם שילוב מושלם של טעם ותזונה." },
      { title: "סעודות ערב", desc: "תיהנו ממנות עשירות שמקרבות משפחות יחד." },
      { title: "קינוחים ומשקאות", desc: "מתוקים ומשקאות מרעננים להשלמת הארוחה." },
    ],
    services: [
      {
        title: "משלוח אוכל",
        desc: "מנות מהירות וטריות עד הבית עם הבטחת היגיינה וטעם. אנו משתפים פעולה עם מסעדות מובילות ושפים אמינים כדי להבטיח שכל מנה טעימה, בריאה ומוכנה מהמרכיבים הטובים ביותר. מערכת המשלוחים המתקדמת שלנו מבטיחה שהאוכל יגיע חם וטרי, תוך שמירה על טעמו. בין אם זה בוקר, צהריים, ערב או חשק לילי, אנחנו כאן בשבילכם. מהיר, אמין ומשתלם—המשלוחים שלנו הופכים את החיים שלכם לקלים וטעימים יותר כל יום.",
      },
      {
        title: "שירותי קייטרינג",
        desc: "פתרונות קייטרינג טעימים לאירועים, חתונות וחברות בכל גודל. צוות הקייטרינג שלנו בונה תפריטים מותאמים אישית, ומציע הכל מחטיפים קלים ועד ארוחות מלאות. אנו שמים דגש על הגשה, טעם ושביעות רצון הלקוח כדי להשאיר רושם מתמשך. כל מנה מוכנה באהבה, היגיינה ויצירתיות על ידי השפים המומחים שלנו. מהתכנסויות קטנות ועד חגיגות גדולות, אנו מטפלים בכל צרכי הקייטרינג במקצועיות.",
      },
      {
        title: "חווית מסעדה",
        desc: "היכנסו למסעדה הנעימה שלנו ותיהנו מחוויית אוכל יוקרתית שאין כמותה. אנו משלבים עיצוב אלגנטי עם אווירה מזמינה, מושלם למשפחות, חברים או פגישות עסקיות. השפים שלנו מכינים מנות ייחודיות ממרכיבים עונתיים טריים כדי לפנק את החיך שלכם. כל שולחן מקבל תשומת לב אישית, להבטחת נוחות ושביעות רצון מההתחלה ועד הסוף. בין אם תרצו ארוחה רגילה או ערב מיוחד, יש לנו משהו לכולם.",
      },
      {
        title: "הזמנות לאירועים וארוחות בכמות גדולה",
        desc: "ארוחות בכמות גדולה במחיר משתלם ומותאם לאירועים, חגיגות וחברות. המטבח שלנו ערוך לטפל בהזמנות גדולות מבלי להתפשר על טעם או איכות. בחרו מתוך מגוון תפריטים הכוללים חטיפים, עיקריות וקינוחים לכל אורח. אנו מציעים חבילות גמישות המתאימות לתקציבכם תוך שמירה על איכות גבוהה. עם משלוח בזמן וטעמים נהדרים, הארוחות שלנו מבטיחות חוויה בלתי נשכחת לכל האורחים.",
      },
      {
        title: "ארוחות מנוי",
        desc: "תוכניות מנוי לארוחות בריאות, טעימות ומשתלמות המותאמות לאורח החיים שלכם. המנוי שלנו מציע מגוון אפשרויות כולל מנות צמחוניות, עתירות חלבון ומאוזנות. כל מנה מוכנה טרייה ובכמות מדודה כדי לתמוך ביעדי הבריאות שלכם. אנו הופכים את האכילה הבריאה לנוחה עם משלוח ישיר עד הבית בזמן. עם תוכניות גמישות וללא פשרות בטעם, השירות שלנו עוזר לכם לשמור על שגרה בריאה בקלות.",
      },
      {
        title: "טייק אווי / איסוף",
        desc: "אפשרויות טייק אווי מהירות ונוחות ללקוחות שמעדיפים לקחת את האוכל לדרך. הזמינו מראש באתר או באפליקציה ודלגו על ההמתנה—האוכל שלכם יהיה מוכן וארוז. האריזות שלנו שומרות על טריות, חום ומניעת נזילות כדי שתיהנו מהארוחה בכל מקום. בין אם אתם ממהרים לעבודה, בדרך הביתה או מתכננים יציאה מהירה, השירות שלנו מתאים ללוח הזמנים שלכם. מהיר, קל ותמיד טעים.",
      },
    ],
  },
};





const serviceImgs = [img1, img2, img3, img4, img5, img6];
const servicePaths = [
  "/Food-Delivery",
  "/Catering-Services",
  "/Dine-In-Experience",
  "/PartyOrders-BulkMeals",
  "/Subscription-Meals",
  "/Takeaway-Pickup",
];



const ServicesPage = () => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
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
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
  <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={servicehero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-black bg-opacity-50'}`}></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Services Section */}
  <section className="max-w-6xl mx-auto py-16 px-4 space-y-16">
        {t.services.map((service, index) => (
          <div key={index} className="flex flex-row items-center gap-8 py-8">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
              <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32H56M56 32L40 16M56 32L40 48" stroke="#79BAEC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{color:'#222', fontFamily:'inherit'}}>{service.title}</h3>
              <p className="text-base md:text-lg mb-2" style={{color:'#222', fontWeight:400}}>{service.desc}</p>
              <div className="w-full border-b border-[#79BAEC] mt-2 mb-2"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Ongoing Deals Section */}
      <section className={`max-w-6xl mx-auto py-16 px-4 ${theme === 'dark' ? 'bg-black' : ''}`}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={dealsImg}
              alt="Ongoing Deals"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#79BAEC'}}>{t.ongoingDeals}</h2>
            <ul className={`list-disc list-inside text-lg space-y-3 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.deals.map((deal, i) => <li key={i}>{deal}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
  <section className={`max-w-full mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#79BAEC]/20'}`}>
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color:'#79BAEC'}}>{t.exploreCategories}</h2>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc1}</p>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc2}</p>
        </div>
        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">
          {t.categories.map((cat, index) => (
            <div
              key={index}
              className={`border shadow-md rounded-xl p-6 text-center ${theme === 'dark' ? 'bg-black border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <h3 className="text-lg font-semibold mb-2" style={{color:'#79BAEC'}}>
                {cat.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* What Makes Us Different Section */}
            <section className="w-full py-16 px-4 flex flex-col items-center justify-center" style={{backgroundColor:'#E6F2FB'}}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{color:'#79BAEC'}}>
                What Makes Us Different — Your Unique Selling Points
              </h2>
              <div className="max-w-3xl w-full mx-auto flex flex-col gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center font-semibold text-black text-lg">
                  Proven Results: Our campaigns deliver measurable growth and ROI for businesses of all sizes.
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center font-semibold text-black text-lg">
                  Data-Driven Strategies: We use analytics and insights to optimize every campaign for maximum impact.
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center font-semibold text-black text-lg">
                  Creative Solutions: Innovative marketing ideas tailored to your brand.
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center font-semibold text-black text-lg">
                  Dedicated Support: Transparent reporting and ongoing client care.
                </div>
              </div>
            </section>

      {/* Contact Section */}
      <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color:'#79BAEC'}}>{t.contactTitle}</h2>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.contactDesc}</p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md transition"
            style={{backgroundColor:'#79BAEC'}}
          >
            {t.letsDive}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
