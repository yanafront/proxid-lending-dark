import React from "react";
import { motion } from "framer-motion";
import { 
  Flame, 
  Users, 
  TrendingUp, 
  Clock, 
  Star, 
  CheckCircle, 
  Zap,
  Target,
  Shield,
  Globe,
  Video,
  Award,
  DollarSign,
  Search,
  Briefcase,
  Rocket
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const marketProblems = [
  {
    icon: Clock,
    title: "Месяцы поиска сотрудников",
    description: "Средний поиск специалиста занимает 2-4 месяца. Теряете время и деньги на неэффективные рекрутинговые процессы."
  },
  {
    icon: Users,
    title: "Низкое качество кандидатов",
    description: "90% резюме не подходят требованиям. Тратите время на собеседования с неподходящими людьми."
  },
  {
    icon: Target,
    title: "Высокие рекрутинговые затраты",
    description: "Стоимость найма одного сотрудника достигает 30% от годовой зарплаты. Бюджет уходит впустую."
  }
];

const competitiveFeatures = [
  {
    icon: Zap,
    title: "AI-матчинг 89% точности",
    description: "Наш ИИ анализирует требования проекта и находит идеально подходящих кандидатов за минуты."
  },
  {
    icon: Video,
    title: "Видео-резюме кандидатов",
    description: "Видите настоящего человека, его харизму и soft skills. Никаких сюрпризов на собеседовании."
  },
  {
    icon: Shield,
    title: "Проверенные специалисты",
    description: "Все кандидаты проходят верификацию навыков. Гарантируем качество каждого специалиста."
  },
  {
    icon: Globe,
    title: "Доступ к глобальному рынку",
    description: "Находите специалистов из любой точки мира. Расширяйте команду без географических ограничений."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Найти специалиста за 1 день",
    description: "Вместо месяцев поиска получайте готовых кандидатов уже на следующий день после публикации проекта."
  },
  {
    icon: DollarSign,
    title: "Экономия до 70% на найме",
    description: "Прямые контакты с кандидатами без посредников. Снижайте рекрутинговые затраты."
  },
  {
    icon: Star,
    title: "Только подходящие кандидаты",
    description: "Получаете резюме только от тех специалистов, которые действительно подходят вашему проекту."
  },
  {
    icon: TrendingUp,
    title: "Быстрый старт проектов",
    description: "Не ждите месяцами найма. Запускайте проекты в срок с качественной командой."
  }
];

const howItWorks = [
  {
    number: "1",
    title: "Опишите проект",
    description: "Укажите требования, бюджет и сроки. Чем детальнее описание, тем точнее подбор",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "2",
    title: "AI подбирает кандидатов",
    description: "Наш ИИ анализирует рынок и находит идеально подходящих специалистов с точностью 89%",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    number: "3",
    title: "Получаете готовых кандидатов",
    description: "Кандидаты сами выходят на связь с готовностью начать работу",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    number: "4",
    title: "Выбираете лучшего",
    description: "Сравниваете предложения и выбираете специалиста, который действительно подходит",
    gradient: "from-purple-500 to-pink-600"
  },
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              <span className="text-gradient">Найди идеального</span><br />
              <span className="text-2xl md:text-4xl text-gray-300">специалиста за 1 день</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              ProxiD использует ИИ для поиска идеальных специалистов. Вместо сотен неподходящих резюме 
              получайте готовых кандидатов, которые действительно подходят вашему проекту.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="https://t.me/proxiDBot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-xl font-semibold transition-all btn-glow flex items-center space-x-3"
              >
                <Flame className="w-6 h-6" />
                <span>Найти специалиста</span>
              </a>
              
              <a
                href="/candidates"
                className="glass-effect px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all flex items-center space-x-3"
              >
                <Users className="w-6 h-6" />
                <span>Я ищу работу</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Market Problems */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Устали от <span className="text-gradient">поиска сотрудников</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Понимаем вашу боль. Тратите месяцы на поиск, а в итоге нанимаете человека, 
                который не подходит. Пора это изменить.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {marketProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Features */}
        <section className="py-20 relative bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Почему <span className="text-gradient">ProxiD</span> лучше аналогов?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                В отличие от обычных job-сайтов, мы не просто показываем резюме. 
                Мы находим специалистов, которые действительно подходят вашему проекту.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {competitiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Что вы <span className="text-gradient">получаете</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Конкретные результаты, которые изменят ваш подход к найму сотрудников
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 relative bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Как это <span className="text-gradient">работает</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Простой процесс, который изменит ваш подход к найму специалистов
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы найти <span className="text-gradient">идеального специалиста</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Присоединяйтесь к сотням компаний, которые уже нашли качественных сотрудников через ProxiD
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://t.me/proxiDBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-xl font-semibold transition-all btn-glow flex items-center space-x-3"
                >
                  <Flame className="w-6 h-6" />
                  <span>Найти специалиста</span>
                </a>
                
                <a
                  href="/candidates"
                  className="glass-effect px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all flex items-center space-x-3"
                >
                  <Users className="w-6 h-6" />
                  <span>Я ищу работу</span>
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
