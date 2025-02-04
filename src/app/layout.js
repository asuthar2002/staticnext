import "./globals.css";

export const metadata = {
  title: "Joshie Event Decor - Balloon Decor in Bangalore",
  description:
    "Joshieventdecor specializes in stunning balloon decorations for events in Bangalore. Make your celebration unforgettable with our professional balloon decor services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
