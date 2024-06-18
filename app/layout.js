// import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import { Quicksand } from 'next/font/google'
// import "./globals.css";
// import "/vars.css";
// import Head from 'next/head'; // Import Head from next/head
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-multi-carousel/lib/styles.css';
// import { config } from "@fortawesome/fontawesome-svg-core";


import "@fontsource/outfit";
import "@fontsource/roboto";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Pooja Gusain's Portfolio",
  description: "Portfolio website created using Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
