import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <main className="pt-20">
        <section id="privacy" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-lg p-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left sm:text-center">
                Пользовательское соглашение и политика конфиденциальности
              </h1>

              <div className="space-y-8 text-left">
                {/* Пользовательское соглашение */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                    1. Пользовательское соглашение
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Настоящее Пользовательское соглашение регулирует отношения между ProxiD (далее — «Сервис») и пользователем (далее — «Пользователь») при использовании платформы для поиска работы и сотрудников.
                    </p>
                    <p>
                      Используя Сервис, Пользователь соглашается с условиями настоящего соглашения. Если Пользователь не согласен с какими-либо условиями, он должен прекратить использование Сервиса.
                    </p>
                    <p>
                      Сервис предоставляет платформу для:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Поиска работы и проектов</li>
                      <li>Поиска сотрудников и специалистов</li>
                      <li>Создания профессиональных профилей</li>
                      <li>Взаимодействия между работодателями и соискателями</li>
                    </ul>
                  </div>
                </div>

                {/* Политика конфиденциальности */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                    2. Политика конфиденциальности
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Сервис собирает и обрабатывает персональные данные Пользователей в соответствии с требованиями законодательства о защите персональных данных.
                    </p>
                    <p>
                      <strong>Собираемые данные:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Контактная информация (имя, email, телефон)</li>
                      <li>Профессиональная информация (резюме, навыки, опыт)</li>
                      <li>Данные об использовании Сервиса</li>
                      <li>Техническая информация (IP-адрес, браузер)</li>
                    </ul>
                    <p>
                      <strong>Цели обработки данных:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Предоставление услуг Сервиса</li>
                      <li>Улучшение качества услуг</li>
                      <li>Обеспечение безопасности</li>
                      <li>Соблюдение законодательных требований</li>
                    </ul>
                  </div>
                </div>

                {/* Согласие на обработку */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                    3. Согласие на обработку персональных данных
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Нажимая кнопку «Согласен», Пользователь дает согласие на обработку своих персональных данных в соответствии с настоящей политикой.
                    </p>
                    <p>
                      Пользователь имеет право:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Отозвать согласие на обработку данных</li>
                      <li>Получить информацию об обработке своих данных</li>
                      <li>Требовать исправления неточных данных</li>
                      <li>Требовать удаления своих данных</li>
                    </ul>
                  </div>
                </div>

                {/* Кнопка согласия */}
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto"
                    onClick={() => {
                      // Здесь можно добавить логику для сохранения согласия
                      alert("Спасибо! Вы согласились с условиями использования.");
                    }}
                  >
                    Согласен с условиями
                  </motion.button>
                </div>

                {/* Контакты */}
                <div className="pt-6 border-t border-gray-600">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    Контакты для вопросов
                  </h3>
                  <p className="text-gray-300">
                    По всем вопросам, связанным с обработкой персональных данных, обращайтесь:{" "}
                    <a 
                      href="https://t.me/yanadubeshko" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      @yanadubeshko
                    </a>
                  </p>
                </div>

                {/* Кнопка возврата на главную */}
                <div className="pt-6">
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gray-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all"
                  >
                    ← Вернуться на главную
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
