import { Exo_2 } from 'next/font/google';

import NavBar from './LayoutComponents/NavBar';
import Footer from './LayoutComponents/Footer';
import '../styles/globals.scss';

const exo2 = Exo_2({ subsets: ['latin'] });

export const metadata = {
  title: 'Counterparts Avatars',
  description:
    'Your Counterpart is a virtual twin of your contributions towards humanity, for use across the metaverse.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
