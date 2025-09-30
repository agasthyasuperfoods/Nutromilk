import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* ADD THE CLASSES HERE */}
      <body className="antialiased bg-stone-50 text-slate-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}