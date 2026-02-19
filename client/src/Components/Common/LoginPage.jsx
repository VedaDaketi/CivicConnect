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