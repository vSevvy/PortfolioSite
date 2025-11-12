import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
title: 'Evan — Portfolio',
description: 'Work, writing, and contact.',
metadataBase: new URL('https://vsevvy.com'),
openGraph: {
title: 'Evan — Portfolio',
description: 'Work, writing, and contact.',
url: 'https://vsevvy.com',
siteName: 'Evan',
locale: 'en_GB',
type: 'website',
},
robots: { index: true, follow: true },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-white text-gray-900 antialiased">
{children}
</body>
</html>
);
}