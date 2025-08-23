import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Clock, DollarSign, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    percentage: "67%",
    title: "Переплата за рекрутинг",
    description: "Компании тратят лишние деньги на посредников",
    color: "text-red-400",
    icon: DollarSign,
  },
  {
    percentage: "40%",
    title: "Простой сотрудников",
    description: "Время специалистов тратится впустую",
    color: "text-orange-400",
    icon: Clock,
  },
  {
    percentage: "3+",
    title: "Месяца поиска",
    description: "Специалисты ищут работу слишком долго",
    color: "text-yellow-400",
    icon: TrendingDown,
  },
  {
    percentage: "💸",
    title: "HR-агентства",
    description: "Продают воздух, а не результат",
    color: "text-red-400",
    icon: AlertTriangle,
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  
  return (
    <section ref={ref} id="pain" className="py-20 relative" style={{ perspective: "1000px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque"
          >
            Проблемы рынка, которые{" "}
            <span className="text-gradient">мешают вам расти</span>
          </motion.h2>
        </div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ y, rotateX }}>
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 card-hover transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
              data-testid={`pain-point-${index}`}
            >
              <div className={`text-4xl font-black ${point.color} mb-4`}>
                {point.percentage}
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-400 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
