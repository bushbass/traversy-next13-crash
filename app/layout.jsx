import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Alex test next',
  description: 'working on traversy crash course',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">
          {' '}
          <h1>header from layout file</h1>
          {children}
          <h1>footer from layout file</h1>
        </main>
      </body>
    </html>
  );
}
