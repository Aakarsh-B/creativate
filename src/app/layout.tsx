import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "~scss/style.scss";
import { sans, serif } from "@/assets/fonts/fonts";
import Script from 'next/script';
import type { Metadata, Viewport } from "next";
import JsonLd from "@/utils/JsonLd";
import {
	SITE_URL,
	pageMetadata,
	organizationJsonLd,
	websiteJsonLd,
} from "@/lib/seo";


const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// Site-wide defaults; each page overrides title, description, canonical and image
export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	...pageMetadata({ path: "/" }),
	applicationName: "Creativate",
	formatDetection: { telephone: false },
};

export const viewport: Viewport = {
	themeColor: "#0A0A0B",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={``}>
			{/* Google Analytics, only when an ID is configured */}
			{GA_MEASUREMENT_ID && (
				<>
		    <Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
				strategy="afterInteractive"
		  	/>
		  	<Script id="google-analytics" strategy="afterInteractive">
			{`
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', '${GA_MEASUREMENT_ID}');
			`}
		  	</Script>
				</>
			)}
			<body
				className={`${sans.variable} ${serif.variable} bg-primaryDark text-primaryLight antialiased`}>
				<JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
				<Header />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
