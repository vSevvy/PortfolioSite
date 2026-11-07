import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & cookies — Evan McCullough",
  description: "How this portfolio handles contact enquiries, personal information, and browser storage.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-sm leading-7 text-muted-foreground">
      <Link href="/" className="underline underline-offset-4">Back to home</Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-primary">Privacy &amp; cookies</h1>
        <p>Last updated: 7 November 2026</p>
        <p>This statement explains how personal information is handled when you visit vsevvy.com or contact me through this portfolio.</p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Who is responsible</h2>
        <p>Evan McCullough, based in Sofia, Bulgaria, is responsible for personal information collected through this portfolio. For privacy questions or requests, email <a href="mailto:evanmccdev2025@gmail.com" className="underline">evanmccdev2025@gmail.com</a>.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Information you provide</h2>
        <p>When you use the contact form, the website receives your name, email address, and message. If you email me directly, I receive your email address and the information you include. Please do not include sensitive personal information in your enquiry.</p>
        <p>This information is used to read and respond to enquiries and discuss potential work or collaboration. The legal basis is my legitimate interest in responding to correspondence; where you request steps towards a contract, processing may instead be necessary to take those steps.</p>
        <p>You choose whether to contact me. The form requires a name, email address, and message to submit an enquiry; browsing the portfolio does not require them.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Service providers and technical information</h2>
        <p>The contact form uses Resend to deliver messages. Message content and the supplied name are passed to Resend for email delivery. Email providers also process correspondence sent or received by email. See <a href="https://resend.com/legal/privacy-policy" className="underline">Resend’s privacy policy</a> for its practices.</p>
        <p>Website hosting and delivery providers may process technical request information, such as IP addresses, browser information, requested pages, and timestamps, to deliver and protect the site.</p>
        <p>Service providers may process information outside the European Economic Area. The countries and safeguards depend on the hosting and email services used; contact me for details about the arrangements applicable to your information.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">How long information is kept</h2>
        <p>Correspondence is kept for as long as needed to handle the enquiry and any resulting working relationship, resolve disputes, or meet applicable legal obligations. The appropriate period depends on the nature of the correspondence. You can contact me to ask about retention or request deletion.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Cookies and local storage</h2>
        <p>This portfolio does not use analytics or advertising cookies, tracking pixels, or embedded social media widgets. Links to GitHub and LinkedIn take you to external websites with their own privacy and cookie policies.</p>
        <p>When you select “Got it” in the cookie notice, a local-storage entry named <code>portfolio-cookie-notice-v1</code> stores the value <code>acknowledged</code> in your browser. It remembers your acknowledgement and is not sent to the server. It has no automatic expiry and remains until you clear your browser storage or reopen the notice using “Cookie information” in the footer.</p>
        <p>There are currently no optional tracking technologies to accept or reject. Acknowledging the notice does not authorise advertising or analytics. If optional tracking is introduced, this notice and the controls will need to be updated before it is enabled.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Your rights</h2>
        <p>Subject to applicable conditions, you can request access to, correction of, or deletion of your personal information, restriction of processing, and data portability. You can object to processing based on legitimate interests. Where processing relies on consent, you can withdraw it without affecting earlier lawful processing.</p>
        <p>Send requests to the email address above. You may also complain to your local data protection authority, including Bulgaria’s <a href="https://cpdp.bg/en/" className="underline">Commission for Personal Data Protection</a>.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Changes to this statement</h2>
        <p>This statement will be updated when the website’s handling of personal information changes. The date above identifies the latest revision.</p>
      </section>
    </main>
  );
}
