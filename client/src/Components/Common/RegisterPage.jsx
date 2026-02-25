import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  UserCircle2, Building2, HardHat, Mail, Lock, User,
  ArrowLeft, Eye, EyeOff, ChevronRight
} from 'lucide-react';

const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialRole = location.state?.role || 'citizen';
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (location.state?.role) {
      setSelectedRole(location.state.role);
    }
  }, [location.state?.role]);

  const roles = [
    { id: 'citizen', title: 'Citizen', icon: UserCircle2, color: 'blue' },
    { id: 'admin', title: 'Government', icon: Building2, color: 'purple' },
    { id: 'worker', title: 'Field Worker', icon: HardHat, color: 'orange' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registering as ${selectedRole}:`, formData);
  };

  return (
    <div className="w-screen h-screen bg-[#0f172a] text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Navigation */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 !bg-black text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">Back to Home</span>
        </button>
      </div>

      <div className="w-full max-w-xl relative z-10 mt-20 md:mt-0 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-10 space-y-2">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl">
              <span className="font-bold text-2xl">C</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-blue-500">CivicConnect</span>
          </div>
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-slate-400">Join us to make a difference in your city</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = selectedRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`flex flex-col items-center p-4 rounded-2xl border transition-all ${
                  isActive 
                  ? `!bg-slate-800 border-${role.color}-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]` 
                  : '!bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 ${isActive ? `bg-${role.color}-500/20 text-${role.color}-400` : 'bg-slate-800 text-slate-500'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {role.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2 text-sm text-slate-400 font-medium px-1">
              Currently registering as: <span className="text-blue-400 font-bold capitalize">{selectedRole}</span>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" name="name" required placeholder="John Doe"
                  value={formData.name} onChange={handleInputChange}
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" name="email" required placeholder="name@example.com"
                  value={formData.email} onChange={handleInputChange}
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} name="password" required placeholder="••••••••"
                  value={formData.password} onChange={handleInputChange}
                  className="w-full bg-slate-950/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl py-4 pl-12 pr-12 outline-none transition-all placeholder:text-slate-600"
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 !bg-slate-800 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full !bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group mt-4">
              Create Account
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="!bg-slate-800 text-blue-500 font-bold hover:underline">Sign In</button>
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-slate-500 text-xs">
          © 2026 CivicConnect. Secure Gateway • Encrypted Access
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;