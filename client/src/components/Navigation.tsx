import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg logo" style={{color: "#fff !important"}}>P</span>
            </div>
            <span className="text-xl font-bold text-black dark:text-white">ProxiD</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/candidates"
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Ищу работу
            </a>
            <a
              href="/projects"
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Ищу специалистов
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 bg-blue-100 hover:bg-blue-200 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
              title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            {/*<button*/}
            {/*  onClick={() => scrollToSection("pricing")}*/}
            {/*  className="text-gray-300 hover:text-white transition-colors"*/}
            {/*  data-testid="nav-pricing"*/}
            {/*>*/}
            {/*  Тарифы*/}
            {/*</button>*/}
          </div>

          <button
            className="md:hidden text-white dark:text-white text-slate-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect border-t border-white/10 dark:border-white/10 border-blue-200 dark:border-white/10"
        >
          <div className="w-full">
            <a
              href="/candidates"
              className="block w-full py-4 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors text-center border-b border-white/10 dark:border-white/10 border-gray-200 dark:border-white/10"
            >
              Ищу работу
            </a>
            <a
              href="/projects"
              className="block w-full py-4 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors text-center border-b border-white/10 dark:border-white/10 border-gray-200 dark:border-white/10"
            >
              Ищу специалистов
            </a>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-full py-4 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 transition-colors"
              title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            {/*<button*/}
            {/*  onClick={() => scrollToSection("pricing")}*/}
            {/*  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"*/}
            {/*  data-testid="mobile-nav-pricing"*/}
            {/*>*/}
            {/*  Тарифы*/}
            {/*</button>*/}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
