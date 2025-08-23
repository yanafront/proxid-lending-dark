# 🚀 Инструкции по деплою на Vercel

## Подготовка проекта

Проект уже подготовлен к деплою на Vercel. Созданы все необходимые конфигурационные файлы:

- ✅ `vercel.json` - конфигурация Vercel
- ✅ `client/package.json` - зависимости клиентской части
- ✅ `client/vite.config.ts` - конфигурация Vite
- ✅ `client/tsconfig.json` - конфигурация TypeScript
- ✅ `.vercelignore` - исключения для деплоя
- ✅ `vercel-build.sh` - скрипт автоматической сборки

## 🎯 Варианты деплоя

### 1. Автоматический деплой (рекомендуется)

1. **Подключите GitHub репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Нажмите "New Project"
   - Выберите ваш репозиторий
   - Vercel автоматически определит настройки

2. **Настройки проекта:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (корень проекта)
   - **Build Command:** `cd client && npm install && npm run build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `cd client && npm install`

3. **Переменные окружения (если нужны):**
   - Добавьте в Vercel Dashboard → Project Settings → Environment Variables

### 2. Ручной деплой через CLI

1. **Установите Vercel CLI:**
```bash
npm i -g vercel
```

2. **Войдите в аккаунт:**
```bash
vercel login
```

3. **Деплой:**
```bash
vercel --prod
```

### 3. Деплой через GitHub Actions

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd client && npm install
      - run: cd client && npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./
```

## 🔧 Локальная сборка

Для тестирования сборки локально:

```bash
# В корне проекта
./vercel-build.sh

# Или вручную
cd client
npm install
npm run build
```

## 📁 Структура после деплоя

После успешного деплоя Vercel создаст:
- `https://your-project.vercel.app` - основной домен
- `https://your-project-git-main-your-username.vercel.app` - preview для каждой ветки

## 🚨 Важные моменты

1. **Серверная часть:** Express сервер НЕ деплоится на Vercel
2. **База данных:** Используйте внешние сервисы (Neon, Supabase, PlanetScale)
3. **API:** Настройте на внешние сервисы или используйте Vercel Functions
4. **Статические файлы:** Все файлы из `client/dist` будут доступны

## 🐛 Решение проблем

### Ошибка сборки
```bash
cd client
npm install
npm run build
```

### Проверка конфигурации
```bash
vercel --debug
```

### Локальная проверка
```bash
cd client
npm run preview
```

## 📞 Поддержка

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

---

**🎉 Готово! Ваш проект настроен для деплоя на Vercel!**
