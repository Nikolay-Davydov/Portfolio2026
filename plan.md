## Plan: Портфолио на Next.js + TypeScript

TL;DR: Создать в D:\AI\VScode\Portfolio одностраничное/многостраничное портфолио (App Router) на Next.js + TypeScript с Tailwind CSS, поддержкой рус/англ, SEO/Open Graph, тёмной темой, оптимизированными изображениями и кнопкой скачивания резюме (PDF). План сохранён в сессии и готов к копированию в проект (plan.md в корне). После вашего одобрения я подготовлю последовательную реализацию.

**Steps**

1. Предусловия (проверки, до инициализации) — выполнено
   - Убедиться в установленном Node.js v20.x и npm (рекомендую v20.11.0+).
   - Проверить Git.
   - Команды для проверки:

   ```bash
   node -v
   npm -v
   git --version
   ```

2. Инициализация проекта (scaffold) — выполнено
   - Перейти в папку проекта:

   ```bash
   cd "D:\\AI\\VScode\\Portfolio"
   ```

   - Создать Next.js проект (TypeScript + Tailwind, App Router):

   ```bash
   npm create next-app@latest . --typescript --tailwind
   ```

   - В интерактивном опросе выбрать App Router (app/), ESLint — да, Tailwind — да.
   - Создать файл .nvmrc с версией Node.js (опционально):

   ```bash
   echo v20.11.0 > .nvmrc
   ```

3. Базовая конфигурация и зависимости — выполнено
   - (create-next-app с флагом --tailwind уже создаст tailwind.config и styles)
   - Установить дополнительные зависимости:

   ```bash
   npm install next-themes next-intl clsx
   npm install -D prettier eslint-config-prettier
   ```

   - (Опционально) для расширенного SEO:

   ```bash
   npm install next-seo
   ```

