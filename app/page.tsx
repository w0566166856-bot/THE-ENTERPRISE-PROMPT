import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-16 md:px-10">
        <header className="flex items-center justify-between border-b border-ink-line pb-6">
          <span className="font-display text-lg tracking-wide2 text-paper">
            The Enterprise Prompt
          </span>
          <nav className="flex items-center gap-6 font-mono text-xs tracking-wide2 text-slate">
            <span>الباب الأول — التسويق</span>
            <span>الباب الثاني — القانون</span>
            <span>الباب الثالث — إدارة الأعمال</span>
          </nav>
        </header>

        <section className="mt-20 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="clause-mark mb-4">وثيقة تأسيسية — إصدار ٢٠٢٦</p>
            <h1 className="font-display text-4xl leading-[1.15] text-paper md:text-5xl">
              مكتبة أوامر مُقَنَّنة
              <br />
              لقرارات الأعمال اليومية
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate">
              كل أمر برمجي في المنصة مبوّب ومرقّم كبند تعاقدي: مصدره واضح،
              نطاقه محدد، وأثره على قرارك قابل للتتبع. لا وصفات عامة، بل
              أدوات صيغت لثلاثة أبواب فقط: التسويق، القانون، وإدارة الأعمال.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="border border-brass bg-brass px-6 py-3 font-mono text-sm tracking-wide2 text-ink transition-colors hover:bg-brass-bright">
                    الدخول إلى المنصة
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="border border-brass bg-brass px-6 py-3 font-mono text-sm tracking-wide2 text-ink transition-colors hover:bg-brass-bright"
                >
                  الذهاب إلى لوحة التحكم
                </Link>
              </SignedIn>
            </div>
          </div>

          <div className="border border-ink-line bg-ink-soft p-6 font-mono text-xs leading-7 text-slate">
            <p className="clause-mark mb-3">معاينة — المادة ٢-١</p>
            <p className="text-paper/90">مراجعة بنود عقد التوريد</p>
            <div className="seal-divider my-4" />
            <p>
              يفحص العقد بندًا بندًا، يحدد الالتزامات غير المتوازنة، ويقترح
              صياغة بديلة متوافقة مع الممارسات التجارية المحلية.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
