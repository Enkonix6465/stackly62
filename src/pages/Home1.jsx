import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RestaurantFooter from "../components/Footer";
import home1hero from "../assets/v1.mp4";
import home1about from "../assets/home1about.mp4";
import menu1 from "../assets/seo.jpg";
import menu2 from "../assets/social.jpg";
import menu3 from "../assets/ppc.jpg";
import menu4 from "../assets/content.png";


const translations = {
  English: {
     heroTitle: "Grow Your Business\nWith Digital Marketing",
     heroDesc: "Unlock your brand's potential with expert SEO, social media, and targeted campaigns. Reach your audience and drive real results with our digital marketing solutions.",
    readMore: "Read More",
    findMenu: "Find Menu",
      aboutTitle: "Discover the Digital Marketing Experience",
      aboutDesc: "Transform your business with our cutting-edge digital marketing solutions. We specialize in SEO, social media management, PPC campaigns, and content creation to help you reach, engage, and convert your ideal audience.",
      aboutList: [
        "Expert SEO strategies for top rankings",
        "Engaging social media campaigns",
        "High-converting PPC advertising",
        "Creative content and branding",
      ],
      aboutBtn: "Learn More",
      menuTitle: "OUR SERVICES",
      menu1: "SEO Optimization",
      menu2: "Social Media Marketing",
      menu3: "Pay-Per-Click (PPC)",
      menu4: "Content Marketing",
      whyChooseUs: "Why Choose Us",
      why1: "Proven Results",
      why1desc: "Our campaigns deliver measurable growth and ROI for businesses of all sizes.",
      why2: "Expert Team",
      why2desc: "Work with certified digital marketing professionals who stay ahead of industry trends.",
      why3: "Data-Driven Strategies",
      why3desc: "We use analytics and insights to optimize every campaign for maximum impact.",
    clientsSay: "What Our Clients Say",
      client1: "Our website traffic doubled in three months thanks to their SEO expertise. Highly recommended for digital marketing!",
      client2: "The social media campaigns brought us new customers every week. The team is creative and results-driven.",
      client3: "Their PPC management helped us lower ad costs and increase conversions. Fantastic digital marketing partner!",
    readyGrow: "Ready to Grow with Social Media?",
    readyDesc: "Let our experts help you build your brand, engage your audience, and drive results through social media. Contact us today for a free consultation!",
    getStarted: "Get Started",
  },
  Arabic: {
  heroTitle: "نمِّ عملك مع التسويق الرقمي",
  heroDesc: "اكتشف إمكانيات علامتك التجارية مع خبراء تحسين محركات البحث، وسائل التواصل الاجتماعي، والحملات المستهدفة. تواصل مع جمهورك وحقق نتائج حقيقية مع حلولنا للتسويق الرقمي.",
    readMore: "اقرأ المزيد",
    findMenu: "اعثر على القائمة",
    aboutTitle: "اكتشف تجربة التسويق الرقمي",
    aboutDesc: "حوّل عملك مع حلولنا المتقدمة في التسويق الرقمي. نحن متخصصون في تحسين محركات البحث، إدارة وسائل التواصل الاجتماعي، الحملات المدفوعة، وإنشاء المحتوى لمساعدتك في الوصول لجمهورك المثالي وتحقيق نتائج ملموسة.",
    aboutList: [
      "استراتيجيات تحسين محركات البحث الاحترافية",
      "حملات تواصل اجتماعي فعّالة",
      "إعلانات مدفوعة عالية التحويل",
      "محتوى إبداعي وبناء العلامة",
    ],
    aboutBtn: "اعرف المزيد",
      menuTitle: "خدماتنا",
      menu1: "تحسين محركات البحث",
      menu2: "تسويق عبر التواصل الاجتماعي",
      menu3: "إعلانات الدفع مقابل النقرة",
      menu4: "تسويق المحتوى",
    whyChooseUs: "لماذا نحن",
    why1: "مكونات طازجة",
    why1desc: "نستخدم فقط أجود وأطازج المكونات في كل طبق لنكهة وقيمة غذائية لا مثيل لها.",
    why2: "طهاة ماهرون",
    why2desc: "طهاتنا محترفون شغوفون، يكرسون أنفسهم لتقديم تجارب طعام لا تُنسى في كل مرة.",
    why3: "مأكولات نباتية",
    why3desc: "نقدم مجموعة متنوعة من الخيارات النباتية اللذيذة لإرضاء جميع الأذواق.",
    whyChooseUs: "لماذا نحن",
    why1: "نتائج مثبتة",
    why1desc: "حملاتنا تحقق نموًا ملموسًا وعائد استثمار لجميع أنواع الأعمال.",
    why2: "فريق خبراء",
    why2desc: "اعمل مع محترفين معتمدين في التسويق الرقمي يواكبون أحدث الاتجاهات.",
    why3: "استراتيجيات قائمة على البيانات",
    why3desc: "نستخدم التحليلات والرؤى لتحسين كل حملة لتحقيق أقصى تأثير.",
    clientsSay: "ماذا يقول عملاؤنا",
    client1: "أفضل مطعم هندي في أمستردام إن لم يكن في هولندا. جرب دجاج الزبدة!",
    client2: "أحببت الخيارات النباتية! كان الموظفون ودودين للغاية والأجواء رائعة.",
    client3: "مكان رائع لعشاء العائلة. البرياني كان لذيذاً والحلويات مذهلة!",
    readyGrow: "جاهز للنمو مع وسائل التواصل الاجتماعي؟",
    readyDesc: "دع خبراءنا يساعدونك في بناء علامتك التجارية وجذب جمهورك وتحقيق النتائج من خلال وسائل التواصل الاجتماعي. اتصل بنا اليوم لاستشارة مجانية!",
    getStarted: "ابدأ الآن",
  },
  Hebrew: {
  heroTitle: "צמיחה לעסק שלך עם שיווק דיגיטלי",
  heroDesc: "ממשו את הפוטנציאל של המותג שלכם עם מומחי SEO, מדיה חברתית וקמפיינים ממוקדים. הגיעו לקהל שלכם והשיגו תוצאות אמיתיות עם פתרונות השיווק הדיגיטלי שלנו.",
    readMore: "קרא עוד",
    findMenu: "מצא תפריט",
    aboutTitle: "גלה את חווית השיווק הדיגיטלי",
    aboutDesc: "הפוך את העסק שלך עם פתרונות שיווק דיגיטלי מתקדמים. אנו מתמחים ב-SEO, ניהול מדיה חברתית, קמפיינים ממומנים ויצירת תוכן כדי לעזור לך להגיע, למשוך ולהמיר את הקהל האידיאלי שלך.",
    aboutList: [
      "אסטרטגיות SEO מקצועיות לדירוג גבוה",
      "קמפיינים מרתקים במדיה חברתית",
      "פרסום ממומן ממיר במיוחד",
      "תוכן יצירתי ומיתוג",
    ],
    aboutBtn: "למידע נוסף",
      menuTitle: "השירותים שלנו",
      menu1: "קידום אתרים (SEO)",
      menu2: "שיווק במדיה חברתית",
      menu3: "קמפיינים ממומנים (PPC)",
      menu4: "שיווק תוכן",
    whyChooseUs: "למה לבחור בנו",
    why1: "מרכיבים טריים",
    why1desc: "אנו משתמשים רק במרכיבים הטריים והאיכותיים ביותר בכל מנה לטעם ותזונה ללא תחרות.",
    why2: "שפים מיומנים",
    why2desc: "השפים שלנו הם מקצוענים נלהבים, המוקדשים ליצירת חוויות אוכל בלתי נשכחות בכל פעם.",
    why3: "מטבח טבעוני",
    why3desc: "אנו מציעים מגוון אפשרויות טבעוניות טעימות, שנוצרו כדי לרצות כל חיך.",
    whyChooseUs: "למה לבחור בנו",
    why1: "תוצאות מוכחות",
    why1desc: "הקמפיינים שלנו מספקים צמיחה מדידה ותשואה לעסקים בכל הגדלים.",
    why2: "צוות מומחים",
    why2desc: "עבדו עם אנשי מקצוע מוסמכים בשיווק דיגיטלי שמובילים את המגמות.",
    why3: "אסטרטגיות מבוססות נתונים",
    why3desc: "אנו משתמשים בניתוחים ותובנות כדי למקסם את ההשפעה של כל קמפיין.",
    clientsSay: "מה הלקוחות שלנו אומרים",
    client1: "המקום ההודי הכי טוב באמסטרדם אם לא בהולנד. קחו את עוף החמאה!",
    client2: "אהבתי את האפשרויות הטבעוניות! הצוות היה מאוד ידידותי והאווירה הייתה נהדרת.",
    client3: "מקום נהדר לארוחות משפחתיות. הביריאני היה טעים והקינוחים היו מדהימים!",
    readyGrow: "מוכן לצמוח עם מדיה חברתית?",
    readyDesc: "תנו למומחים שלנו לעזור לכם לבנות את המותג שלכם, למשוך קהל ולהשיג תוצאות דרך מדיה חברתית. צרו קשר היום לייעוץ חינם!",
    getStarted: "התחל עכשיו",
  },
};

