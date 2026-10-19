import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins'
});

const glacialIndifference = localFont({
    src: './glacialIndifference-Regular.otf',
    variable: '--font-glacial-regular',
})

export { poppins, glacialIndifference }