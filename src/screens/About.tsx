import { useSetPageTitle } from '../components/PageHeader';

export default function About() {
  useSetPageTitle('About');

  return (
    <article className="pb-6 flex flex-col gap-6 min-w-0">
      <section className="flex flex-col gap-3">
        <h5 className="text-base font-semibold">The story</h5>
        <p className="text-base leading-relaxed">
          I saw a bug on the wood floor in my living room one morning and immediately
          thought "termites." I called three exterminators, and only one answered. He
          booked me for a next-day visit, took one look at the photo I'd texted him,
          and confirmed they were just carpenter ants. The whole thing took 40 minutes
          over text. The visit got canceled. He never tried to sell me anything.
        </p>
        <p className="text-base leading-relaxed">
          That worked because the right person happened to pick up. Most people
          would've sat through the visit, gotten a sales pitch, and maybe paid for
          treatment they didn't need.
        </p>
        <p className="text-base leading-relaxed">
          This tool is that same exchange, minus the dice roll. Figure out what
          you're probably looking at, decide whether to call, and if you do, know
          what kind of pro to ask for. Built for homeowners in Westchester, Rockland,
          Putnam, and Fairfield County.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h5 className="text-base font-semibold">The advice</h5>
        <p className="text-base leading-relaxed">
          The content here is general information about common household pests, not
          professional pest identification or treatment advice. We make no warranties
          about accuracy, completeness, or fitness for any specific situation. Use at
          your own discretion. If you suspect structural damage from wood-destroying
          insects, contact a licensed pest control professional immediately.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h5 className="text-base font-semibold">The pest pros</h5>
        <p className="text-base leading-relaxed">
          Pest control businesses listed here are real, publicly listed companies
          serving the region. We don't endorse, recommend, or guarantee any specific
          business, technician, or service. Listings are for informational convenience
          only and don't constitute a referral or partnership. We're not responsible
          for the quality of work, business practices, or conduct of any listed
          provider.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h5 className="text-base font-semibold">Sources</h5>
        <p className="text-base leading-relaxed">
          Bug photos are from Wikimedia Commons under their respective Creative
          Commons licenses. Silhouettes are from PhyloPic (CC0 and CC-BY). Diagnostic
          information is summarized from Penn State Extension and Cornell Cooperative
          Extension fact sheets, written and reviewed by university entomologists.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h5 className="text-base font-semibold">Privacy</h5>
        <p className="text-base leading-relaxed">
          We use Vercel Web Analytics to count anonymous page visits. No cookies are
          set, no personal data is collected, and individual users are not tracked
          across sessions.
        </p>
      </section>
    </article>
  );
}
