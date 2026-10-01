import "./globals.css";

export const metadata = {
  title: "Home & Kitchen Amazon Affiliate Store",
  description: "Expert reviews and recommendations for home and kitchen products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
