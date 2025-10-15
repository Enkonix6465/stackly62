import { useState, useEffect } from "react";
// Translation object for all admin dashboard text
const translations = {
  en: {
    userSignup: "User Signup Details",
    sno: "S.No",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    signupTime: "Signup Time",
    signupDate: "Signup Date",
    noUsers: "No user signup details found.",
  revenue: "SEO Performance (Weekly)",
  popularDishes: "Social Media Engagement",
  reservations: "PPC Campaigns by Time",
  customerGrowth: "Content Marketing Growth (Monthly)",
  deals: "Lead Generation Performance",
  },
  ar: {
    userSignup: "تفاصيل تسجيل المستخدمين",
    sno: "م.ت",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    signupTime: "وقت التسجيل",
    signupDate: "تاريخ التسجيل",
    noUsers: "لا توجد تفاصيل تسجيل مستخدمين.",
    revenue: "نظرة عامة على الإيرادات (أسبوعي)",
    popularDishes: "الأطباق الأكثر شعبية",
    reservations: "الحجوزات حسب الوقت",
    customerGrowth: "نمو العملاء (شهري)",
    deals: "أداء العروض",
  },
  he: {
    userSignup: "פרטי הרשמת משתמשים",
    sno: "מס' סידורי",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    signupTime: "שעת הרשמה",
    signupDate: "תאריך הרשמה",
    noUsers: "לא נמצאו פרטי הרשמת משתמשים.",
    revenue: "סקירת הכנסות (שבועי)",
    popularDishes: "מנות פופולריות",
    reservations: "הזמנות לפי שעה",
    customerGrowth: "צמיחת לקוחות (חודשי)",
    deals: "ביצועי מבצעים",
  },
};

const langMap = {
  English: 'en',
  Arabic: 'ar',
  Hebrew: 'he',
  en: 'en',
  ar: 'ar',
  he: 'he',
};
import clsx from "clsx";
import Header from "../components/Header";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";
const revenueData = [
    { day: "Mon", seo: 120 },
    { day: "Tue", seo: 150 },
    { day: "Wed", seo: 180 },
    { day: "Thu", seo: 200 },
    { day: "Fri", seo: 220 },
    { day: "Sat", seo: 250 },
    { day: "Sun", seo: 170 },
  ];

  const ordersData = [
    { platform: "Facebook", engagement: 320 },
    { platform: "Instagram", engagement: 410 },
    { platform: "LinkedIn", engagement: 180 },
    { platform: "Twitter", engagement: 90 },
  ];

  const reservationsData = [
    { time: "9 AM", clicks: 50 },
    { time: "12 PM", clicks: 120 },
    { time: "3 PM", clicks: 90 },
    { time: "6 PM", clicks: 160 },
    { time: "9 PM", clicks: 110 },
  ];

  const customersData = [
    { month: "Jan", articles: 4 },
    { month: "Feb", articles: 6 },
    { month: "Mar", articles: 8 },
    { month: "Apr", articles: 10 },
  ];

  const feedbackData = [
    { name: "Positive", value: 70 },
    { name: "Neutral", value: 20 },
    { name: "Negative", value: 10 },
  ];
  const COLORS = ["#22c55e", "#eab308", "#ef4444"];

  const dealsData = [
    { source: "Website", leads: 80 },
    { source: "Landing Page", leads: 120 },
    { source: "Social Media", leads: 60 },
    { source: "Email", leads: 40 },
  ];

