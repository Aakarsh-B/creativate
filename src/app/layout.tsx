import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "~scss/style.scss";
import { glacialIndifference, poppins } from "@/assets/fonts/fonts";
import Script from 'next/script';


const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={``}>
			{/* Google Analytics Scripts */}
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
			<body
				className={`${poppins.variable} ${glacialIndifference.variable}`}>
				<Header />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
