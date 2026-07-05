import { supabase } from "@/lib/supabase";
import { Category, Prompt } from "@/types";

/**
 * Expected Supabase schema (see supabase/schema.sql):
 *   categories(slug, title, description, chapter)
 *   prompts(id, category, clause_number, title, summary, updated_at, usage_count, min_plan)
 *   subscribers(id, clerk_user_id, full_name, plan, renews_on)
 *
 * `locked` on Prompt is computed client-side by comparing the subscriber's
 * plan against prompts.min_plan — it is not stored directly.
 */

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw error;
  return data as Category[];
}

export async function fetchPromptsByCategory(
  categorySlug: string,
  subscriberPlan: string
): Promise<Prompt[]> {
  const { data, error } = await supabase
    .from("prompts")
    .select("*")
    .eq("category", categorySlug)
    .order("clause_number", { ascending: true });

  if (error) throw error;

  const planRank: Record<string, number> = { "أساسي": 0, "احترافي": 1, "مؤسسات": 2 };

  return (data ?? []).map((row) => ({
    id: row.id,
    category: row.category,
    clauseNumber: row.clause_number,
    title: row.title,
    summary: row.summary,
    updatedAt: row.updated_at,
    usageCount: row.usage_count,
    locked: planRank[subscriberPlan] < planRank[row.min_plan],
  }));
}
