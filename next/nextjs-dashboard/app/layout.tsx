import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const meatadata: Metadata ={
  title: 'Sample Billing App for spaceMade ',
  description: 'Sample Billing APp using Next.js',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${inter.className} antialised`}>{children}</body>
    </html>
  );
}