4. Структура проекта (создаваемые каталоги и файлы)
   - Папки и основные файлы (создать/заполнить):
     - app/layout.tsx — корневой layout: ThemeProvider, языковой провайдер, общий header/footer, базовая metadata
     - app/page.tsx — главная страница (landing)
     - app/about/page.tsx — "О себе"
     - app/projects/page.tsx — список проектов
     - app/projects/[slug]/page.tsx — страница проекта (опционально)
     - app/resume/page.tsx — страница резюме с кнопкой скачивания
     - app/contact/page.tsx — контакты
     - components/Header.tsx, Footer.tsx, ThemeToggle.tsx, ProjectCard.tsx, ContactLinks.tsx, LanguageSwitcher.tsx
     - data/profile.json (или profile.ts), data/projects.json — контент для наполнения
     - public/resume.pdf — PDF резюме
     - public/images/* — картинки проектов и фото
     - styles/globals.css — импорты Tailwind и глобальные стили
     - tailwind.config.js — content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}']
     - next.config.js — конфигурация изображений и i18n
     - README.md — инструкция по запуску и обновлению плана
     - plan.md — копия этого плана в корне проекта (ручное/автоматическое добавление после вашего OK)

5. Tailwind и стили
   - Проверить tailwind.config.js: content должен включать app и components.
   - В styles/globals.css подключить @tailwind base; @tailwind components; @tailwind utilities;
   - Создать утилитарные токены (colors, spacing) в tailwind config по необходимости.

6. Локализация (RU / EN)
   - Подход: next-intl + маршрутизация через сегмент локали (app/[locale]/... или middleware), либо централизованный провайдер в layout.
   - Создать папки locales/ru/common.json и locales/en/common.json — ключи для переводов.
   - В layout загружать словарь для текущей локали и передавать в компоненты.
   - Кнопка переключения языка в Header (LanguageSwitcher).

7. Тёмная тема
   - Использовать next-themes: обёрнуть приложение в ThemeProvider в layout.tsx.
   - ThemeToggle сохраняет выбор в localStorage; Tailwind configured с dark mode: 'class'.

8. SEO и Open Graph
   - Использовать встроенный metadata API App Router (export const metadata) для страниц.
   - Дополнительно создать components/SEO.tsx для динамических метатегов и Open Graph (share image, title, description).

9. Контент и данные
   - Заполнить data/profile.json: имя, должность, краткое описание, навыки, ссылки.
   - Заполнить data/projects.json: slug, title, short description, tech stack, images, link.
   - Скелет для проекта: 3 демонстрационных записи (frontend/backend/data engineering), которые вы потом отредактируете.

10. Резюме (PDF)

- Положить PDF в public/resume.pdf.
- В Header и в app/resume/page.tsx добавить ссылку:

```html
<a href="/resume.pdf" download>Скачать резюме (PDF)</a>
```

11. Оптимизация изображений

- Хранить исходники в public/images, использовать next/image в компонентах.
- Если используются внешние домены, добавить их в next.config.js images.domains.

12. Линтинг и форматирование

- Prettier + ESLint: настроить .prettierrc и .eslintrc (create-next-app уже добавляет базовый ESLint).
- Добавить npm-скрипты:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

13. CI (опционально)

- Пример GitHub Actions (.github/workflows/ci.yml):

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

14. Git & GitHub

- Инициализировать локальный репозиторий и сделать первый коммит:

```bash
git init
git add .
git commit -m "chore: scaffold Next.js portfolio (TypeScript + Tailwind)"
```

- Инструкция для создания удалённого репозитория вручную или через GitHub CLI:

```bash
# через GitHub CLI (если установлен и авторизован)
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
```

15. Деплой

- Рекомендую Vercel: быстрая интеграция с Next.js, автоматический билд при push.
- Альтернативы: Netlify, static export.

16. Проверки и валидация (acceptance criteria)

- Запуск dev сервера:

```bash
npm run dev
```

     - Открыть http://localhost:3000 — загрузка главной страницы без ошибок.

- Навигация: About, Projects, Resume, Contact доступны и корректно показывают данные.
- Кнопка скачивания резюме работает и загружает public/resume.pdf.
- Тёмная тема переключается и выбор сохраняется при перезагрузке.
- Метатеги: title + description + Open Graph присутствуют для основных страниц.
- Локализация: переключение RU/EN меняет тексты.

17. Наполнение демонстрационным контентом (опционально, я могу подготовить)

- Создать 3 демонстрационных проекта с описанием, стеком и изображениями.
- Заполнить профиль: роль, краткое summary, ключевые навыки.

18. Документация и plan.md в проекте

- Я сохранил план в сессии (/memories/session/plan.md).
- Рекомендация: создать в корне проекта файл plan.md с текущим текстом плана для удобного редактирования командой/вручную.
- Инструкция для ручного добавления plan.md: открыть новый файл в редакторе, вставить текст этого плана и сохранить D:\\AI\\VScode\\Portfolio\\plan.md

**Relevant files (предлагаемые для создания)**

- app/layout.tsx — корневой layout: ThemeProvider, языковой провайдер, Header/Footer
- app/page.tsx — главная
- app/about/page.tsx, app/projects/page.tsx, app/resume/page.tsx, app/contact/page.tsx
- app/projects/[slug]/page.tsx — детальная страница проекта
- components/Header.tsx, Footer.tsx, ThemeToggle.tsx, ProjectCard.tsx, LanguageSwitcher.tsx, SEO.tsx
- data/profile.json, data/projects.json
- public/resume.pdf, public/images/*
- styles/globals.css, tailwind.config.js, next.config.js, .nvmrc, README.md, plan.md

**Verification**

1. Dev-сервер запускается: `npm run dev` и приложение доступно на localhost:3000
2. Все страницы доступны (About, Projects, Resume, Contact)
3. Демонстрационные проекты рендерятся и имеют корректные метаданные
4. Тёмная тема и переключатель языка работают и сохраняют состояние
5. Резюме скачивается с public/resume.pdf
6. Локальная сборка: `npm run build` проходит без ошибок

**Decisions (зафиксированные)**

- App Router (app/) выбран для современного API Next.js
- TypeScript — обязательный
- Tailwind CSS — выбран для стилей
- Локальное хранение резюме (public/resume.pdf)
- Контакты — ссылки (email, LinkedIn, GitHub)
- Локализация RU + EN

**Further considerations / вопросы (нужны ваш выбор)**

1. Хотите, чтобы я сейчас автоматически сгенерировал содержимое ключевых файлов (layout, Header, несколько страниц, tailwind.config.js и т.д.) в виде текста для копирования? (Рекомендую: Да)
2. Хотите демо-контент (3 проекта + профиль), чтобы сразу проверить интерфейс? (Рекомендую: Да)
3. Подключать ли CI (GitHub Actions) и готовить workflow? (Опционально)
