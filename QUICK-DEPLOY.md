# 🚀 Быстрый деплой на Vercel

## ⚡ 1-2-3 Деплой

### 1. Подключите GitHub к Vercel
- Зайдите на [vercel.com](https://vercel.com)
- Нажмите "New Project"
- Выберите ваш репозиторий `new-proxi-landing`

### 2. Настройки проекта
```
Framework Preset: Vite
Root Directory: ./
Build Command: cd client && npm install && npm run build
Output Directory: client/dist
Install Command: cd client && npm install
```

### 3. Деплой!
- Нажмите "Deploy"
- Готово! 🎉

## 🔧 Альтернатива: CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📁 Что деплоится

✅ **Клиентская часть** - React + Vite приложение  
✅ **Статические файлы** - CSS, JS, изображения  
❌ **Серверная часть** - Express сервер (не нужен для статики)  
❌ **База данных** - Drizzle схемы (не нужны для фронтенда)  

## 🌐 Результат

После деплоя получите:
- `https://your-project.vercel.app` - основной домен
- Автоматические деплои при каждом push в main

---

**🎯 Проект уже настроен! Просто подключите к Vercel!**
