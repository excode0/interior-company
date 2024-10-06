import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'INTERIOR COMPANY',
  description: 'Generated by create next app',
};
interface CustomChildrenProps {
  type?: {
    noHeader?: boolean;
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode & CustomChildrenProps;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icons/mr.svg' />
        <script
          src='https://kit.fontawesome.com/3b6740b8ef.js'
          crossOrigin='anonymous'
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
