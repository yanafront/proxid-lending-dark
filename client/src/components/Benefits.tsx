import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, DollarSign, Tag, Unlock, Rocket, TrendingUp, Timer } from "lucide-react";

const businessBenefits = [
  {
    icon: Clock,
    title: "Подбор быстрее на 60%",
            description: "Вместо 2 месяцев - 2 недели",
  },
  {
    icon: DollarSign,
    title: "Экономия от 500$",
    description: "На HR-агентствах и рекрутинге",
  },
  {
    icon: Tag,
    title: "На 60% дешевле HR-агентств",
    description: "Прозрачное ценообразование",
  },
  {
    icon: Unlock,
    title: "Временные сотрудники",
    description: "Доступ в пару кликов",
  },
];

const specialistBenefits = [
  {
    icon: Rocket,
    title: "70% стажёров находят работу",
    description: "Быстрый старт карьеры",
  },
  {
    icon: TrendingUp,
    title: "+50% к доходу фрилансеров",
    description: "Прямые контакты с клиентами",
  },
  {
    icon: Timer,
    title: "Экономия 60% времени",
    description: "На поиск подходящих проектов",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section ref={ref} id="benefits" className="py-20 relative" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-center text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque text-left sm:text-center"
          >
            Выгоды, которые{" "}
            <span className="text-gradient">нельзя игнорировать</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Business */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ rotateY: 5, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ x: leftX, rotateX, transformStyle: "preserve-3d" }}
            className="glass-effect rounded-lg p-8 card-hover"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-500 text-left sm:text-center">Для бизнеса</h3>
            <div className="space-y-6">
              {businessBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4" data-testid={`business-benefit-${index}`}>
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold">{benefit.title}</div>
                      <div className="text-gray-400 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* For Specialists */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ rotateY: -5, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ x: rightX, rotateX, transformStyle: "preserve-3d" }}
            className="glass-effect rounded-lg p-8 card-hover"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-left sm:text-center">Для специалистов</h3>
            <div className="space-y-6">
              {specialistBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4" data-testid={`specialist-benefit-${index}`}>
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{benefit.title}</div>
                      <div className="text-gray-400 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-500/10 rounded-lg p-4 mt-6">
              <div className="text-center sm:text-center text-left">
                <div className="text-lg font-semibold text-green-400">💡 Триггер</div>
                <div className="text-sm text-gray-300 mt-2">
                  "Ты не теряешь деньги - ты их экономишь прямо сейчас"
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
