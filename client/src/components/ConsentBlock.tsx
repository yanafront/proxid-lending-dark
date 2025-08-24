import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ExternalLink } from "lucide-react";

export default function ConsentBlock() {
  const [hasConsented, setHasConsented] = useState(false);

  const handleConsent = () => {
    setHasConsented(true);
    // Здесь можно добавить логику для сохранения согласия в localStorage или отправки на сервер
    localStorage.setItem('privacy-consent', 'true');
    localStorage.setItem('consent-date', new Date().toISOString());
  };

  // Проверяем, было ли уже дано согласие
  React.useEffect(() => {
    const consent = localStorage.getItem('privacy-consent');
    if (consent === 'true') {
      setHasConsented(true);
    }
  }, []);

  if (hasConsented) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center"
      >
        <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Согласие получено</span>
        </div>
        <p className="text-gray-300 text-sm">
          Вы уже согласились с обработкой персональных данных. 
          <a 
            href="/privacy" 
            className="text-blue-400 hover:text-blue-300 underline ml-1"
          >
            Просмотреть политику
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6"
    >
      <div className="flex items-start space-x-3 mb-4">
        <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Обработка персональных данных
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Для использования сервиса ProxiD необходимо согласие на обработку персональных данных. 
            Мы собираем и обрабатываем ваши данные в соответствии с законодательством Республики Беларусь 
            и нашей политикой конфиденциальности.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleConsent}
              className="bg-blue-600 px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Согласен с обработкой данных</span>
            </motion.button>
            
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Читать политику</span>
            </a>
          </div>
          
          <p className="text-gray-400 text-xs mt-3">
            Нажимая «Согласен», вы принимаете нашу политику конфиденциальности и даете согласие 
            на обработку персональных данных в соответствии с Законом РБ «О защите персональных данных».
          </p>
        </div>
      </div>
    </motion.div>
  );
}
