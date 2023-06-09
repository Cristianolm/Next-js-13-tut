// These styles apply to every route in the application
import "./tailwind-globals.scss";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "optional",
});

/* 
display:"swap" -> While the Google font doesn't finish downloading, the fonts in `globals.css` should be considered. But when the download is finished, it switches to the `Roboto` font.

display:"optional" -> Until the font download from Google Fonts is finished, no text should be displayed.
*/

export const metadata = {
  title: "Learn Next JS",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head lang="en" className={roboto.className} />
      <body>{children}</body>
    </html>
  );
}
