import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Camera, MapPin, ShieldCheck, ArrowRight, BarChart3, 
  Users, UserCircle2, Building2, HardHat, CheckCircle2,
  Activity, AlertTriangle, Search, ChevronRight
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  // Helper function to navigate to login with a specific role
  const handleLogin = (role = 'citizen') => {
    navigate('/login', { state: { role } });
  };

  return (
    <div className="w-screen min-h-screen bg-[#0f172a] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <span className="font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-500">CivicConnect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium hover:text-blue-400 transition-colors !bg-black px-4 py-2 rounded-lg">Home</button>
            <button className="text-sm font-medium hover:text-blue-400 transition-colors !bg-black px-4 py-2 rounded-lg">How It Works</button>
            <button className="text-sm font-medium hover:text-blue-400 transition-colors !bg-black px-4 py-2 rounded-lg">About</button>
            <button className="text-sm font-medium hover:text-blue-400 transition-colors !bg-black px-4 py-2 rounded-lg">Track Issue</button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleLogin('citizen')}
              className="text-sm font-medium hover:text-blue-400 transition-colors !bg-black px-4 py-2 rounded-lg"
            >
              Login
            </button>
            <button className="text-sm font-medium hover:text-orange-400 transition-colors !bg-black px-4 py-2 rounded-lg hover:border-blue-500 flex items-center gap-2 transition-all">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              Report Issue
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              AI-Powered Civic Management
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Report Civic Issues. <br />
              <span className="text-blue-500">Track Resolution.</span> <br />
              Improve Your City.
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              A transparent, AI-driven platform connecting citizens with the government to solve urban problems like potholes, waste, and lighting in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="!bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all group">
                <Camera className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                Report an Issue
              </button>
              <button className="!bg-transparent border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all group">
                <Search className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                Track Complaint
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="flex justify-between items-start mb-12">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Status</div>
                    <div className="font-bold text-emerald-400">Pothole Repaired</div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-900/50 rounded-2xl border border-slate-700 flex items-center justify-center mb-8">
                 <MapPin className="w-16 h-16 text-slate-700 opacity-20" />
              </div>
              <div className="flex justify-end">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Avg Response</div>
                    <div className="font-bold text-orange-400">24 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background blobs for depth */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
      </section>

      {/* Why This System Needed */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Why This System is Needed?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Traditional reporting is slow, opaque, and uncoordinated. We tackle the most common civic issues head-on.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Potholes', color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { title: 'Garbage Overflow', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            { title: 'Water Logging', color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { title: 'Streetlights', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:border-blue-500/50 transition-all text-center group">
              <div className={`w-12 h-12 ${item.bg} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <div className={`w-6 h-1 bg-current ${item.color} rounded-full`}></div>
              </div>
              <h3 className="font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">Workflow</span>
          <h2 className="text-4xl font-bold">How It Works</h2>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center relative z-10">
            {[
              { id: '01', icon: Camera, title: 'Report', desc: 'Citizen snaps a photo & tags location.' },
              { id: '02', icon: Activity, title: 'AI Routing', desc: 'System classifies & assigns department.' },
              { id: '03', icon: UserCircle2, title: 'Assignment', desc: 'Field worker gets the task on app.' },
              { id: '04', icon: CheckCircle2, title: 'Resolution', desc: 'Worker uploads "After" photo proof.' },
              { id: '05', icon: AlertTriangle, title: 'Notification', desc: 'Citizen gets alerted of fix.' },
            ].map((step, i) => (
              <div key={i} className="space-y-6">
                <div className="relative inline-block">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 rounded-full text-[10px] flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                  <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mx-auto text-blue-400">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Transparency */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold leading-tight">Built for Transparency & Speed</h2>
            <div className="space-y-8">
              {[
                { title: 'AI-Based Classification', desc: 'Automatically detects issue type from images using Computer Vision.' },
                { title: 'Real-Time Tracking', desc: 'Track the exact status of your complaint from submission to closure.' },
                { title: 'Proof-of-Work', desc: 'Mandatory before/after photos ensure the work is actually done.' },
                { title: 'Department Dashboards', desc: 'Dedicated analytics for government officials to monitor performance.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-12">
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 hover:border-blue-500/50 transition-colors">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Faster Resolution</div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 hover:border-purple-500/50 transition-colors">
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  <div className="text-3xl font-bold">50k+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Active Citizens</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 hover:border-emerald-500/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Verified Fixes</div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 hover:border-rose-500/50 transition-colors">
                <MapPin className="w-8 h-8 text-rose-400" />
                <div>
                  <div className="text-3xl font-bold">12k</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Issues Solved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Issue Heatmap */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Live Issue Heatmap</h2>
            <p className="text-slate-400">Transparency in action. View issues reported in your area.</p>
          </div>
          <button className="!bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all group">
            View Full Map
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[url('[https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg](https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg)')] bg-center bg-no-repeat bg-contain"></div>
            
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-ping [animation-delay:1s]"></div>
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-ping [animation-delay:0.5s]"></div>
            
            <div className="absolute bottom-8 left-8 bg-[#0f172a]/90 backdrop-blur border border-slate-700 p-4 rounded-2xl flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div> Open
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div> In Progress
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div> Resolved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Who is this for?</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              roleId: 'citizen',
              icon: UserCircle2, 
              title: 'Citizens', 
              desc: 'Report issues, track status, and rate the resolution quality.', 
              btn: 'Login as Citizen', 
              color: 'text-blue-500', 
              bg: 'bg-blue-500/10' 
            },
            { 
              roleId: 'admin',
              icon: Building2, 
              title: 'Government', 
              desc: 'Manage departments, view analytics, and oversee zone performance.', 
              btn: 'Official Login', 
              color: 'text-purple-500', 
              bg: 'bg-purple-500/10' 
            },
            { 
              roleId: 'worker',
              icon: HardHat, 
              title: 'Field Workers', 
              desc: 'Receive tasks, navigate to locations, and upload proof of work.', 
              btn: 'Worker Login', 
              color: 'text-orange-500', 
              bg: 'bg-orange-500/10' 
            },
          ].map((role, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 p-10 rounded-3xl text-center space-y-6 hover:border-slate-500 transition-all flex flex-col items-center">
              <div className={`w-16 h-16 ${role.bg} ${role.color} rounded-2xl flex items-center justify-center`}>
                <role.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">{role.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {role.desc}
              </p>
              <button 
                onClick={() => handleLogin(role.roleId)}
                className="text-sm font-bold !bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                {role.btn}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl font-bold leading-tight">
            Be a Responsible Citizen. <br /> Help Improve Your City.
          </h2>
          <p className="text-blue-100 text-xl">
            Join thousands of others making a difference today. It only takes a minute to report.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="!bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Report an Issue Now
            </button>
            <button 
              onClick={() => handleLogin('citizen')}
              className="!bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl"
            >
              Login to Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#0f172a] border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <h2 className="text-3xl font-bold">About The Initiative</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            The <span className="text-white font-bold">Crowdsourced Civic Issue Reporting & Resolution System</span> is a digital initiative aimed at bridging the gap between municipal bodies and citizens. By leveraging Artificial Intelligence, Cloud Computing, and Geo-tagging, we ensure that no civic grievance goes unheard. Our mission is to build cleaner, safer, and smarter cities through transparency and community participation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-slate-800 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <span className="font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-blue-500">CivicConnect</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering citizens to build better cities, one report at a time.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black px-4 py-2 rounded-lg text-sm">Home</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black">Report Issue</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black">Track Status</button></li>
              <li>
                <button 
                  onClick={() => handleLogin('citizen')}
                  className="text-slate-400 hover:text-white transition-colors !bg-black"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black">Privacy Policy</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black">Terms of Use</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors !bg-black">SLA Guidelines</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Municipal Corp HQ, City Center</span>
              </li>
              <li className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Helpline: 1800-CIVIC-FIX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2026 CivicConnect Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;