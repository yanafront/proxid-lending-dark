import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
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
  Award
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ConsentBlock from "../components/ConsentBlock";

const marketProblems = [
  {
    icon: Clock,
    title: "Месяцы поиска работы",
    description: "Средний поиск работы занимает 3-6 месяцев. Тратите время на бесконечные отклики и собеседования."
  },
  {
    icon: Users,
    title: "Конкуренция за вакансии",
    description: "На одну позицию претендуют 50+ кандидатов. Ваше резюме теряется в общей массе."
  },
  {
    icon: Target,
    title: "Несоответствие ожиданий",
    description: "Работа не соответствует описанию, зарплата ниже обещанной, команда не подходит."
  }
];

const competitiveFeatures = [
  {
    icon: Zap,
    title: "AI-матчинг 89% точности",
    description: "Наш ИИ анализирует ваш опыт, навыки и предпочтения, чтобы найти идеальную работу за вас."
  },
  {
    icon: Video,
    title: "Видео-резюме",
    description: "Покажите свою харизму и навыки в 60-секундном видео. Работодатели видят настоящего вас."
  },
  {
    icon: Shield,
    title: "Проверенные проекты",
    description: "Все работодатели проходят верификацию. Никаких мошенников или недобросовестных клиентов."
  },
  {
    icon: Globe,
    title: "Удаленная работа по всему миру",
    description: "Работайте из любой точки мира с компаниями из США, Европы и Азии."
  }
];

const benefits = [
  {
    icon: Rocket,
    title: "Найти работу за 3 дня",
    description: "Вместо месяцев поиска получайте предложения уже на третий день после регистрации."
  },
  {
    icon: TrendingUp,
    title: "Зарплата выше на 40%",
    description: "Прямые контакты с работодателями позволяют договориться о справедливой оплате."
  },
  {
    icon: Star,
    title: "Работа мечты",
    description: "Получайте предложения только от тех компаний, которые действительно подходят именно вам."
  },
  {
    icon: Award,
    title: "Карьерный рост",
    description: "Переходите в более крупные компании и развивайтесь быстрее конкурентов."
  }
];

const howItWorks = [
  {
    number: "1",
    title: "Создайте профиль",
    description: "Заполните анкету, загрузите видео-резюме и укажите желаемую зарплату",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "2",
    title: "AI находит работу",
    description: "Наш ИИ анализирует рынок и подбирает идеальные вакансии с точностью 89%",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    number: "3",
    title: "Получаете предложения",
    description: "Работодатели сами выходят на связь с конкретными предложениями",
    gradient: "from-purple-400 to-sky-500",
  },
  {
    number: "4",
    title: "Выбираете лучшее",
    description: "Сравниваете условия и выбираете работу, которая действительно подходит",
    gradient: "from-purple-500 to-sky-600"
  },
];

export default function Candidates() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-sky-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              <span className="text-gradient">Найди работу мечты</span><br />
              <span className="text-2xl md:text-4xl text-gray-300">за 3 дня, а не за 3 месяца</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              ProxiD использует ИИ для поиска идеальной работы. Вместо сотен откликов 
              получайте конкретные предложения от работодателей, которые действительно хотят вас нанять.
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
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3"
              >
                <Rocket className="w-6 h-6" />
                <span>Начать поиск работы</span>
              </a>
              
              <a
                href="/projects"
                className="glass-effect px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all flex items-center space-x-3"
              >
                <Users className="w-6 h-6" />
                <span>Я работодатель</span>
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
                Устали от <span className="text-gradient">поиска работы</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Понимаем вашу боль. Тратите месяцы на поиск, а в итоге получаете работу, 
                которая не подходит. Пора это изменить.
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
                В отличие от обычных job-сайтов, мы не просто показываем вакансии. 
                Мы находим работу, которая действительно подходит именно вам.
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
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-400" />
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
                Конкретные результаты, которые изменят вашу карьеру к лучшему
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
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
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
                Простой процесс, который изменит ваш подход к поиску работы
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
                Готовы найти <span className="text-gradient">работу мечты</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Присоединяйтесь к тысячам кандидатов, которые уже нашли идеальную работу через ProxiD
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://t.me/proxiDBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition-all btn-glow flex items-center justify-center space-x-3"
                >
                  <Rocket className="w-6 h-6" />
                  <span>Начать поиск работы</span>
                </a>
                
                <a
                  href="/projects"
                  className="glass-effect px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all flex items-center space-x-3"
                >
                  <Users className="w-6 h-6" />
                  <span>Я работодатель</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
      <ConsentBlock />
    </>
  );
}
