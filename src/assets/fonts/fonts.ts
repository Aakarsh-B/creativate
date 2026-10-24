import { Inter_Tight, Instrument_Serif } from "next/font/google";

const sans = Inter_Tight({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
    variable: '--font-sans'
});

// Used sparingly for italic accent words in headlines
const serif = Instrument_Serif({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
    style: ["normal", "italic"],
    variable: '--font-serif',
    // Next 14.1 has no fallback metrics for this font; skip the adjustment
    adjustFontFallback: false
});

export { sans, serif }