export default function Home1() {
  const navigate = useNavigate();
  // Ref for Discover section
  const discoverRef = React.useRef(null);
  // Ref for Explore Menu section
  const menuRef = React.useRef(null);

  // Scroll handler for Read More
  const handleReadMore = () => {
    if (discoverRef.current) {
      discoverRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Scroll handler for Find Menu
  const handleFindMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
      <section className={`relative flex flex-col items-center justify-center h-[93vh] w-full overflow-hidden ${theme === 'dark' ? 'bg-black' : ''}`}>
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={home1hero}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay with less opacity for more brightness */}
        <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/40'}`} />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className={`text-5xl md:text-6xl font-serif font-bold text-center mb-4 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <div className="flex gap-6">
            <button onClick={handleReadMore} className={`relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition ${theme === 'dark' ? '' : ''}`}>
              {t.readMore}
              <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
            </button>
          </div>
        </div>
      </section>
      {/* About/Feature Section */}
  <section ref={discoverRef} className={`relative w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center z-10 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white/90'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Video/Image - larger on tablet */}
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <video
              src={home1about}
              className="rounded-2xl shadow-lg w-full md:max-w-full md:h-[340px] max-w-md h-full min-h-[260px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          {/* Right: Content - balanced width */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-serif text-[#79BAEC]`}>{t.aboutTitle}</h2>
            <p className="text-lg  text-justify mb-6 max-w-lg text-[#374151]">Transform your business with our cutting-edge digital marketing solutions. We specialize in SEO, social media management, PPC campaigns, and content creation to help you reach, engage, and convert your ideal audience.</p>
            <ul className="mb-6 flex flex-col gap-0.5 items-start" style={{alignItems:'baseline'}}>
              <li className="text-lg text-[#374151]" style={{lineHeight:'1.6', marginBottom:'2px'}}>Expert SEO strategies for top rankings</li>
              <li className="text-lg text-[#374151]" style={{lineHeight:'1.6', marginBottom:'2px'}}>Engaging social media campaigns</li>
              <li className="text-lg text-[#374151]" style={{lineHeight:'1.6', marginBottom:'2px'}}>High-converting PPC advertising</li>
              <li className="text-lg text-[#374151]" style={{lineHeight:'1.6', marginBottom:'2px'}}>Creative content and branding</li>
            </ul>
            <button className="text-white font-semibold px-6 py-2 rounded-lg shadow transition" style={{backgroundColor:'#79BAEC'}}>{t.aboutBtn}</button>
          </div>
        </div>
      </section>

      {/* Explore Menu Section */}
  <section ref={menuRef} className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#79BAEC]/20'}`}> 
        <div className="max-w-6xl w-full mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center text-[#79BAEC]`}>{t.menuTitle}</h2>
          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu Card 1 */}
            <div className="flex flex-col items-center">
              <img src={menu1} alt={t.menu1} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu1}</span>
            </div>
            {/* Menu Card 2 */}
            <div className="flex flex-col items-center">
              <img src={menu2} alt={t.menu2} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu2}</span>
            </div>
            {/* Menu Card 3 */}
            <div className="flex flex-col items-center">
              <img src={menu3} alt={t.menu3} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu3}</span>
            </div>
            {/* Menu Card 4 */}
            <div className="flex flex-col items-center">
              <img src={menu4} alt={t.menu4} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (White theme, red border, black text) */}
  <section className="w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center" style={{background:'#f5f8fa'}}>
    <div className="max-w-2xl w-full mx-auto text-center mb-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{color:'#5A7CA8',letterSpacing:'-1px'}}>Why choose <span style={{color:'#222'}}>us?</span></h2>
      <p className="text-lg text-gray-600 mb-8">Four reasons to trust us with your digital marketing success</p>
    </div>
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* SEO Expertise */}
      <div className="flex flex-row items-center bg-[#5A7CA8] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex-1 p-6 text-left">
          <h3 className="text-2xl font-bold text-white mb-2">SEO Expertise</h3>
          <p className="text-white text-base">We deliver top search rankings and organic growth with proven SEO strategies tailored to your business.</p>
        </div>
        <img src={menu1} alt="SEO Expertise" className="w-32 h-28 object-cover" />
      </div>
      {/* Social Media Innovation */}
      <div className="flex flex-row items-center bg-[#7BAECF] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex-1 p-6 text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Social Media Innovation</h3>
          <p className="text-white text-base">Engaging campaigns and creative content that grow your brand and connect with your audience on every platform.</p>
        </div>
        <img src={menu2} alt="Social Media Innovation" className="w-32 h-28 object-cover" />
      </div>
      {/* Transparent Reporting */}
      <div className="flex flex-row items-center bg-[#E6EAF0] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex-1 p-6 text-left">
          <h3 className="text-2xl font-bold text-[#5A7CA8] mb-2">Transparent Reporting</h3>
          <p className="text-[#222] text-base">Clear analytics and honest communication so you always know your campaign performance and ROI.</p>
        </div>
        <img src={menu3} alt="Transparent Reporting" className="w-32 h-28 object-cover" />
      </div>
      {/* Reliable Results */}
      <div className="flex flex-row items-center bg-[#F5F8FA] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex-1 p-6 text-left">
          <h3 className="text-2xl font-bold text-[#5A7CA8] mb-2">Reliable Results</h3>
          <p className="text-[#222] text-base">Consistent delivery of high-quality work, meeting deadlines and exceeding expectations for every client.</p>
        </div>
        <img src={menu4} alt="Reliable Results" className="w-32 h-28 object-cover" />
      </div>
    </div>
  </section>
      {/* What Our Clients Say Section (Three circular cards, one image each) */}
  <section className={`relative w-full flex flex-row items-center justify-center py-20 overflow-hidden ${theme === 'dark' ? 'bg-[#222]' : 'bg-transparent'}`}> 
        {/* Background food image (use menu1 as a placeholder) */}
        <img src={menu1} alt="food background" className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm z-0" />
  <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center drop-shadow" style={{color:'#79BAEC'}}>{t.clientsSay}</h2>
          <div className="flex  md:flex-row justify-center items-center w-full gap-8">
            {/* Card 1 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adolfo Roman" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">Adolfo Roman</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client1}</p>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80" alt="dish1" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
            {/* Card 2 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Lopez" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">Maria Lopez</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client2}</p>
              <img src={menu2} alt="dish2" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
            {/* Card 3 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="John Smith" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">John Smith</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client3}</p>
              <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80" alt="dish3" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
          </div>
        </div>
      </section>
      {/* CTAs Section (Styled like attachment) */}
      {/* CTAs Section (Styled like attachment) */}
      <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{color: '#79BAEC'}}>{t.readyGrow}</h2>
          <p className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.readyDesc}</p>
          <button
            onClick={() => navigate('/contactus')}
            className="mt-2 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition"
            style={{backgroundColor:'#79BAEC',boxShadow:'0 4px 24px 0 rgba(139,92,246,0.15)'}}
          >
            {t.getStarted}
          </button>
        </div>
      </section>
      
    </div>
  );
}