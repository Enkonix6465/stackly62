import React, { useState } from "react";
import foodhero from "../assets/foodhero.mp4";
import serviceImg from "../assets/food1.webp"; // Replace with your service image
import food from "../assets/food2.webp"; // <-- Import your image
import food3 from "../assets/food3.jpg"; // Replace with your call to action image

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const translations = {
  en: {
    heroTitle: "SEO Optimization Services",
    heroDesc: "Boost your website’s visibility and rankings with expert SEO strategies. Drive organic traffic, increase conversions, and grow your business online.",
    aboutTitle: "About Our SEO Service",
    about: [
      "Our SEO optimization service helps your website rank higher on search engines and attract more organic visitors.",
      "We provide comprehensive keyword research, on-page and technical SEO, and high-quality link building to maximize your results.",
      "Our team uses the latest tools and proven techniques to ensure your site is optimized for Google and other search engines.",
      "Track your progress with transparent monthly reports and analytics. We focus on measurable growth and long-term success.",
      "Flexible plans and custom strategies are available for businesses of all sizes. Get started and see real improvements in your search rankings!"
    ],
    pricingTitle: "SEO Plans",
    pricingDesc: "Choose an SEO plan that fits your business needs. Upgrade anytime — no hidden fees!",
    plans: [
      {
        name: "Starter SEO",
        price: "$99",
        period: "/month",
        features: ["Basic keyword research", "On-page optimization", "Monthly reporting"],
        highlighted: false,
      },
      {
        name: "Growth SEO",
        price: "$299",
        period: "/month",
        features: ["Advanced keyword strategy", "Technical SEO", "Link building", "Bi-weekly analytics"],
        highlighted: true,
      },
      {
        name: "Premium SEO",
        price: "$499",
        period: "/month",
        features: ["Full-service SEO", "Content optimization", "Dedicated SEO manager", "Custom strategy"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "Sarah Johnson", role: "Marketing Manager", text: "Our website traffic doubled in three months thanks to their SEO expertise. Highly recommended!" },
      { name: "Michael Lee", role: "Business Owner", text: "The SEO campaign brought us new leads every week. Great team and great results." },
      { name: "Emily Davis", role: "Startup Founder", text: "Affordable and effective! I love the transparent reporting and real-time ranking improvements." },
      { name: "David Wilson", role: "E-commerce Director", text: "Best SEO agency experience I've had. Excellent support and creative strategies." },
      { name: "Olivia Martinez", role: "Designer", text: "Our site’s Google ranking improved fast. The technical SEO and content updates made a big difference!" },
    ],
    testimonialsTitle: "What Our SEO Clients Say",
    howItWorksTitle: "How SEO Works",
    howItWorksDesc: "Getting results with SEO is simple and effective.",
    steps: [
      { title: "Site Audit & Research", description: "We analyze your website and research the best keywords for your business." },
      { title: "On-Page & Technical SEO", description: "We optimize your site structure, content, and technical elements for search engines." },
      { title: "Link Building & Outreach", description: "We build high-quality backlinks and promote your site for better authority." },
      { title: "Track & Grow", description: "Monitor rankings and traffic with monthly reports and analytics." },
    ],
    ctaTitle: "Ready to Boost Your Rankings?",
    ctaDesc: "Contact us now and get your SEO campaign started <br /> fast, effective, and with real results. See the difference today!",
    ctaBtn: "Get Started",
  },
  ar: {
    heroTitle: "طعام لذيذ يُوصَل بسرعة",
    heroDesc: "استمتع بوجبات ساخنة وطازجة ولذيذة إلى باب منزلك – توصيل سريع، مطابخ متنوعة، وعروض لا تُضاهى خصيصًا لك!",
    aboutTitle: "عن خدمتنا",
    about: [
      "خدمة توصيل الطعام لدينا تضمن حصولك على وجبات طازجة ولذيذة إلى باب منزلك في وقت قياسي. نتعاون مع أفضل المطاعم والطهاة لنقدم لك مجموعة واسعة من المطابخ.",
      "سواء كان غداء سريعًا، عشاء عائليًا، أو احتفالًا خاصًا، نضمن الجودة والنظافة والرضا مع كل طلب.",
      "نختار بعناية أفضل المكونات ونعد الوجبات بأقصى درجات العناية للحفاظ على الطزاجة والنكهة. كل طلب يُعالج بمعايير نظافة صارمة.",
      "منصتنا تجعل الطلب سهلاً ومريحًا – اختر أطباقك المفضلة، خصصها حسب رغبتك، وتابع التوصيل في الوقت الفعلي.",
      "نقدم أيضًا خطط اشتراك مرنة، وخدمات تموين للمناسبات، وخصومات خاصة للطلبات الكبيرة، لنضمن وجود ما يناسب الجميع."
    ],
    pricingTitle: "أسعارنا",
    pricingDesc: "اختر الخطة التي تناسب شهيتك. يمكنك الترقية في أي وقت – بدون رسوم خفية!",
    plans: [
      {
        name: "مبتدئ",
        price: "$9",
        period: "/شهر",
        features: ["وجبة واحدة يوميًا", "توصيل مجاني للطلبات فوق $20", "دعم أساسي"],
        highlighted: false,
      },
      {
        name: "عادي",
        price: "$19",
        period: "/شهر",
        features: ["وجبتان يوميًا", "توصيل أولوية", "قسائم خصم"],
        highlighted: true,
      },
      {
        name: "مميز",
        price: "$29",
        period: "/شهر",
        features: ["وجبات غير محدودة", "توصيل مجاني دائمًا", "دعم مميز"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "سارة جونسون", role: "مدونة طعام", text: "كان التوصيل سريعًا جدًا والطعام لذيذ للغاية! أنصح بهذه الخدمة بشدة." },
      { name: "مايكل لي", role: "طاهٍ", text: "أعجبني مدى طزاجة كل شيء. بالتأكيد خياري الأول لرغبات منتصف الليل." },
      { name: "إميلي ديفيس", role: "طالبة", text: "سعر مناسب وطعم رائع! أحب أنني أستطيع تتبع طلبي في الوقت الفعلي." },
      { name: "ديفيد ويلسون", role: "محلل أعمال", text: "أفضل تجربة توصيل مطاعم حصلت عليها. دعم العملاء ممتاز أيضًا." },
      { name: "أوليفيا مارتينيز", role: "مصممة", text: "الوجبات تصل دائمًا ساخنة ومعبأة بعناية. مثالية لأيام العمل المزدحمة." },
    ],
    testimonialsTitle: "ماذا يقول عملاؤنا",
    howItWorksTitle: "كيف تعمل الخدمة",
    howItWorksDesc: "طلب الطعام اللذيذ من مطعمك المفضل سهل وسريع.",
    steps: [
      { title: "اختر وجبتك", description: "تصفح قائمتنا واختر أطباقك المفضلة بسرعة." },
      { title: "أكمل الطلب", description: "أضف الوجبات إلى السلة، خصص الخيارات، وأكمل الدفع بأمان." },
      { title: "توصيل سريع", description: "تابع طلبك في الوقت الفعلي حتى يصلك طازجًا وساخنًا." },
      { title: "استمتع بوجبتك", description: "وجبات لذيذة تُوصَل إلى بابك مع رضا تام." },
    ],
    ctaTitle: "جاهز للطلب؟",
    ctaDesc: "اطلب الآن واحصل على وجباتك المفضلة <br /> طازجة، ساخنة، وفي وقت قياسي. جرب الفرق اليوم!",
    ctaBtn: "اطلب الآن",
  },
  he: {
    heroTitle: "אוכל טעים מגיע במהירות",
    heroDesc: "תיהנו מארוחות חמות, טריות וטעימות עד הבית – משלוח מהיר, מטבחים מגוונים ומבצעים בלעדיים במיוחד בשבילכם!",
    aboutTitle: "על השירות שלנו",
    about: [
      "שירות המשלוחים שלנו מבטיח שתקבלו ארוחות טריות וטעימות עד הבית בזמן שיא. אנו משתפים פעולה עם מסעדות ושפים מובילים כדי להביא לכם מגוון רחב של מטבחים.",
      "בין אם זה ארוחת צהריים מהירה, ארוחת ערב משפחתית או חגיגה מיוחדת, אנו מבטיחים איכות, היגיינה ושביעות רצון בכל הזמנה.",
      "אנו בוחרים בקפידה את המרכיבים הטובים ביותר ומבשלים את המנות בדאגה מרבית לשמירה על טריות וטעם. כל הזמנה מטופלת בסטנדרטים מחמירים של ניקיון.",
      "הפלטפורמה שלנו הופכת את ההזמנה לפשוטה ונוחה – בחרו את המנות האהובות, התאימו אותן לטעמכם, ועקבו אחרי המשלוח בזמן אמת.",
      "אנו מציעים גם מסלולי מנוי גמישים, שירותי קייטרינג לאירועים, והנחות מיוחדות להזמנות גדולות – כך שיש משהו לכל אחד."
    ],
    pricingTitle: "המחירים שלנו",
    pricingDesc: "בחרו מסלול שמתאים לתיאבון שלכם. אפשר לשדרג בכל עת – ללא עמלות נסתרות!",
    plans: [
      {
        name: "מתחיל",
        price: "$9",
        period: "/חודש",
        features: ["ארוחה אחת ביום", "משלוח חינם מעל $20", "תמיכה בסיסית"],
        highlighted: false,
      },
      {
        name: "רגיל",
        price: "$19",
        period: "/חודש",
        features: ["2 ארוחות ביום", "משלוח בעדיפות", "קופוני הנחה"],
        highlighted: true,
      },
      {
        name: "פרימיום",
        price: "$29",
        period: "/חודש",
        features: ["ארוחות ללא הגבלה", "משלוח חינם תמיד", "תמיכה פרימיום"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "שרה ג'ונסון", role: "בלוגרית אוכל", text: "המשלוח היה מהיר במיוחד והאוכל היה טעים מאוד! ממליצה בחום על השירות." },
      { name: "מייקל לי", role: "שף", text: "התרשמתי מהטריות של הכל. בהחלט הבחירה שלי ללילות רעב." },
      { name: "אמילי דיוויס", role: "סטודנטית", text: "מחיר משתלם וטעם נהדר! אוהבת שאפשר לעקוב אחרי ההזמנה בזמן אמת." },
      { name: "דוד וילסון", role: "אנליסט עסקי", text: "חווית משלוח המסעדות הכי טובה שהייתה לי. גם שירות הלקוחות מצוין." },
      { name: "אוליביה מרטינז", role: "מעצבת", text: "הארוחות תמיד מגיעות חמות וארוזות בקפידה. מושלם לימי עבודה עמוסים." },
    ],
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    howItWorksTitle: "איך זה עובד",
    howItWorksDesc: "להזמין אוכל טעים מהמסעדה האהובה עליכם זה פשוט ומהיר.",
    steps: [
      { title: "בחרו מנה", description: "עיינו בתפריט ובחרו את המנות האהובות עליכם במהירות." },
      { title: "בצעו הזמנה", description: "הוסיפו מנות לעגלה, התאימו אפשרויות ושלמו בבטחה." },
      { title: "משלוח מהיר", description: "עקבו אחרי ההזמנה בזמן אמת עד שהיא מגיעה חמה וטרייה." },
      { title: "תיהנו מהאוכל", description: "ארוחות טעימות מגיעות עד הבית עם שביעות רצון מלאה." },
    ],
    ctaTitle: "מוכנים להזמין?",
    ctaDesc: "הזמינו עכשיו וקבלו את המנות האהובות עליכם <br /> טריות, חמות ובזמן שיא. תטעמו את ההבדל כבר היום!",
    ctaBtn: "הזמינו עכשיו",
  },
};


const stepIcons = [
  <FaUtensils size={28} className="text-white" />,
  <FaShoppingCart size={28} className="text-white" />,
  <FaTruck size={28} className="text-white" />,
  <FaSmile size={28} className="text-white" />,
];
// ...plans now in translations


const FoodDeliveryHero = () => {
  // Sync language with global selection in Header
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const selected = localStorage.getItem('selectedLanguage') || 'English';
      const langMap = { English: 'en', Arabic: 'ar', Hebrew: 'he', en: 'en', ar: 'ar', he: 'he' };
      return langMap[selected] || 'en';
    }
    return 'en';
  });
  // Listen for language changes from Header
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLanguageChangeEvent = () => {
        const selected = localStorage.getItem('selectedLanguage') || 'English';
        const langMap = { English: 'en', Arabic: 'ar', Hebrew: 'he', en: 'en', ar: 'ar', he: 'he' };
        setLanguage(langMap[selected] || 'en');
      };
      window.addEventListener('language-changed', handleLanguageChangeEvent);
      window.addEventListener('storage', handleLanguageChangeEvent);
      return () => {
        window.removeEventListener('language-changed', handleLanguageChangeEvent);
        window.removeEventListener('storage', handleLanguageChangeEvent);
      };
    }
  }, []);
  const [theme, setTheme] = useState('light');
  // State for current testimonial index
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  // Handlers for testimonial navigation
  const testimonials = translations[language].testimonials;
  const testimonial = testimonials[testimonialIndex];
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  // Set text direction based on language
  const dir = (language === 'ar' || language === 'he') ? 'rtl' : 'ltr';

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);

      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };

      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);

      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);

      };
    }
  }, []);

  // Default background for main section
  const sectionBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';

  // Default background for alternate sections
  const sectionAltBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white';

  // Background for pricing section
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50';

  // Default background for testimonial cards
  const cardBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';

  return (
  <div dir={dir} className={sectionBg}>
       
      {/* Hero Section */}
  <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={foodhero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl font-bold text-white md:text-7xl drop-shadow-lg" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
            {translations[language].heroTitle}
          </h1>
          <p className="max-w-2xl mt-6 text-lg text-gray-200 md:text-2xl" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

      {/* About Our Service Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Image - balanced height */}
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <img
              src={serviceImg}
              alt="Our Service"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover shadow-lg rounded-2xl"
            />
          </div>

          {/* Right Content - balanced height */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify">
            <h2 className="mb-6 text-4xl font-bold" style={Object.assign({color:'#79BAEC'}, dir === 'rtl' ? { textAlign: 'right' } : {})}>
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p className="mb-4 " key={i} style={dir === 'rtl' ? { textAlign: 'right' } : {}}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="how-it-works">
  <h2 className="mb-4 text-4xl font-bold" style={Object.assign({color:'#79BAEC'}, dir === 'rtl' ? { textAlign: 'right' } : {})}>{translations[language].howItWorksTitle}</h2>
  <p className="max-w-2xl mx-auto mb-12 text-black" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
          {translations[language].howItWorksDesc}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {translations[language].steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md" style={{backgroundColor:'#79BAEC'}}>{stepIcons[index]}</div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-black">{step.description}</p>
              </div>
              {index < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className="mx-6 hidden md:block text-gray-400 dark:text-white" />
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}> 
        <div className="grid items-center max-w-6xl gap-8 mx-auto md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
              {translations[language].testimonialsTitle}
            </h2>
            <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
              <p className="mb-6 text-lg italic" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm" style={{color:'#79BAEC'}}>{testimonial.role}</p>
            </div>
            <div className="flex justify-center gap-4 mt-6 md:justify-start">
              <button onClick={prevTestimonial} className="p-3 text-white transition rounded-full" style={{backgroundColor:'#79BAEC'}}><FaArrowLeft /></button>
              <button onClick={nextTestimonial} className="p-3 text-white transition rounded-full" style={{backgroundColor:'#79BAEC'}}><FaArrowRight /></button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={food} alt="Delicious food" className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
  <h2 className="mb-4 text-4xl font-bold" style={Object.assign({color:'#79BAEC'}, dir === 'rtl' ? { textAlign: 'right' } : {})}>{translations[language].pricingTitle}</h2>
        <p className="max-w-2xl mx-auto mb-12" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
          {translations[language].pricingDesc}
        </p>
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
          {translations[language].plans.map((plan, index) => (
            <div
              key={index}
              className={
                `flex flex-col items-center rounded-2xl p-8 shadow-lg border ` +
                (plan.highlighted
                  ? 'text-white scale-105' // Remove bg-red-500
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white')
              }
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-2 text-4xl font-extrabold">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
              <button
                className={
                  plan.highlighted
                    ? "px-6 py-3 rounded-full font-semibold transition bg-white" // Remove text-red-500
                    : "px-6 py-3 rounded-full font-semibold transition text-white" // Remove bg-red-500
                }
                style={plan.highlighted ? {color:'#79BAEC'} : {backgroundColor:'#79BAEC'}}
              >
                {language === 'ar' ? 'ابدأ الآن' : language === 'he' ? 'התחל עכשיו' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>
 

      {/* Call to Action Section */}
      <section className="relative px-6 py-24 text-white md:px-20">
        <img src={food3} alt="Delicious food" className="absolute inset-0 z-0 object-cover w-full h-full" />
  <div className="absolute inset-0 z-0" style={{backgroundColor:'#79BAEC',opacity:0.7}}></div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-5xl font-extrabold" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>{translations[language].ctaTitle}</h2>
          <p className="mb-8 text-lg leading-relaxed md:text-xl" style={dir === 'rtl' ? { textAlign: 'right' } : {}} dangerouslySetInnerHTML={{ __html: translations[language].ctaDesc }} />
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 text-lg font-semibold text-black transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default FoodDeliveryHero;