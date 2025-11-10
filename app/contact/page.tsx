'use client';
import { useState } from 'react';


export default function ContactPage() {
const [status, setStatus] = useState<string | null>(null);


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
const form = e.currentTarget;
const body = {
name: (form.elements.namedItem('name') as HTMLInputElement).value,
email: (form.elements.namedItem('email') as HTMLInputElement).value,
message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
};
setStatus('Sending…');
const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) });
setStatus(res.ok ? 'Sent! I’ll get back shortly.' : 'Something went sideways.');
form.reset();
}


return (
<main className="mx-auto max-w-xl px-6 py-16">
<h1 className="text-3xl font-bold">Contact</h1>
<form onSubmit={onSubmit} className="mt-8 space-y-4">
<input name="name" placeholder="Your name" required className="w-full rounded-md border px-4 py-3" />
<input name="email" type="email" placeholder="Email" required className="w-full rounded-md border px-4 py-3" />
<textarea name="message" placeholder="Message" required rows={6} className="w-full rounded-md border px-4 py-3" />
<button className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark transition">Send</button>
{status && <p className="text-sm text-gray-600">{status}</p>}
</form>
</main>
);
}