import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Flame,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Shield,
  Video,
  TrendingUp,
  Clock
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const features = [
  {
    icon: Zap,
    title: "AI-матчинг 89% точности",
    description: "Наш ИИ анализирует требования и навыки, чтобы найти идеальное совпадение"
  },
  {
    icon: Video,
    title: "Видео-резюме",
    description: "Видите настоящего человека, его харизму и soft skills"
  },
  {
    icon: Shield,
    title: "Проверенные участники",
    description: "Все кандидаты и работодатели проходят верификацию"
  },
  {
    icon: Globe,
    title: "Глобальный рынок",
    description: "Работайте с людьми из любой точки мира"
  }
];

const stats = [
  { number: "89%", label: "Точность AI-матчинга" },
  { number: "3 дня", label: "Среднее время найма" },
  { number: "70%", label: "Экономия на рекрутинге" },
  { number: "1000+", label: "Успешных наймов" }
];

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 leading-tight px-2"
            >
              <span className="text-gradient">Мы соединяем -</span><br />
              <span className="text-xl sm:text-2xl md:text-4xl text-gray-300">ты выбираешь</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto px-2"
            >
              Платформа обмена талантами на базе ИИ, где работа и кандидаты находит тебя. 
              Свайпай, знакомься, собирай команду, находи работу мечты за минуты, а не месяцы.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 w-full px-4 sm:px-0"
            >
              <a
                href="/candidates"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Найти сотрудников</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/projects"
                className="w-full sm:w-auto bg-purple-600 dark:bg-white/20 hover:bg-purple-700 dark:hover:bg-white/30 px-6 sm:px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Найти проект</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Почему <span className="text-gradient">ProxiD</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Мы не просто еще один job-сайт. Мы революционизируем процесс найма и поиска работы
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-12 sm:py-20 relative bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Кто вы? <span className="text-gradient">Выберите свой путь</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ProxiD работает для обеих сторон рынка труда. Выберите, что вам нужно
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* For Candidates */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
              >
                <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Ищу работу</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Устали от месяцев поиска? Получите предложения от работодателей за 3 дня
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>AI-матчинг с точностью 89%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Видео-резюме для лучшего впечатления</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Прямые контакты с работодателями</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Зарплата выше на 40%</span>
                  </li>
                </ul>
                <a
                  href="/candidates"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-4 rounded-xl text-lg font-semibold transition-all btn-glow group shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Начать поиск работы</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* For Employers */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-white/10 dark:to-gray-300/10 hover:from-purple-500/20 hover:to-pink-500/20 dark:hover:from-white/20 dark:hover:to-gray-300/20 transition-all"
              >
                                  <div className="w-24 h-24 bg-purple-600/20 dark:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Flame className="w-12 h-12 text-purple-400 dark:text-white" />
                  </div>
                <h3 className="text-3xl font-bold mb-4">Ищу специалистов</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Тратите месяцы на поиск? Наймите идеального сотрудника за 1 день
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>AI подбирает идеальных кандидатов</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Видео-резюме для оценки soft skills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Экономия до 70% на рекрутинге</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Быстрый старт проектов</span>
                  </li>
                </ul>
                <a
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-purple-600 dark:bg-white/20 hover:bg-purple-700 dark:hover:bg-white/30 px-6 sm:px-8 py-4 rounded-xl text-lg font-semibold transition-all btn-glow group shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Найти специалиста</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
                Готовы <span className="text-gradient">изменить рынок труда</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-2">
                Присоединяйтесь к тысячам пользователей, которые уже нашли работу мечты или идеальных сотрудников
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <a
                  href="/candidates"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Найти работу</span>
                </a>
                
                <a
                  href="/projects"
                  className="w-full sm:w-auto bg-purple-600 dark:bg-white/20 hover:bg-purple-700 dark:hover:bg-white/30 px-6 sm:px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Найти специалиста</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
