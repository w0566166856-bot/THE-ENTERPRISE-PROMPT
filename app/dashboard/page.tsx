import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { categories, prompts } from "@/lib/sample-data";

export default async function DashboardOverviewPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? "بك";

  return (
    <div className="mx-auto max-w-5xl px-8 py-10">
      <p className="clause-mark">لوحة التحكم</p>
      <h1 className="mt-2 font-display text-3xl text-ink">
        مرحبًا {firstName}
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-7 text-slate">
        هذه نظرة عامة على الأبواب الثلاثة ومحتوى كل باب. اختر بابًا للاطلاع
        على البنود كاملة.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categories.map((cat) => {
          const count = prompts.filter((p) => p.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/dashboard/${cat.slug}`}
              className="group border border-paper-line bg-white p-6 transition-colors hover:border-brass"
            >
              <span className="clause-mark">{cat.chapter}</span>
              <h2 className="mt-3 font-display text-xl text-ink">
                {cat.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate">
                {cat.description}
              </p>
              <div className="seal-divider my-4" />
              <span className="font-mono text-[11px] tracking-wide2 text-slate group-hover:text-brass-dim">
                {count} بند متاح ←
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
