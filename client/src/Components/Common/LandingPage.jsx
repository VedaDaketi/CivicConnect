import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Camera, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  User, 
  Building2, 
  HardHat, 
  BarChart3, 
  ShieldCheck, 
  Smartphone,
  Search,
  LogIn
} from 'lucide-react';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // --- SUB-PAGES ---
  const LoginPage = () => (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Select your login type</p>
        </div>
        <div className="space-y-4">
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2">
            <User size={20} /> Citizen Login
          </button>
          <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2">
            <Building2 size={20} /> Government Official
          </button>
          <button className="w-full py-3 px-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            <HardHat size={20} /> Field Worker
          </button>
        </div>
        <div className="mt-6 text-center">
          <button onClick={() => navigateTo('home')} className="text-blue-600 hover:underline">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  const ReportIssuePage = () => (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <AlertTriangle className="text-red-500" /> Report an Issue
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Category</label>
            <select className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Select Category...</option>
              <option>Pothole / Road Damage</option>
              <option>Garbage / Sanitation</option>
              <option>Streetlight Failure</option>
              <option>Water Leakage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="Describe the issue..."></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition">
                <Camera size={32} />
                <span className="mt-2 text-sm">Upload Photo/Video</span>
             </div>
             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition">
                <MapPin size={32} />
                <span className="mt-2 text-sm">Tag Location</span>
             </div>
          </div>
          <button type="button" className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
            Submit Report
          </button>
          <button onClick={() => navigateTo('home')} className="w-full py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );

  const TrackIssuePage = () => (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Search /> Track Your Complaint
        </h2>
        <p className="text-gray-600 mb-6">Enter your Complaint ID to check the real-time status of your report.</p>
        <div className="flex gap-2 mb-6">
          <input type="text" placeholder="e.g., CIV-2024-8892" className="flex-1 p-3 border border-gray-300 bg-white text-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 text-white px-6 rounded-lg font-semibold hover:bg-blue-700 transition">Track</button>
        </div>
        <button onClick={() => navigateTo('home')} className="text-blue-600 hover:underline block mx-auto">
          Back to Home
        </button>
      </div>
    </div>
  );

  // --- MAIN LANDING PAGE SECTIONS ---

  // 1. Header
  const Header = () => (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            C
          </div>
          <div className={`font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Civic<span className="text-blue-400">Connect</span>
          </div>
        </div>

        {/* Desktop Nav - Fixed Contrast Buttons */}
        <nav className="hidden md:flex items-center gap-6">
          {['Home', 'How It Works', 'About'].map((item) => (
            <button 
              key={item} 
              onClick={() => navigateTo('home')}
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
             onClick={() => navigateTo('track')}
             className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
             }`}
          >
            Track Issue
          </button>
        </nav>

        {/* Auth Buttons Desktop - Fixed Contrast */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigateTo('login')}
            className={`font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
              scrolled 
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            Login
          </button>
          <button 
            onClick={() => navigateTo('report')}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-lg transition transform hover:scale-105 flex items-center gap-2"
          >
            <AlertTriangle size={18} /> Report Issue
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 rounded-lg transition-colors focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen 
            ? <X size={28} className={scrolled ? 'text-gray-900' : 'text-white'} /> 
            : <Menu size={28} className={scrolled ? 'text-gray-900' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-2 border-t">
          <button onClick={() => navigateTo('home')} className="text-left py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50">Home</button>
          <button onClick={() => navigateTo('track')} className="text-left py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50">Track Issue</button>
          <button onClick={() => navigateTo('login')} className="text-left py-3 px-4 rounded-lg font-medium text-blue-600 bg-blue-50">Login</button>
          <button onClick={() => navigateTo('report')} className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold text-center mt-2 transition">Report Issue</button>
        </div>
      )}
    </header>
  );

  // 2. Hero Section
  const Hero = () => (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 w-full overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0 w-full">
        {/* Abstract city pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-1 rounded-full text-blue-100 text-sm font-medium">
            AI-Powered Civic Management
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Report Civic Issues. <br/>
            <span className="text-blue-400">Track Resolution.</span> <br/>
            Improve Your City.
          </h1>
          <p className="text-lg text-blue-100 max-w-lg">
            A transparent, AI-driven platform connecting citizens with the government to solve urban problems like potholes, waste, and lighting in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigateTo('report')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Camera size={20} /> Report an Issue
            </button>
            <button 
              onClick={() => navigateTo('track')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-blue-200/50 px-8 py-4 rounded-lg font-bold shadow-xl transition flex items-center justify-center gap-2"
            >
              <Search size={20} /> Track Complaint
            </button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="hidden md:block relative">
           <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition duration-500">
              <div className="bg-gray-100 rounded-xl h-64 w-full flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <MapPin size={120} className="opacity-20" />
                 </div>
                 {/* Floating UI Elements */}
                 <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 border border-gray-100">
                    <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle size={20} /></div>
                    <div>
                       <p className="text-xs text-gray-500">Status</p>
                       <p className="font-bold text-sm text-gray-800">Pothole Repaired</p>
                    </div>
                 </div>
                 <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 border border-gray-100">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Clock size={20} /></div>
                    <div>
                       <p className="text-xs text-gray-500">Avg Response</p>
                       <p className="font-bold text-sm text-gray-800">24 Hours</p>
                    </div>
                 </div>
              </div>
              <div className="mt-4 space-y-2">
                 <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                 <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[100px] text-white rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );

  // 3. Problem Statement
  const Problems = () => (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This System is Needed?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Traditional reporting is slow, opaque, and uncoordinated. We tackle the most common civic issues head-on.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <div className="bg-orange-600 h-2 w-8 rounded-full"></div>, label: 'Potholes', color: 'bg-orange-100 text-orange-600' },
            { icon: <div className="w-6 h-8 border-2 border-current border-t-0 rounded-b-md"></div>, label: 'Garbage Overflow', color: 'bg-green-100 text-green-600' },
            { icon: <div className="w-6 h-6 rounded-full border-4 border-current border-t-transparent animate-spin-slow"></div>, label: 'Water Logging', color: 'bg-blue-100 text-blue-600' },
            { icon: <div className="w-1 h-8 bg-current relative"><div className="absolute -top-1 -left-2 w-5 h-5 bg-yellow-400 rounded-full opacity-50"></div></div>, label: 'Streetlights', color: 'bg-yellow-100 text-yellow-600' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white group">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl ${item.color} group-hover:scale-110 transition`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 4. How It Works
  const HowItWorks = () => (
    <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Workflow</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

          {[
            { step: '01', title: 'Report', desc: 'Citizen snaps a photo & tags location.', icon: <Camera size={24} /> },
            { step: '02', title: 'AI Routing', desc: 'System classifies & assigns department.', icon: <Smartphone size={24} /> },
            { step: '03', title: 'Assignment', desc: 'Field worker gets the task on app.', icon: <User size={24} /> },
            { step: '04', title: 'Resolution', desc: 'Worker uploads "After" photo proof.', icon: <CheckCircle size={24} /> },
            { step: '05', title: 'Notification', desc: 'Citizen gets alerted of fix.', icon: <AlertTriangle size={24} /> },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center shadow-sm mb-6 relative group-hover:border-blue-500 transition duration-300">
                <span className="absolute -top-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">{item.step}</span>
                <div className="text-blue-600">{item.icon}</div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 px-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 5. Key Features
  const Features = () => (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Built for Transparency & Speed</h2>
            <div className="space-y-6">
              {[
                { title: 'AI-Based Classification', desc: 'Automatically detects issue type from images using Computer Vision.' },
                { title: 'Real-Time Tracking', desc: 'Track the exact status of your complaint from submission to closure.' },
                { title: 'Proof-of-Work', desc: 'Mandatory before/after photos ensure the work is actually done.' },
                { title: 'Department Dashboards', desc: 'Dedicated analytics for government officials to monitor performance.' }
              ].map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feat.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
               <BarChart3 className="text-blue-500 mb-3" size={32} />
               <div className="text-2xl font-bold text-gray-800">85%</div>
               <div className="text-xs text-gray-500">Faster Resolution</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mt-8">
               <ShieldCheck className="text-emerald-500 mb-3" size={32} />
               <div className="text-2xl font-bold text-gray-800">100%</div>
               <div className="text-xs text-gray-500">Verified Fixes</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
               <User className="text-purple-500 mb-3" size={32} />
               <div className="text-2xl font-bold text-gray-800">50k+</div>
               <div className="text-xs text-gray-500">Active Citizens</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mt-8">
               <MapPin className="text-red-500 mb-3" size={32} />
               <div className="text-2xl font-bold text-gray-800">12k</div>
               <div className="text-xs text-gray-500">Issues Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // 6. Live Map Preview
  const LiveMap = () => (
    <section className="py-20 bg-gray-900 text-white relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Live Issue Heatmap</h2>
            <p className="text-gray-400 mt-2">Transparency in action. View issues reported in your area.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition flex items-center gap-2 text-white">
            View Full Map <ChevronRight size={18} />
          </button>
        </div>
        
        {/* Mock Map UI */}
        <div className="w-full h-96 bg-gray-800 rounded-2xl border border-gray-700 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-20 bg-center"></div>
          
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
            <div className="absolute -top-8 -left-12 bg-white text-gray-900 text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Pothole Reported</div>
          </div>
          <div className="absolute top-1/2 left-1/2">
            <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
             <div className="absolute -top-8 -left-12 bg-white text-gray-900 text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Resolved: Waste</div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-pulse">
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)]"></div>
             <div className="absolute -top-8 -left-12 bg-white text-gray-900 text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">In Progress: Lights</div>
          </div>

          <div className="absolute bottom-4 left-4 bg-gray-900/90 p-4 rounded-lg border border-gray-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-sm text-white">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Open</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> In Progress</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Resolved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // 7. User Types
  const UserTypes = () => (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Who is this for?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              role: 'Citizens', 
              icon: <User size={40} />, 
              desc: 'Report issues, track status, and rate the resolution quality.',
              action: 'Login as Citizen',
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            { 
              role: 'Government', 
              icon: <Building2 size={40} />, 
              desc: 'Manage departments, view analytics, and oversee zone performance.',
              action: 'Official Login',
              color: 'text-indigo-600',
              bg: 'bg-indigo-50'
            },
            { 
              role: 'Field Workers', 
              icon: <HardHat size={40} />, 
              desc: 'Receive tasks, navigate to locations, and upload proof of work.',
              action: 'Worker App',
              color: 'text-orange-600',
              bg: 'bg-orange-50'
            }
          ].map((user, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full ${user.bg} ${user.color} flex items-center justify-center mb-6`}>
                {user.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{user.role}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{user.desc}</p>
              <button 
                onClick={() => navigateTo('login')}
                className={`font-semibold ${user.color} hover:underline`}
              >
                {user.action} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 8. CTA
  const CTA = () => (
    <section className="py-20 bg-blue-600 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
        <h2 className="text-4xl font-bold mb-6">Be a Responsible Citizen. Help Improve Your City.</h2>
        <p className="text-xl text-blue-100 mb-10">Join thousands of others making a difference today. It only takes a minute to report.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigateTo('report')}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Report an Issue Now
          </button>
          <button 
            onClick={() => navigateTo('login')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition"
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    </section>
  );

  // 9. About
  const About = () => (
    <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About The Initiative</h2>
        <p className="text-gray-600 leading-relaxed">
          The <strong>Crowdsourced Civic Issue Reporting & Resolution System</strong> is a digital initiative aimed at bridging the gap between municipal bodies and citizens. By leveraging Artificial Intelligence, Cloud Computing, and Geo-tagging, we ensure that no civic grievance goes unheard. Our mission is to build cleaner, safer, and smarter cities through transparency and community participation.
        </p>
      </div>
    </section>
  );

  // 10. Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">C</div>
            <span className="font-bold text-xl">CivicConnect</span>
          </div>
          <p className="text-sm text-gray-400">Empowering citizens to build better cities, one report at a time.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigateTo('home')} className="hover:text-blue-400">Home</button></li>
            <li><button onClick={() => navigateTo('report')} className="hover:text-blue-400">Report Issue</button></li>
            <li><button onClick={() => navigateTo('track')} className="hover:text-blue-400">Track Status</button></li>
            <li><button onClick={() => navigateTo('login')} className="hover:text-blue-400">Login</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Terms of Use</li>
            <li className="hover:text-blue-400 cursor-pointer">SLA Guidelines</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> Municipal Corp HQ, City Center</li>
            <li className="flex items-center gap-2"><Smartphone size={16}/> Helpline: 1800-CIVIC-FIX</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; 2024 CivicConnect Initiative. All rights reserved.
      </div>
    </footer>
  );

  // Added `style={{ colorScheme: 'light' }}` to prevent browsers like Opera GX from forcing an inverted dark mode
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full min-h-screen bg-white" style={{ colorScheme: 'light' }}>
      <Header />
      
      {currentPage === 'home' && (
        <main className="w-full">
          <Hero />
          <Problems />
          <HowItWorks />
          <Features />
          <LiveMap />
          <UserTypes />
          <CTA />
          <About />
        </main>
      )}

      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'report' && <ReportIssuePage />}
      {currentPage === 'track' && <TrackIssuePage />}

      <Footer />
    </div>
  );
};

export default LandingPage;