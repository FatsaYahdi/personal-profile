import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export const metadata: Metadata = {
  title: "Personal Profile | Fatsa Yahdi",
  description: "My personal profile website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body className="font-eudoxus">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <ThemeSwitcher className="fixed top-12 right-12" />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
