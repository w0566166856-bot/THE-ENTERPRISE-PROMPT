# The Enterprise Prompt

واجهة أمامية بـ Next.js 14 (App Router) + Tailwind CSS للوحة تحكم مشتركي منصة
بيع/اشتراك الأوامر البرمجية للأعمال، مقسّمة إلى ثلاثة أبواب: التسويق،
القانون، وإدارة الأعمال.

## البنية

```
app/
  layout.tsx              الطبقة الجذرية: الخطوط + ClerkProvider + RTL
  page.tsx                الصفحة التسويقية / مدخل تسجيل الدخول
  sign-in/[[...sign-in]]  صفحة Clerk لتسجيل الدخول
  sign-up/[[...sign-up]]  صفحة Clerk لإنشاء حساب
  dashboard/
    layout.tsx            يضيف الشريط الجانبي لكل صفحات لوحة التحكم
    page.tsx               نظرة عامة على الأبواب الثلاثة
    [category]/page.tsx   صفحة باب واحد (تسويق/قانون/أعمال) وبنودها
components/
  Sidebar.tsx              التنقل الجانبي + زر حساب Clerk
  PromptCard.tsx           بطاقة "البند" — العنصر البصري المميز للمنصة
lib/
  supabase.ts              عميل Supabase (متصفح + خادم بصلاحية service role)
  queries.ts               دوال الجلب الحقيقية المرتبطة بمخطط supabase/schema.sql
  sample-data.ts           بيانات تجريبية تُستخدم إلى حين ربط القاعدة فعليًا
types/index.ts             الأنواع المشتركة (Prompt, Category, Subscriber)
supabase/schema.sql        مخطط الجداول وسياسات RLS
middleware.ts              حماية مسارات /dashboard عبر Clerk
```

## التشغيل محليًا

```bash
npm install
cp .env.local.example .env.local   # ثم املأ مفاتيح Clerk و Supabase
npm run dev
```

## ربط Clerk

1. أنشئ تطبيقًا في https://dashboard.clerk.com
2. انسخ `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` و `CLERK_SECRET_KEY` إلى `.env.local`
3. لتفعيل الواجهة العربية الجاهزة تلقائيًا، الحزمة `@clerk/localizations`
   مستوردة بالفعل في `app/layout.tsx` (`arSA`)

## ربط Supabase

1. أنشئ مشروعًا في https://app.supabase.com
2. نفّذ محتوى `supabase/schema.sql` في SQL Editor لإنشاء الجداول والسياسات
3. انسخ الروابط والمفاتيح إلى `.env.local`
4. استبدل الاستيراد من `lib/sample-data.ts` باستيراد من `lib/queries.ts` في
   `app/dashboard/page.tsx` و `app/dashboard/[category]/page.tsx` بعد تعبئة
   الجداول ببياناتك الفعلية

**تنبيه أمني:** لا تجلب عمود `body` (نص الأمر الفعلي) في أي استعلام يُعرض في
قائمة اللوحة. اجلبه فقط داخل Server Action بعد التحقق من أن باقة المشترك
(`subscribers.plan`) تغطي `prompts.min_plan` لذلك البند تحديدًا.

## النشر على Vercel

1. ادفع المستودع إلى GitHub
2. استورده في https://vercel.com/new
3. أضف متغيرات البيئة نفسها الموجودة في `.env.local` في إعدادات المشروع
   على Vercel (Project Settings → Environment Variables)
4. في إعدادات Clerk، أضف نطاق Vercel الخاص بك إلى Allowed Origins

## الخطوات التالية المقترحة

- استبدال `sample-data.ts` باستعلامات `queries.ts` الحقيقية
- إضافة صفحة تفاصيل البند (`/dashboard/[category]/[promptId]`) تعرض `body`
  الكامل مع زر نسخ
- إضافة صفحة الفوترة/الباقات وربطها بـ Stripe أو نظام دفع محلي
- إضافة بحث نصي داخل اللوحة عبر Supabase full-text search
