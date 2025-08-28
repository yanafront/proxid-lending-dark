import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ExternalLink } from "lucide-react";

export default function ConsentBlock() {
  const [hasConsented, setHasConsented] = useState(false);
  const [showConsentBlock, setShowConsentBlock] = useState(true);

  const handleConsent = () => {
    setHasConsented(true);
    setShowConsentBlock(false);
    // Сохраняем согласие в localStorage
    localStorage.setItem('privacy-consent', 'true');
    localStorage.setItem('consent-date', new Date().toISOString());
  };

  const resetConsent = () => {
    localStorage.removeItem('privacy-consent');
    localStorage.removeItem('consent-date');
    setHasConsented(false);
    setShowConsentBlock(true);
  };

  // Проверяем, было ли уже дано согласие
  React.useEffect(() => {
    const consent = localStorage.getItem('privacy-consent');
    const consentDate = localStorage.getItem('consent-date');
    console.log('ConsentBlock: localStorage consent =', consent);
    console.log('ConsentBlock: localStorage consent-date =', consentDate);
    
    if (consent === 'true') {
      console.log('ConsentBlock: согласие найдено, скрываем блок');
      setHasConsented(true);
      setShowConsentBlock(false);
    } else {
      console.log('ConsentBlock: согласие не найдено, показываем блок');
      setShowConsentBlock(true);
    }
  }, []);

  // Если согласие уже дано, не показываем блок
  if (!showConsentBlock) {
    console.log('ConsentBlock: не показываем, showConsentBlock = false');
    return null;
  }

  // Если согласие только что получено, показываем подтверждение один раз
  if (hasConsented) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-green-500/10 dark:bg-green-500/10 bg-green-100 dark:bg-green-500/10 border-t border-green-500/20 dark:border-green-500/20 border-green-300 dark:border-green-500/20 p-4 text-center z-50"
      >
        <div className="flex items-center justify-center space-x-2 text-green-400 dark:text-green-400 text-green-600 dark:text-green-400 mb-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Согласие получено</span>
        </div>
        <p className="text-gray-300 dark:text-gray-300 text-gray-700 dark:text-gray-300 text-sm">
          Спасибо! Вы согласились с обработкой персональных данных.
          <a
            href="/privacy"
            className="text-blue-400 dark:text-blue-400 text-blue-600 dark:text-blue-400 hover:text-blue-300 dark:hover:text-blue-300 underline ml-1"
          >
            Просмотреть политику
          </a>
        </p>
                  <div className="flex justify-center space-x-4 mt-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={() => setShowConsentBlock(false)}
              className="text-gray-400 dark:text-gray-400 text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:text-gray-800 dark:hover:text-white text-sm underline"
            >
              Скрыть
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              onClick={resetConsent}
              className="text-red-400 dark:text-red-400 text-red-600 dark:text-red-400 hover:text-red-300 dark:hover:text-red-300 hover:text-red-700 dark:hover:text-red-300 text-sm underline"
            >
              Сбросить согласие
            </motion.button>
          </div>
      </motion.div>
    );
  }

  console.log('ConsentBlock: рендерим основной блок');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-black/90 dark:bg-black/90 bg-white/95 dark:bg-black/90 backdrop-blur-md border-t border-gray-600 dark:border-gray-600 border-gray-200 dark:border-gray-600 p-3 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-3 mb-2">
          <Shield className="w-5 h-5 text-blue-200 dark:text-blue-200 text-blue-600 dark:text-blue-200 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white dark:text-white text-gray-900 dark:text-white mb-1">
              Обработка персональных данных
            </h3>
            <p className="text-blue-100 dark:text-blue-100 text-blue-600 dark:text-blue-100 text-sm mb-2">
              Для использования сервиса необходимо согласие на обработку персональных данных.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsent}
                className="bg-white dark:bg-white text-blue-600 dark:text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Согласен с обработкой данных</span>
              </motion.button>

              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 dark:bg-blue-500 text-white dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-400 dark:hover:bg-blue-400 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Читать политику</span>
              </a>
            </div>

            <p className="text-blue-200 dark:text-blue-200 text-blue-600 dark:text-blue-200 text-xs mt-2">
              Нажимая «Согласен», вы принимаете нашу политику конфиденциальности и даете согласие
              на обработку персональных данных в соответствии с Законом РБ «О защите персональных данных».
            </p>
            
            {/* Кнопка для разработчиков */}
            <div className="mt-3 pt-2 border-t border-gray-600 dark:border-gray-600 border-gray-300 dark:border-gray-600">
              <button
                onClick={resetConsent}
                className="text-gray-400 dark:text-gray-400 text-gray-600 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-300 text-xs underline"
                title="Сбросить согласие (для разработчиков)"
              >
                Сбросить согласие
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
