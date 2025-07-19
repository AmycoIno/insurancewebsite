import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer'; // <-- 1. IMPORT THE FOOTER

export const metadata = {
  title: 'Mon Comparateur Assurance',
  description: 'Comparez et économisez sur votre assurance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer /> {/* <-- 2. ADD THE FOOTER HERE */}
      </body>
    </html>
  );
}