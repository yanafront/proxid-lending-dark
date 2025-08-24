import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Video, Hand, RefreshCw, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-алгоритм: точность 89%",
    description: "Машинное обучение находит идеальные совпадения",
  },
  {
    icon: Video,
    title: "Видео-резюме",
    description: "Кандидаты «живые», а не сухие PDF",
  },
  {
    icon: Hand,
    title: "Свайпы",
    description: "Найм стал интуитивным",
  },
  {
    icon: RefreshCw,
    title: "Обмен сотрудниками",
    description: "Между компаниями на временной основе",
  },
  {
    icon: BarChart3,
    title: "Автоматическая аналитика",
    description: "И отчёты для принятия решений",
  },
  {
    icon: Users,
    title: "Доска бенча",
    description: "Контроль ресурсов в реальном времени",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={ref} id="solution" className="py-8 lg:py-20 relative" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-grotesque"
          >
            Найм, который работает как{" "}
            <span className="text-gradient">Tinder, но с AI</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" style={{ y: leftY, rotateY }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                  data-testid={`feature-${index}`}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y: rightY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="w-full max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="bg-netflix-dark rounded-lg p-6 glass-effect">
                <div className="bg-netflix-gray rounded-lg p-4 mb-4">
                  {/* Mock Profile Card */}
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <h4 className="font-semibold">Алексей К.</h4>
                    <p className="text-sm text-gray-400">Senior Frontend Developer</p>
                    <div className="flex justify-center items-center mt-2">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        AI Match: 94%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">React, TypeScript</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">5+ лет опыта</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Удаленно</span>
                      <span className="text-green-400">✓</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center hover:bg-red-500/30 transition-colors"
                    data-testid="swipe-reject"
                  >
                    ✗
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotateZ: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-testid="swipe-accept"
                  >
                    ✓
                  </motion.button>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm"
              >
                Match!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
