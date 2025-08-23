import React from "react";
import { motion } from "framer-motion";

const businessCase = {
  initial: "B",
  type: "Бизнес-кейс",
  quote: "Мы закрыли вакансию за 2 дня вместо 2 месяцев",
  description:
    "Экономия на HR составила $18,000 в год. Теперь мы находим нужных специалистов в разы быстрее и качественнее.",
  author: "Михаил С.",
  position: "CEO TechStart",
  avatar: "👨‍💼",
};

const specialistCase = {
  initial: "S",
  type: "Специалист",
  quote: "Нашёл проект за неделю",
  description:
    "Фриланс через ProxiD приносит в 2 раза больше. Больше не нужно тратить месяцы на поиск хороших заказчиков.",
  author: "Анна К.",
  position: "UX/UI Designer",
  avatar: "👩‍🎨",
};

const stats = [
  { value: "500+", description: "Специалистов нашли работу" },
  { value: "89%", description: "Точность AI-матчинга" },
  { value: "$20K", description: "Средняя экономия в год" },
];

export default function SocialProof() {
  return (
    <section id="proof" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque"
          >
            Доверяют <span className="text-gradient">другие</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Если это сработало у них, сработает и у тебя
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Business Case */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8 card-hover"
            data-testid="business-case"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">
                    {businessCase.initial}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{businessCase.type}</span>
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "{businessCase.quote}"
              </blockquote>
              <p className="text-gray-400">{businessCase.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl">
                {businessCase.avatar}
              </div>
              <div>
                <div className="font-semibold">{businessCase.author}</div>
                <div className="text-sm text-gray-400">{businessCase.position}</div>
              </div>
            </div>
          </motion.div>

          {/* Specialist Case */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8 card-hover"
            data-testid="specialist-case"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-sm">
                    {specialistCase.initial}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{specialistCase.type}</span>
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "{specialistCase.quote}"
              </blockquote>
              <p className="text-gray-400">{specialistCase.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-xl">
                {specialistCase.avatar}
              </div>
              <div>
                <div className="font-semibold">{specialistCase.author}</div>
                <div className="text-sm text-gray-400">{specialistCase.position}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
