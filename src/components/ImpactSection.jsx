import { useState, useEffect } from "react";

// Animated Counter component
const Counter = ({ label, value, theme }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <h3 className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{count}+</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{label}</p>
    </div>
  );
};


const translations = {
  English: {
    impact: "Our Impact",
    stats: [
      { label: "Businesses Helped", value: 1091 },
      { label: "Campaigns Launched", value: 120 },
      { label: "Projects Delivered", value: 1074 },
      { label: "Countries Served", value: 25 },
    ],
  },
  Arabic: {
    impact: "تأثيرنا",
    stats: [
      { label: "عملاء سعداء", value: 5000 },
      { label: "أطباق تقدم يومياً", value: 120 },
      { label: "طلبات تم توصيلها", value: 15000 },
      { label: "فروع حول العالم", value: 25 },
    ],
  },
  Hebrew: {
    impact: "ההשפעה שלנו",
    stats: [
      { label: "לקוחות מרוצים", value: 5000 },
      { label: "מנות מוגשות ביום", value: 120 },
      { label: "הזמנות שסופקו", value: 15000 },
      { label: "סניפים ברחבי העולם", value: 25 },
    ],
  },
};


const ImpactSection = ({ theme }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  return (
    <section className={`max-w-full mx-auto py-16 px-4 ${theme === 'dark' ? 'bg-black' : 'bg-red-50'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        {t.impact}
      </h2>
      <div className="grid  md:grid-cols-4 gap-10">
        {t.stats.map((stat, index) => (
          <Counter key={index} label={stat.label} value={stat.value} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
