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

  // Проверяем, было ли уже дано согласие
  React.useEffect(() => {
    const consent = localStorage.getItem('privacy-consent');
    if (consent === 'true') {
      setHasConsented(true);
      setShowConsentBlock(false);
    }
  }, []);

  // Если согласие уже дано, не показываем блок
  if (!showConsentBlock) {
    return null;
  }

  // Если согласие только что получено, показываем подтверждение один раз
  if (hasConsented) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-green-500/10 border-t border-green-500/20 p-4 text-center z-50"
      >
        <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Согласие получено</span>
        </div>
        <p className="text-gray-300 text-sm">
          Спасибо! Вы согласились с обработкой персональных данных. 
          <a 
            href="/privacy" 
            className="text-blue-400 hover:text-blue-300 underline ml-1"
          >
            Просмотреть политику
          </a>
        </p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setShowConsentBlock(false)}
          className="mt-3 text-gray-400 hover:text-white text-sm underline"
        >
          Скрыть
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-blue-600/90 border-t border-blue-500 p-3 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-3 mb-2">
          <Shield className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-1">
              Обработка персональных данных
            </h3>
            <p className="text-blue-100 text-sm mb-2">
              Для использования сервиса ProxiD необходимо согласие на обработку персональных данных. 
              Мы собираем и обрабатываем ваши данные в соответствии с законодательством Республики Беларусь 
              и нашей политикой конфиденциальности.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsent}
                className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Согласен с обработкой данных</span>
              </motion.button>
              
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-400 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Читать политику</span>
              </a>
            </div>
            
            <p className="text-blue-200 text-xs mt-2">
              Нажимая «Согласен», вы принимаете нашу политику конфиденциальности и даете согласие 
              на обработку персональных данных в соответствии с Законом РБ «О защите персональных данных».
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
