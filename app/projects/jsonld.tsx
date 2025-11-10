'use client';
import Script from 'next/script';


type Props = {
name: string;
summary: string;
slug: string;
ogImage: string;
};


export default function ProjectJsonLd({ name, summary, slug, ogImage }: Props) {
const jsonLd = {
'@context': 'https://schema.org',
'@type': 'CreativeWork',
name,
description: summary,
url: `https://yourdomain.com/projects/${slug}`,
creator: { '@type': 'Person', name: 'Your Name' },
image: ogImage,
};


return (
<Script id={`ld-${slug}`} type="application/ld+json" strategy="beforeInteractive">
{JSON.stringify(jsonLd)}
</Script>
);
}