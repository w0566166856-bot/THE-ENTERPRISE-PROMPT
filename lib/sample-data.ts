import { Category, Prompt } from "@/types";

// This file exists so the dashboard renders meaningfully before the
// Supabase tables are populated. Replace calls to these functions with
// real queries — see lib/queries.ts for the intended shape.

export const categories: Category[] = [
  {
    slug: "marketing",
    title: "التسويق",
    description: "أوامر لصياغة الحملات، محتوى المنصات، ورسائل العلامة التجارية.",
    chapter: "الباب الأول",
  },
  {
    slug: "legal",
    title: "القانون",
    description: "أوامر لصياغة العقود، اللوائح الداخلية، والمراسلات القانونية.",
    chapter: "الباب الثاني",
  },
  {
    slug: "business",
    title: "إدارة الأعمال",
    description: "أوامر لخطط التشغيل، تحليل الأداء، وإدارة الفرق.",
    chapter: "الباب الثالث",
  },
];

export const prompts: Prompt[] = [
  {
    id: "p-001",
    category: "marketing",
    clauseNumber: "١-١",
    title: "خطة إطلاق منتج على مدى ثمانية أسابيع",
    summary: "يبني جدولاً أسبوعياً كاملاً للمحتوى والإعلانات وقنوات التوزيع.",
    locked: false,
    updatedAt: "2026-06-02",
    usageCount: 482,
  },
  {
    id: "p-002",
    category: "marketing",
    clauseNumber: "١-٢",
    title: "تحليل صوت العميل من التعليقات",
    summary: "يستخرج الأنماط والمشاعر من تعليقات العملاء ويحوّلها إلى توصيات.",
    locked: false,
    updatedAt: "2026-05-21",
    usageCount: 310,
  },
  {
    id: "p-003",
    category: "legal",
    clauseNumber: "٢-١",
    title: "مراجعة بنود عقد التوريد",
    summary: "يفحص عقود التوريد ويحدد البنود عالية المخاطر بلغة قانونية دقيقة.",
    locked: true,
    updatedAt: "2026-06-10",
    usageCount: 128,
  },
  {
    id: "p-004",
    category: "legal",
    clauseNumber: "٢-٢",
    title: "صياغة سياسة خصوصية متوافقة",
    summary: "يصوغ سياسة خصوصية متوافقة مع الأنظمة السعودية لحماية البيانات.",
    locked: true,
    updatedAt: "2026-04-30",
    usageCount: 96,
  },
  {
    id: "p-005",
    category: "business",
    clauseNumber: "٣-١",
    title: "تحليل الانحراف في الميزانية التشغيلية",
    summary: "يقارن الإنفاق الفعلي بالمخطط ويشرح أسباب الفروقات الجوهرية.",
    locked: false,
    updatedAt: "2026-06-18",
    usageCount: 215,
  },
  {
    id: "p-006",
    category: "business",
    clauseNumber: "٣-٢",
    title: "جدول أعمال اجتماع مراجعة الأداء الفصلي",
    summary: "يهيئ جدول أعمال منظم مع مؤشرات الأداء الرئيسية لكل قسم.",
    locked: false,
    updatedAt: "2026-03-15",
    usageCount: 174,
  },
];
