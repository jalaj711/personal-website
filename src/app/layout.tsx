import "./globals.css";
import { Raleway } from "src/fonts";
import Script from "next/script";

export const metadata = {
  title: "Jalaj Kumar",
  description:
    "About Jalaj Kumar - Full Stack Developer | C/C++ Developer | Go Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={Raleway.className}
        style={{
          // backgroundImage: `linear-gradient(#000b, #000b), url(${bg.src})`,
          background: "#000",
        }}
      >
        {children}
      </body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_APP_GA_ID}`}
      ></Script>
      <Script id="gtag">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_APP_GA_ID}');
        `}
      </Script>
    </html>
  );
}
