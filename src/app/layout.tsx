import "./globals.css";
import { Raleway } from "src/fonts";
export const metadata = {
  title: "Jalaj Kumar",
  description: "About Jalaj Kumar - Full Stack Developer | C/C++ Developer | Go Developer",
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
          background: '#000'
        }}
      >
        {children}
      </body>
    </html>
  );
}
