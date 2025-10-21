import React, { type ReactNode } from "react";

interface FormContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ title, subtitle, children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 transition-colors pt-20 relative overflow-hidden">
      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="currentColor" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" className="text-amber-600"/>
        </svg>
      </div>

      {/* Floating Bee Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-40">🐝</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-30">🌻</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-bounce opacity-30" style={{animationDelay: '1s'}}>🍯</div>
        <div className="absolute bottom-20 right-32 text-4xl animate-pulse opacity-40" style={{animationDelay: '0.5s'}}>🐝</div>
      </div>

      <div className="relative w-full max-w-md bg-gradient-to-br from-white via-amber-50 to-yellow-100 rounded-3xl shadow-2xl p-8 mx-4 border-4 border-amber-500">
        {/* Hexagon Badge at Top */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <svg width="96" height="110" viewBox="0 0 96 110" className="drop-shadow-2xl">
              <path d="M48 5L88 28V74L48 97L8 74V28L48 5Z" fill="url(#hexGradient)" stroke="#d97706" strokeWidth="3"/>
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🐝</span>
            </div>
          </div>
        </div>

        {/* Honey Drip Divider */}
        <div className="flex justify-center mb-6 mt-10">
          <svg width="120" height="24" viewBox="0 0 120 24" className="opacity-80">
            <path d="M0 4 Q30 0, 60 4 T120 4" fill="none" stroke="#f59e0b" strokeWidth="3"/>
            <circle cx="30" cy="4" r="4" fill="#fbbf24"/>
            <circle cx="60" cy="4" r="5" fill="#f59e0b"/>
            <circle cx="90" cy="4" r="4" fill="#fbbf24"/>
            <path d="M60 4 L60 16 Q60 20, 56 20 Q60 20, 64 20 Q60 20, 60 16 Z" fill="#f59e0b" opacity="0.8"/>
          </svg>
        </div>

        {/* Title Section with Bee Theme */}
        {title && (
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent mb-3 text-center drop-shadow-sm">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-amber-800 mb-8 text-center font-medium flex items-center justify-center gap-2">
            <span className="text-lg">🌼</span>
            {subtitle}
            <span className="text-lg">🌼</span>
          </p>
        )}

        {/* Form Content */}
        <div className="space-y-6">
          {children}
        </div>

        {/* Honeycomb Footer */}
        <div className="mt-8 pt-6 border-t-2 border-amber-300">
          <div className="flex justify-center gap-2">
            <svg width="24" height="28" viewBox="0 0 24 28" className="animate-pulse">
              <path d="M12 2L22 8V20L12 26L2 20V8L12 2Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
            </svg>
            <svg width="24" height="28" viewBox="0 0 24 28" className="animate-pulse" style={{animationDelay: '0.2s'}}>
              <path d="M12 2L22 8V20L12 26L2 20V8L12 2Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5"/>
            </svg>
            <svg width="24" height="28" viewBox="0 0 24 28" className="animate-pulse" style={{animationDelay: '0.4s'}}>
              <path d="M12 2L22 8V20L12 26L2 20V8L12 2Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="text-center text-xs text-amber-700 mt-3 font-semibold tracking-wide">
            🍯 ONE MILLION BEE INITIATIVE 🍯
          </p>
        </div>

        {/* Corner Honey Drops */}
        <div className="absolute top-6 right-6 w-3 h-4 bg-amber-400 rounded-full opacity-60 shadow-lg"></div>
        <div className="absolute top-10 right-8 w-2 h-3 bg-yellow-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-6 left-6 w-4 h-5 bg-amber-500 rounded-full opacity-60 shadow-lg"></div>
        <div className="absolute bottom-12 left-9 w-2 h-3 bg-yellow-400 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default FormContainer;