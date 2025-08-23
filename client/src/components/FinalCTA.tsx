import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, AlertTriangle } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={ref} id="cta" className="py-20 relative" style={{ perspective: "1200px" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ scale, rotateY, transformStyle: "preserve-3d" }}
          className="glass-effect rounded-lg p-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque">
            🔥 ProxiD - найм, который{" "}
            <span className="text-gradient">не тормозит</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Мы дешевле Upwork и умнее hh.ru
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/proxiDBot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all btn-glow transform hover:scale-105 flex items-center space-x-2"
              data-testid="button-register-free"
            >
              <Rocket className="w-5 h-5" />
              <span>Зарегистрироваться бесплатно</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/proxiDBot"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-all card-hover flex items-center space-x-2"
              data-testid="button-request-demo"
            >
              <Zap className="w-5 h-5" />
              <span>Запросить демо для бизнеса</span>
            </motion.a>
          </div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4"
          >
            <span className="text-blue-400 font-semibold flex items-center justify-center space-x-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Количество мест в бета-доступе ограничено</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
