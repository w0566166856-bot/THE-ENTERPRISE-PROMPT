export type CategorySlug = "marketing" | "legal" | "business";

export interface Category {
  slug: CategorySlug;
  /** Arabic label shown in the UI — e.g. "التسويق" */
  title: string;
  /** Short description of the category's scope */
  description: string;
  /** Article/chapter numeral used in the clause system — e.g. "الباب الأول" */
  chapter: string;
}

export interface Prompt {
  id: string;
  category: CategorySlug;
  /** Clause numeral within its chapter — e.g. "١-٣" */
  clauseNumber: string;
  title: string;
  summary: string;
  /** true if the current subscriber's plan does not include this prompt */
  locked: boolean;
  /** Last update, ISO date string, from Supabase `updated_at` */
  updatedAt: string;
  usageCount: number;
}

export interface Subscriber {
  id: string;
  clerkUserId: string;
  fullName: string;
  plan: "أساسي" | "احترافي" | "مؤسسات";
  renewsOn: string;
}
