# React Quiz App

این یک اپلیکیشن Quiz ساده است که با **React**, **Context API**, و **useReducer** ساخته شده و سوالات را از **Open Trivia DB API** دریافت می‌کند.

## ویژگی‌ها:
- دریافت ۵ سوال چند گزینه‌ای از API
- نمایش سوالات با گزینه‌های تصادفی
- محاسبه امتیاز
- قابلیت **Restart Quiz**
- استفاده از Context و Reducer برای مدیریت وضعیت

---

## راه‌اندازی پروژه:

### ۱. نصب وابستگی‌ها
```bash
npm install
```

### ۲. اجرای پروژه در حالت توسعه
```bash
npm run dev
```

### ۳. ساخت نسخه‌ی نهایی برای استقرار
```bash
npm run build
```

---

## استفاده از TailwindCSS
برای استایل‌ها از **TailwindCSS** استفاده شده است.
برای نصب آن:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

سپس فایل‌های پیکربندی زیر را اضافه کنید.

---

## پیکربندی Tailwind:
**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## شروع سریع:
۱. فایل زیپ را دانلود کنید.  
۲. وارد پوشه پروژه شوید.  
۳. دستور `npm install` و سپس `npm run dev` را اجرا کنید.

موفق باشید! 🎯
