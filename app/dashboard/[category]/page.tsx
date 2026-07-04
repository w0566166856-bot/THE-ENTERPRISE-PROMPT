import { notFound } from "next/navigation";
import { categories, prompts } from "@/lib/sample-data";
import { CategorySlug } from "@/types";
import PromptCard from "@/components/PromptCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const categoryPrompts = prompts.filter(
    (p) => p.category === (params.category as CategorySlug)
  );

  return (
    <div className="mx-auto max-w-5xl px-8 py-10">
      <span className="clause-mark">{category.chapter}</span>
      <h1 className="mt-2 font-display text-3xl text-ink">
        {category.title}
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-7 text-slate">
        {category.description}
      </p>

      {categoryPrompts.length === 0 ? (
        <div className="mt-10 border border-dashed border-paper-line p-10 text-center">
          <p className="text-sm text-slate">
            لا توجد بنود منشورة في هذا الباب بعد. سيتم إضافتها مع تحديث
            المكتبة القادم.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {categoryPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
}
