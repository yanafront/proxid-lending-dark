import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Rocket, Flame } from "lucide-react";

const swipeMessages = [
  { text: "✅ Кандидат найден", match: "94%" },
  { text: "✅ Проект найден", match: "89%" },
  { text: "✅ Матч найден", match: "92%" },
];

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % swipeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="hero-glow absolute inset-0"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 15, 0],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]),
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, -15, 0],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]),
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-600/5 to-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            rotateZ: [0, 360],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]),
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight font-grotesque">
            <span className="text-gradient block"><span>Мы соединяем - <br /> ты выбираешь</span></span>

          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-light">
            Платформа обмена талантами на базе ИИ,<br /> где работа и кандидаты находит тебя.<br/>{" "}
            Свайпай, знакомься, собирай команду,<br/> находи работу мечты <strong>за минуты</strong>, а не месяцы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/proxiDBot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all btn-glow flex items-center space-x-2"
              data-testid="button-find-employees"
            >
              <Rocket className="w-5 h-5" />
              <span>Найти сотрудников</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/proxiDBot"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-all card-hover flex items-center space-x-2"
              data-testid="button-find-project"
              style={{background: '#000000c4'}}
            >
              <Flame className="w-5 h-5" />
              <span>Найти проект</span>
            </motion.a>
          </div>

          {/* Animated Swipe Demo */}
          <div className="relative w-80 h-20 mx-auto glass-effect rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-lg font-semibold text-green-400">
                    {swipeMessages[currentMessage].text}
                  </div>
                  <div className="text-sm text-gray-400">
                    AI-матчинг: {swipeMessages[currentMessage].match}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