export default function UserDetailsSection() {
  // Language state synced with Header
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  useEffect(() => {
    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'English';
      setSelectedLanguage(newLang);
      setLanguage(langMap[newLang] || 'en');
    };
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('storage', handleLangChange);
    return () => {
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('storage', handleLangChange);
    };
  }, []);
  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  
  // Prepare data for instructor graph (instructors per expertise)
  

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
    
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

 


  return (
    <div dir={dir} className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* User Signup Table Section */}
        <div className={clsx(
          "rounded-xl shadow p-6 mt-16 bg-white text-black border border-[#79BAEC]"
        )}>
          <h2 className="text-2xl font-bold mb-4" style={{color: '#79BAEC'}}>{translations[language].userSignup}</h2>
          {signupDetails.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg border-[#79BAEC]">
                <thead className="text-white" style={{backgroundColor: '#79BAEC'}}>
                  <tr>
                    <th className="px-4 py-2 text-center">{translations[language].sno}</th>
                    <th className="px-4 py-2 text-center">{translations[language].firstName}</th>
                    <th className="px-4 py-2 text-center">{translations[language].lastName}</th>
                    <th className="px-4 py-2 text-center">{translations[language].email}</th>
                    <th className="px-4 py-2 text-center">{translations[language].signupTime}</th>
                    <th className="px-4 py-2 text-center">{translations[language].signupDate}</th>
                  </tr>
                </thead>
                <tbody>
                  {signupDetails.map((user, idx) => (
                    <tr key={user.email || idx} className="border-b" style={{borderColor: '#79BAEC'}}>
                      <td className="px-4 py-2 text-center">{idx + 1}</td>
                      <td className="px-4 py-2 text-center">{user.firstName}</td>
                      <td className="px-4 py-2 text-center">{user.lastName}</td>
                      <td className="px-4 py-2 text-center">{user.email}</td>
                      <td className="px-4 py-2 text-center">{user.signupTime}</td>
                      <td className="px-4 py-2 text-center">{user.signupDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">{translations[language].noUsers}</p>
          )}
        </div>

        {/* 1. SEO Performance Overview */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-[#79BAEC]">
          <h2 className="text-xl font-semibold mb-4" style={{color: '#79BAEC'}}>{translations[language].revenue}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottom', offset: -5, fill: '#79BAEC', fontSize: 14 }} />
              <YAxis label={{ value: 'SEO Score', angle: -90, position: 'insideLeft', fill: '#79BAEC', fontSize: 14 }} />
              <Tooltip />
              <Legend formatter={null} />
              <Line type="monotone" dataKey="seo" stroke="#79BAEC" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. PPC Campaigns & Content Marketing Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* PPC Campaigns by Time */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-[#79BAEC]">
            <h2 className="text-xl font-semibold mb-4" style={{color: '#79BAEC'}}>{translations[language].reservations}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={reservationsData}>
                <defs>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#79BAEC" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#79BAEC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: -5, fill: '#79BAEC', fontSize: 14 }} />
                <YAxis label={{ value: 'Clicks', angle: -90, position: 'insideLeft', fill: '#79BAEC', fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].reservations]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#79BAEC' }}>{translations[language].reservations}</span>} />
                <Area type="monotone" dataKey="clicks" stroke="#79BAEC" fillOpacity={1} fill="url(#colorClicks)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Content Marketing Growth */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-[#79BAEC]">
            <h2 className="text-xl font-semibold mb-4" style={{color: '#79BAEC'}}>{translations[language].customerGrowth}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={customersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: '#79BAEC', fontSize: 14 }} />
                <YAxis label={{ value: 'Articles', angle: -90, position: 'insideLeft', fill: '#79BAEC', fontSize: 14 }} />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].customerGrowth]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#79BAEC' }}>{translations[language].customerGrowth}</span>} />
                <Line type="monotone" dataKey="articles" stroke="#79BAEC" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Social Media Engagement & Lead Generation Performance */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Social Media Engagement */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-[#79BAEC]">
            <h2 className="text-xl font-semibold mb-4" style={{color: '#79BAEC'}}>{translations[language].popularDishes}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersData} barSize={75}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis label={{ value: 'Engagements', angle: -90, position: 'insideLeft', fill: '#79BAEC', fontSize: 14 }} />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].popularDishes]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#79BAEC' }}>{translations[language].popularDishes}</span>} />
                <Bar dataKey="engagement" fill="#79BAEC" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Lead Generation Performance */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-[#79BAEC]">
            <h2 className="text-xl font-semibold mb-4" style={{color: '#79BAEC'}}>{translations[language].deals}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dealsData} barSize={75}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis label={{ value: 'Leads', angle: -90, position: 'insideLeft', fill: '#79BAEC', fontSize: 14 }} />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].deals]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#79BAEC' }}>{translations[language].deals}</span>} />
                <Bar dataKey="leads" fill="#79BAEC" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
  </div>
  </div>
);
}
