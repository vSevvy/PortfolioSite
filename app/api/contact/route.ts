import { Resend } from 'resend';


export async function POST(req: Request) {
const { name, email, message } = await req.json();


const resend = new Resend(process.env.RESEND_API_KEY ?? '');
if (!process.env.RESEND_API_KEY) {
return new Response(JSON.stringify({ ok: false, error: 'Missing RESEND_API_KEY' }), { status: 500 });
}


await resend.emails.send({
from: 'Portfolio <hello@yourdomain.com>',
to: 'you@yourdomain.com',
subject: `New message from ${name}`,
text: message,
});


return Response.json({ ok: true });
}