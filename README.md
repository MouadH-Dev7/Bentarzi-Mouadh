# Bentarzi Mouadh — Portfolio

موقع بورتفوليو شخصي احترافي لمطوّر خلفية (Backend) و Full-Stack، طالب **ماستر 2 هندسة البرمجيات** (22 سنة)، يعرض المشاريع والمهارات والمسار الأكاديمي ووسائل التواصل بثلاث لغات: العربية، الفرنسية، والإنجليزية.

## التقنيات

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- lucide-react
- نظام تصميم محلي مولّد عبر `ui-ux-pro-max` (انظر `design-system/bentarzi-mouadh/MASTER.md`)

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:5173`.

أوامر أخرى:

```bash
npm run build     # بناء نسخة الإنتاج في dist/
npm run preview   # معاينة نسخة الإنتاج
npm run lint      # فحص الكود
```

## بنية المشروع

```text
src/
  components/     # Navbar, Hero, About, Skills, Projects, Experience, Services, Contact, Footer...
  context/        # LanguageContext (تبديل اللغة + RTL)
  data/cvData.ts  # كل المحتوى الشخصي والمشاريع (لغة واحدة لكل نسخة)
  index.css       # التوكينز والألوان والخطوط وإعدادات إمكانية الوصول
public/
  CV_Bentarzi_Mouadh.pdf
  projects/       # صور المشاريع
  robots.txt
  sitemap.xml
index.html        # SEO + Open Graph + بيانات منظمة (JSON-LD)
```

## تعديل المحتوى

عدّل الملف `src/data/cvData.ts` لتحديث الاسم، نبذة التعريف، الإحصائيات، المهارات، المشاريع، الشهادات، والخدمات. الترجمات الخاصة بكل قسم موجودة داخل مكوّناتها.

## التواصل

- البريد: mouadh.dev@gmail.com
- GitHub: [MouadH-Dev7](https://github.com/MouadH-Dev7)
- الموقع: [bentarzimouadh.mouadh-dev.workers.dev](https://bentarzimouadh.mouadh-dev.workers.dev)
