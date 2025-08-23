import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

const productLinks = [
  "Для бизнеса",
  "Для специалистов", 
  "API",
  "Интеграции",
];

const supportLinks = [
  "Помощь",
  "Документация",
  "Блог",
  "Контакты",
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
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
                Найм как Tinder, но с искусственным интеллектом.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition-all btn-glow"
                data-testid="button-partnership"
              >
                Подать заявку на сотрудничество
              </motion.button>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-gray-400">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    data-testid={`footer-product-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    data-testid={`footer-support-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 ProxiD. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
