import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold">ProxiD</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("solution")}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="nav-solution"
            >
              Решение
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="nav-benefits"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="nav-pricing"
            >
              Тарифы
            </button>
            <button
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-all btn-glow"
              data-testid="button-login"
            >
              Войти
            </button>
          </div>

          <button
            className="md:hidden text-white"
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
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("solution")}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              data-testid="mobile-nav-solution"
            >
              Решение
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              data-testid="mobile-nav-benefits"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              data-testid="mobile-nav-pricing"
            >
              Тарифы
            </button>
            <button
              className="block w-full text-left px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all btn-glow mt-4"
              data-testid="mobile-button-login"
            >
              Войти
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
