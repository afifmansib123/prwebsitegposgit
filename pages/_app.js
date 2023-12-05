import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import localFont from "@next/font/local";

const sukhumvits = localFont({
  src: [
    {
      path: "../public/fonts/SukhumvitSet-Medium.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/SukhumvitSet-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-sukhumvits",
});
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <html lang="en" className={`${sukhumvits.variable} font-sans`}>
    <Component {...pageProps} />
  </html>;
}
