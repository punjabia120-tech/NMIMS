import { useState } from 'react';
import { 
  School, 
  Menu, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  BadgeCheck, 
  Network, 
  Rocket,
  Facebook,
  Twitter,
  Linkedin,
  X,
  Award,
  ShieldCheck,
  User,
  LogOut,
  Download,
  X as CloseIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TRACKS = [
  { 
    id: 'digital-marketing', 
    title: 'Digital Marketing', 
    price: '8,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD248oJVAzdeXI2kLvBaWoj_is3NUXPlatIotyBBxEdgmYyIB_25N--dEieT6bQQe82oyFrnaiisfRhCs482RwPnIfH4IVKNS8DqNSJji-k4aSo2OVWd1p2j0ww_uRYkLLjDnK8R7KQwWFXvd_-w4q66-TDsKV9iNbXXxRIhKg4N7mdr3w3v-BdVwlDqQNAWA9xjXIR1M_Bp7Qage5oKHnj7NlNDH0D3BTjh9vfUr50Cu0_faTR4o3iixR3_sFtms-tq066fI-ngR4',
    description: 'Learn to navigate the complex ecosystem of performance marketing, social strategy, and SEO in the modern era.',
    points: ['AI-Driven Content Strategy', 'Search Engine Performance', 'Advanced Analytics & ROI', 'Social Media Commerce']
  },
  { id: 'finance', title: 'Finance', price: '10,000', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', description: 'Master corporate finance, investment banking, and emerging market risks.', points: ['Wealth Management', 'Risk Assessment', 'FinTech Innovation', 'Global Economics'] },
  { id: 'it-data', title: 'IT & Data', price: '12,000', image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80', description: 'Deep dive into data analytics, AI integration, and cloud infrastructure.', points: ['Machine Learning', 'Big Data Strategy', 'Cybersecurity', 'Cloud Management'] },
  { id: 'business', title: 'Business Management', price: '9,000', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80', description: 'Develop high-performance leadership and organizational transformation skills.', points: ['Strategic Leadership', 'Ops Optimization', 'Change Management', 'Conflict Resolution'] },
];

const FACULTY = [
  {
    name: 'Dr. Rajesh Iyer',
    role: 'Head of Marketing Dept',
    desc: '25+ years in strategic brand building for Fortune 500 companies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxUcy2n1MLOeoKt0FNfkNMXmhIlqbzD4TISS3_HcMZbY_QHq9IRakTO-dJ5zNgsWpOuLlqGOdJE6uvn-7l82ETjPdoVNqwZGjHvML942iBMWzXEgFFvfBmo08teZ12_Qe6Ba7bEPVMFufVyIWx1nehfw28DqkDq8yYaerKbFrK3-BhYreO48YWwLRrCDceEJb2bFPdvtIgi1Xr2ROW6Ri3_AIJf9Hvm2BUQXMQaHHiq90vL4eB_xmBFjEA03qmBeT_BfYbT11gjBw'
  },
  {
    name: 'Prof. Anita Sharma',
    role: 'Financial Markets Expert',
    desc: 'Former Investment Banker specializing in Emerging Markets and Risk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhW_V_8LPNPet-gBHnoB2wKz7rc2NvFmnGxyMs6b-VlySqtPrCKDwLqH-wEIz4061dRKUSBfdd4KBQ920RD6YT5KVz7vG61vX2kqA0rst-ddA3QSMM7z3HEsmXuECHCVEtnc1J45kI17f6oKGuHzZ552UxIRSIU7F9DymMgCMhSoxPunknt5qngSA_BoaH0zbVCA-bKaB5JbiUxz4FzWUqKY2pjOVG43MsbL84xW4DJOvQUPBD0866V2GROIfkCgMyB_UVv0GCB-o'
  },
  {
    name: 'Dr. Vikram Mehra',
    role: 'IT & Data Analytics',
    desc: 'Author and consultant for AI integration in retail supply chains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmPBHWpPhgTEO3zHIxTuX7ql_lHvq9bhfuNjIgOCNCsQz03l7SC5uJG_ufxiqb-ZDQ0aG7KD2_VHjAlXSuv72_wCZ5L_EDaP_Oc51qIJoFNJ3gvfx-UzMEs40o94RvYt9NNkV54_V_LF81fLLNVVCnyHN6h1rFSjR1GHOcdNwfwwmiAI3NkiL0DcCvmRh6LWUiu18eTu8V28OXxNpL8Ou7Jlu-7vS-tZcNgCxnwpKMbAFs3jqGO-dMbUvsLaCECy8O3T5lsj5hcyU'
  },
  {
    name: "Prof. Sarah D'Souza",
    role: 'Leadership Coach',
    desc: 'Expert in organizational behavior and high-performance leadership.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl6C19M4kHJMQ-oLEz8wSjLyy_dSdqDhol2SyxbiaEv3BrwJAZVO8dSK-qzM7OkHRWDKuzuILHA6LIJWXyFSNiAGg6mho7ZsIVHxgDJ2tbcj_OYir4PRlek0dqm4IGgYb9A116cyRLcg8VOUANPa8oPPsyIpi6RnSr0tFHzxhczwUnGj_55J34XBvk7I6G4Hn_3_aERfnp-h9xre9I6yptWbdMRcUo9u7V4pPjdBfBjfRQSCsWcbZD33zXoYNtUY8ZNSLZgb_LSfg'
  }
];

const SCHEDULE = [
  { 
    day: '01', 
    date: '29 April', 
    title: 'Foundation & Ecosystem Analysis', 
    desc: 'Setting the strategic mindset across all verticals. We analyze Consumer Behavior for Digital Marketing, Global Fintech shifts for Finance, Generative AI trends for IT, and Agile leadership frameworks for Business Management.' 
  },
  { 
    day: '02', 
    date: '30 April', 
    title: 'Deep-Dive: Workshop Specific Modules', 
    desc: 'Hands-on workshops with specialized tools. Marketing focuses on Meta/Google Ads; Finance explores Algorithmic Trading & Risk; IT deep-dives into Python/SQL for Big Data; and Business tackles Change Management simulation.' 
  },
  { 
    day: '03', 
    date: '01 May', 
    title: 'Applied Strategy & Global Case Studies', 
    desc: 'Analyzing institutional success and failure. Features deep-dives into Brand Campaigns, Investment Banking crises, AI-first retail models, and Corporate Governance restructuring from Fortune 500 archives.' 
  },
  { 
    day: '04', 
    date: '02 May', 
    title: 'Innovation & Growth Lab', 
    desc: 'From theory to rapid prototyping. Developing Full-Funnel Marketing plans, Wealth-tech startup pitches, Predictive Data models, and Strategic Scale-up blueprints for modern enterprises.' 
  },
  { 
    day: '05', 
    date: '03 May', 
    title: 'Portfolio Defense & High-Impact Graduation', 
    desc: 'Final presentation of industry-aligned projects to a panel of marketing directors, finance heads, and tech consultants, followed by the NMIMS certification ceremony at the Mumbai Campus.' 
  },
];

export default function App() {
  const [activeTrack, setActiveTrack] = useState(TRACKS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'landing' | 'dashboard'>('landing');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'academic' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>({
    name: 'Mahak Punjabi',
    email: 'Punjabimahak257@gmail.com',
    phone: '8005982457',
    course: 'Digital Marketing',
    price: '8,000',
    admissionId: 'NM-2026-X8842',
    dateJoined: '24 April 2026'
  });
  const [loginError, setLoginError] = useState('');

  const [loginForm, setLoginForm] = useState({
    email: '',
    phone: ''
  });

  const LOGO_SRC = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/NMIMS_logo.png/640px-NMIMS_logo.png";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email.trim().toLowerCase() === 'punjabimahak257@gmail.com' && loginForm.phone === '8005982457') {
      setIsLoggedIn(true);
      setCurrentUser({
        name: 'Mahak Punjabi',
        email: 'Punjabimahak257@gmail.com',
        phone: '8005982457',
        course: 'Digital Marketing',
        price: '8,000',
        admissionId: 'NM-2026-X8842',
        dateJoined: '24 April 2026'
      });
      setIsLoginModalOpen(false);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Please use the registered email and phone.');
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white border-b border-surface-container shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="NMIMS Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Courses', 'Schedule', 'Faculty'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setActiveView(activeView === 'landing' ? 'dashboard' : 'landing')}
                  className="bg-red-50 text-primary border border-red-100 font-bold text-sm px-5 py-2 rounded-lg hover:bg-red-100 transition-all flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  {activeView === 'landing' ? 'My Dashboard' : 'View Workshops'}
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-bold active:scale-95 transition-all"
              >
                Login
              </button>
            )}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main>
        {isLoggedIn && activeView === 'dashboard' && (
          <section className="bg-red-50 min-h-[70vh] py-20">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-2">Student Dashboard</h2>
                <p className="text-secondary font-medium">Welcome back, {currentUser.name}</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-red-100"
              >
                <div className="bg-primary p-8 text-white flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Fee Receipt</h2>
                    <p className="text-white/60 text-xs">Narsee Monjee Institute of Management Studies (Mumbai Campus)</p>
                  </div>
                  <img src={LOGO_SRC} alt="NMIMS Logo" className="h-14 w-auto invert brightness-0 grayscale opacity-40 ml-auto" referrerPolicy="no-referrer" />
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Student Name</label>
                        <div className="text-lg font-bold text-slate-900">{currentUser.name}</div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Admission ID</label>
                        <div className="text-sm font-semibold font-mono text-primary">{currentUser.admissionId}</div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Enrolled Workshop</label>
                        <div className="text-md font-bold text-slate-800">{currentUser.course} Mastery</div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Campus Location</label>
                        <div className="text-sm text-slate-600 font-medium">V. L. Mehta Road, Vile Parle (W), Mumbai</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-slate-500">Transaction Status</span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">Paid</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs text-slate-400 mb-1">Amount Paid</div>
                            <div className="text-2xl font-black text-slate-900">₹{currentUser.price}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] text-slate-400">Date</div>
                            <div className="text-xs font-bold text-slate-700">{currentUser.dateJoined}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <button 
                          onClick={() => window.print()}
                          className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-3.5 rounded-lg text-sm font-bold hover:bg-black transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download Receipt PDF
                        </button>
                        <p className="text-[10px] text-center text-slate-400 italic">This is a computer generated receipt and does not require a physical signature.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {activeView === 'landing' && (
          <>
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-center bg-surface overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-4-UgTLcN8Jov671VXpZupdPRiXlNlGticnVCw21xTE__SnUtC0LZs3WeJE8Bq_ri4yMFPTnvFwA7x_w9OlNryx6CaP2Xd-w1bbLUIm7uAnlUsO0Uv9Q5Ms4_7FHqoZhEzYJDhUtGdJNfPpKK2huvv6oJVaAz1nbf2AfH6Ip3wjayjB2zHrSrNia8b6UMEVlzWcIoCtVzoMFkRNLZfgsq-7u7mY3ibJngohdyGl4tk4vmFv7WJm2TDhFvU8zaFCuls5K-MuDMjK0"
              className="w-full h-full object-cover opacity-10 grayscale"
              alt="University Campus Blur"
            />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-red-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Registration Open For 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-on-surface">
                NMIMS 5-Day <br />
                <span className="text-primary">Certification Program</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                Master the Future of Digital Marketing & Business Skills. An intensive, industry-aligned immersive experience designed for tomorrow's leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <Calendar className="text-primary w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">29 April – 03 May 2026</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">Mumbai Campus</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#register" className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-900/20 hover:-translate-y-1 transition-all">
                  Register Now
                </a>
                <a href="#courses" className="bg-white border-2 border-surface-container text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  View Workshops
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTJ35aHzPhBxYLlwdHjyj5sZ7sjrvv332qR7OtYRQi2ROaXhLXstm0YoamsuXrf-2DDFK1Bex17Y24TJ1OP1YO1ajgucV89dIzJALohWDEjKbEavn5ncWunw5tCQbK72cXyImEOIEKESxhRQ-TrlR4LzdKCserNGwgS_fRHd7WlQOEgLQnFWx2y93ofqvPwMan5DSoyOOyf3O7ht4E5GH7pD8mFphu8Y47noOPFBnX6beiwCIATN1VyAgcgR0rxUQ1RGKPcyin_h0"
                className="rounded-2xl shadow-2xl relative z-10 aspect-video object-cover"
                alt="Collaboration"
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-0 skew-x-12 transform translate-x-20" />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Established 1981</div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                  Academic Legacy <br />
                  <span className="text-primary">& Practical Innovation</span>
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  <p>
                    SVKM's Narsee Monjee Institute of Management Studies (NMIMS) was established in 1981 and has since evolved into a globally reputed university. Our Mumbai campus is the heart of our academic ecosystem, fostering leadership through rigorous discipline and innovative thinking.
                  </p>
                  <p>
                    The 5-Day Certification Workshop is designed for those who seek high-velocity career growth. We bring together distilled industry insights, hands-on tool mastery, and networking with a pedigree that only a top-tier institution can provide.
                  </p>
                  <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary">
                    <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Vision</h4>
                    <p className="text-xs text-secondary italic">"To be a globally admired university by creating an innovative and rigorous academic ecosystem that develops transformative leaders for business and society."</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-bold text-secondary">Joined by 12,000+ Alumni globally</div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Category 1 University', value: 'MHRD' },
                  { label: 'NAAC Accreditation', value: 'A+' },
                  { label: 'Global Ranking', value: 'Top 100' },
                  { label: 'Avg Salary Hike', value: '45%' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white shadow-xl shadow-black/5 rounded-2xl border border-surface-container flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
                  >
                    <div className="text-3xl font-black text-primary mb-2 font-headline group-hover:text-white transition-colors">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase text-secondary tracking-widest group-hover:text-white/70 transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-primary">Workshop</span></h2>
              <p className="text-on-surface-variant">Focused tracks designed to provide maximum impact in minimum time.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-surface-container">
              {TRACKS.map((track) => (
                <button 
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  className={`px-8 py-4 font-bold text-sm transition-all relative ${
                    activeTrack.id === track.id ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {track.title}
                  {activeTrack.id === track.id && (
                    <motion.div 
                      layoutId="track-underline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTrack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-square md:aspect-auto">
                    <img 
                      src={activeTrack.image} 
                      className="w-full h-full object-cover" 
                      alt={activeTrack.title} 
                    />
                  </div>
                  <div className="p-10 md:w-1/2 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{activeTrack.title} Mastery</h3>
                      <div className="text-right">
                        <div className="text-primary font-bold text-xl">₹{activeTrack.price}</div>
                        <div className="text-[10px] text-secondary font-bold uppercase tracking-widest">Workshop Fee</div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">{activeTrack.description}</p>
                    <ul className="space-y-4 mb-8">
                      {activeTrack.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm font-medium">
                          <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a href="#register" className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform">
                      Enroll in this track <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="bg-primary text-white p-10 rounded-2xl flex flex-col">
                  <h4 className="text-xl font-bold mb-8">Program Benefits</h4>
                  <div className="space-y-8 flex-1">
                    {[
                      { title: 'Live Case Studies', desc: 'Analyze real-world campaigns from top global brands.' },
                      { title: 'Industry Projects', desc: 'Build a portfolio-ready project during the 5 days.' },
                      { title: 'Expert Feedback', desc: 'Get 1-on-1 critique from marketing directors.' }
                    ].map((benefit, idx) => (
                      <div key={idx}>
                        <h5 className="font-bold mb-2 text-sm uppercase tracking-wider">{benefit.title}</h5>
                        <p className="text-white/70 text-sm">{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program <span className="text-primary">Timeline</span></h2>
              <p className="text-on-surface-variant">A rigorous 5-day journey through advanced concepts.</p>
            </div>

            <div className="space-y-6">
              {SCHEDULE.map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row gap-8 p-8 bg-surface rounded-2xl border-l-[6px] border-primary hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-2xl font-extrabold text-primary font-headline">Day {item.day}</div>
                    <div className="text-sm font-bold text-secondary uppercase tracking-widest">{item.date}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-24 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from the <span className="text-primary">Experts</span></h2>
              <p className="text-on-surface-variant">World-class faculty with deep industry roots.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FACULTY.map((f, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl text-center group border border-surface-container hover:border-primary transition-colors"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:ring-4 group-hover:ring-primary/20 transition-all">
                    <img 
                      src={f.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt={f.name} 
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-1">{f.name}</h4>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{f.role}</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-slate-900 text-white rounded-[2rem] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
              
              <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-10 leading-tight">Why This Certification <br /><span className="text-primary">Matters</span></h2>
                  <div className="grid gap-10">
                    {[
                      { icon: <BadgeCheck />, title: 'NMIMS Credentials', desc: 'Boost your resume with a certificate from a top-tier AACSB accredited institution.' },
                      { icon: <Network />, title: 'High-Impact Networking', desc: 'Connect with peers and industry leaders during exclusive mixer sessions.' },
                      { icon: <Rocket />, title: 'Immediate ROI', desc: 'Practical skills that you can apply at your workplace on Monday morning.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                          <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKuKvQeOqopOr5oUeNeLbuiqbNBj4jBdAsU43_InHkal64umlprG8EQrfGY-4nZMv76FsYtdIA2exnvP_jSZh3MFqds9Sb6x8ou_lP8hnTwWHHYtU2BrjTXRVvrcMkNfaF4fMxE5DvssxBNffofGT4uvDq-ycDdBxxM5sqArnu3vOMs2OlO45Zz5jEyYgJT6WJ56JXwwIrn0E-EhMzBjat4Mvt1FgqKfZ8GQ7pSttIpKhTDLDyCeKpiWorgDqFPOcT-xx72oDBn2g",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxqP4d12CeQdSScQr-DO3P9cdooqInTJCJHY5nlw4R1gL49FhP99P15ZzbWRaqDrxpcFy-KU57DSIMBkk1RK3QfKZHInv4Ah1HtyxheqLUMDPIdflGg3Tuw8LxIuTUQ__8aHSCdwsmLZF2xOaHTY4mcFnrb1FbZ1mhziV4Zp5GlLuOCVQio1PPwH3ko6sqXk4V4KtUUHDbXHdFFvpJ5cfBhXD_iQfR-FEoeBIzZDURj1glX7tRL0z4wL76dfvcU1fowx0dlJ-Xj_w",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuArJjZk9c02UImaTOsctZgX_e5Q4rV21Y5uBFLpasnV-ABmNQCJp2tMy275E38xaJh1gstpOB70PjRaoIMzr1DdN-5ssTftPILOFz-lqCWC5Zh14k4xI7d8MAzbYbR8qz2x9os1zP--m1_dA5VohPQUVfczEZghm5lP_Y5QTQZasdfGv0WaQSzS96U6iBN2OoxBx-UnlO2xsPzi8u8A__IThHaXCaSDj9P2Z5FgZqZJgc0ityxlbH1K7nhqyl2l-e787uPruiOogXU",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4H17pDsUEzoRzeMnVjFa-z3pdyaFetT1MsiSZjWZNkg8XomUeYPWlMPz4zmzPum9t3kMoyVqLz1TxJm1bDQmVaPmb_eCHbJHd6zYk_VEsEiBBGJrcFfABk9ABg50VgNJbCgjz4KVfGAcbHIZy-X6YOt93On-V04U0jRTU4Jg-0y08uk0i34RLVwbJUM1HqK7XSpHbOJ3DLdhcnaEQ74YrLNtj_R9Uu_YtZ1GvqQc-1wt_PkeRy4lBihochUfH5gs7a8qFVh2Duj8"
                  ].map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      className={`rounded-xl h-44 w-full object-cover ${i % 2 !== 0 ? 'translate-y-6' : ''}`} 
                      alt={`Impact ${i}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-black/5 flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Register Now</h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">Limited seats available to ensure high-quality interaction.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <Phone className="w-5 h-5 text-red-200" />
                    <span className="text-sm font-semibold">+91 22 4235 5555</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-red-200" />
                    <span className="text-sm font-semibold">admissions@nmims.edu</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-12 lg:p-16">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      defaultValue="Mahak Punjabi"
                      className="p-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      defaultValue="punjabia120@gmail.com"
                      className="p-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="p-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary">Preferred Workshop</label>
                    <select 
                      defaultValue="Digital Marketing (₹8,000)"
                      className="p-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none"
                    >
                      {TRACKS.map(t => <option key={t.id} value={`${t.title} (₹${t.price})`}>{t.title} (₹{t.price})</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2 mt-4 space-y-4">
                    <button className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-all">
                      Secure Your Spot
                    </button>
                    <p className="text-center text-[10px] text-on-surface-variant font-medium">
                      By clicking secure your spot, you agree to our Terms & Conditions.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <img src={LOGO_SRC} alt="NMIMS Logo" className="h-16 w-auto mb-6 invert brightness-0 grayscale" />
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Official certification workshop portal for Narsee Monjee Institute of Management Studies. Empowering the next generation of global business leaders.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Icon key={i} className="w-5 h-5 text-slate-500 hover:text-primary cursor-pointer transition-colors" />
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#faculty" className="hover:text-primary transition-colors">Faculty</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Legal Policies</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => setPolicyType('privacy')} className="hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setPolicyType('terms')} className="hover:text-primary transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setPolicyType('academic')} className="hover:text-primary transition-colors">Academic Integrity</button></li>
              <li><a href="#register" className="hover:text-primary transition-colors">Registration Hub</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Accreditation</h5>
            <div className="flex items-center gap-6 opacity-40">
              <Award className="w-10 h-10" />
              <ShieldCheck className="w-10 h-10" />
              <div className="text-xs font-bold leading-tight">NAAC A+<br />AACSB</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div>© 2026 Narsee Monjee Institute of Management Studies. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Student Login</h2>
                  <button onClick={() => setIsLoginModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <CloseIcon className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Registered Email</label>
                    <input 
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      placeholder="e.g. mahak@example.com"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Registered Phone</label>
                    <input 
                      type="tel"
                      value={loginForm.phone}
                      onChange={(e) => setLoginForm({...loginForm, phone: e.target.value})}
                      placeholder="e.g. 8005982457"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      required
                    />
                  </div>
                  
                  {loginError && (
                    <p className="text-xs font-bold text-primary bg-red-50 p-3 rounded-lg border border-red-100">{loginError}</p>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-all"
                  >
                    Continue to Admission Portal
                  </button>
                </form>
                
                <p className="mt-8 text-center text-xs text-slate-400">
                  By logging in, you agree to the university's academic policies and digital code of conduct.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {policyType && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPolicyType(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-2xl relative z-10 overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-2xl font-bold uppercase tracking-tighter">
                  {policyType === 'privacy' ? 'Privacy Policy' : policyType === 'terms' ? 'Terms & Conditions' : 'Academic Integrity'}
                </h3>
                <button onClick={() => setPolicyType(null)} className="p-2 hover:bg-white rounded-full transition-colors border border-slate-200">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto prose prose-slate prose-sm max-w-none">
                <p className="font-bold text-primary mb-4 italic">Last Updated: April 2026</p>
                {policyType === 'privacy' ? (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-slate-800">1. Information Collection</h4>
                      <p>We collect personal information such as your name, email, and academic background solely for the purpose of workshop enrollment and certification processing at NMIMS Mumbai.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">2. Usage of Data</h4>
                      <p>Your data is used to generate admission IDs, fee receipts, and digital certificates. We do not share student information with third-party marketing agencies.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">3. Security</h4>
                      <p>All transaction data is encrypted. We implement industry-standard protocols to protect your academic records from unauthorized access.</p>
                    </section>
                  </div>
                ) : policyType === 'terms' ? (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-slate-800">1. Enrollment Eligibility</h4>
                      <p>By registering, you confirm that the information provided is accurate and you are a student or professional seeking skill enhancement in the selected workshop track.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">2. Attendance Policy</h4>
                      <p>A minimum of 80% attendance is mandatory across the 5 days to be eligible for the NMIMS Certification of Completion.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">3. Fee & Refund</h4>
                      <p>The workshop fee is non-refundable 48 hours prior to the workshop start date. Any disputes are subject to the jurisdiction of courts in Mumbai.</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-slate-800">1. Code of Conduct</h4>
                      <p>Students must maintain the highest standards of academic honesty. Plagiarism or unauthorized sharing of workshop materials is strictly prohibited.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">2. Intellectual Property</h4>
                      <p>All training materials, case studies, and proprietary tools provided during the 5-day session are the intellectual property of SVKM'S NMIMS.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-slate-800">3. Disciplinary Action</h4>
                      <p>Failure to comply with the code of conduct may result in immediate expulsion from the workshop without refund and withholding of the certificate.</p>
                    </section>
                  </div>
                )}
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setPolicyType(null)}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
