import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">ProxiD</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                AI-платформа для быстрого и эффективного подбора персонала.
                Найм как Tinder, но для поиска работы и кандидатов.
              </p>
            </motion.div>
          </div>

          {/* Contact Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Связаться с нами</h4>
              <div className="space-y-4">
                <a
                  href="https://t.me/yanadubeshko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:text-blue-400" />
                  <span>Партнерам</span>
                </a>
                <a
                  href="https://t.me/proxiDBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Bot className="w-5 h-5 group-hover:text-blue-400" />
                  <span>Бот ProxiD</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ProxiD. Все права защищены.
            </p>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm underline transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
