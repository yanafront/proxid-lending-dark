import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "FREE",
    period: "",
    description: "Для стажёров",
    features: [
      "Базовый профиль",
      "5 свайпов в день",
      "Базовые фильтры",
    ],
    buttonText: "Начать бесплатно",
    buttonStyle: "glass-effect hover:bg-white/10",
    popular: false,
  },
  {
    name: "Basic",
    price: "$15",
    period: "/мес",
    description: "Для специалистов",
    features: [
      "Расширенный профиль",
      "Безлимитные свайпы",
      "Видео-резюме",
      "AI-рекомендации",
    ],
    buttonText: "Выбрать план",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 btn-glow",
    popular: false,
    note: "Цена ниже 1% от зарплаты сотрудника",
  },
  {
    name: "Pro",
    price: "$199",
    period: "/мес",
    description: "Для бизнеса",
    features: [
      "Корпоративный аккаунт",
      "Неограниченный поиск",
      "Аналитика и отчёты",
      "Доска бенча",
      "Поддержка 24/7",
    ],
    buttonText: "Запросить демо",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 btn-glow",
    popular: true,
    note: "Окупаемость в первый месяц",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={ref} id="pricing" className="py-20 relative" style={{ perspective: "1000px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-grotesque"
          >
            Убираем барьер <span className="text-gradient">входа</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: plan.popular ? 0 : (index === 0 ? 5 : -5),
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d", y, rotateX }}
              className={`glass-effect rounded-lg p-8 card-hover relative ${
                plan.popular ? "border-2 border-blue-500/50" : ""
              }`}
              data-testid={`pricing-plan-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Популярный</span>
                  </span>
                </div>
              )}

              <div className={`text-center mb-6 ${plan.popular ? "mt-4" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-black mb-2">
                  {plan.price}
                  <span className="text-lg font-normal">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("cta")}
                className={`w-full py-3 rounded-xl transition-all ${plan.buttonStyle}`}
                data-testid={`button-plan-${index}`}
              >
                {plan.buttonText}
              </motion.button>

              {plan.note && (
                <div className="text-center mt-4">
                  <span className={`text-xs ${plan.name === "Pro" ? "text-green-400" : "text-gray-400"}`}>
                    {plan.note}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
