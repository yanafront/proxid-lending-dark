import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Свайпни",
    description: "Подходящую вакансию или кандидата",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "2",
    title: "AI-матчинг",
    description: "Получи точность 89%",
    gradient: "from-gray-500 to-gray-600",
  },
  {
    number: "3",
    title: "Видео-резюме",
    description: "Смотри и принимай решение",
    gradient: "from-white to-gray-300",
  },
  {
    number: "4",
    title: "Заключай сделку",
    description: "И следи за результатом в аналитике",
    gradient: "from-blue-600 to-blue-700"
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque"
          >
            Как это <span className="text-gradient">работает</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Снимаем страх «как это всё работает»
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
