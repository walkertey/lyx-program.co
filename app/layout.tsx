// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "LYX.Program.co",
  description: "Make the Impossible Possible.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white antialiased">{children}</body>
    </html>
  );
}
