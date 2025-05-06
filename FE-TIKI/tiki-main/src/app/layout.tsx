import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header, Footer } from '@/components/shared';
import StoreProvider from '@/providers/StoreProvider';
import ToastProvider from '@/lib/react-toastify/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiki - Mua hàng giá tốt, hàng chuẩn, ship nhanh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <ToastProvider>
        <StoreProvider>
     <Header />
        <main className='flex justify-center flex-col mt-5 w-full'>
   
        
          <div className='w-full flex justify-center flex-col items-center ml-0'>
          
          {children}
     
          </div>
  
         
        </main>
      </StoreProvider>
          </ToastProvider>
  
 
        <Footer />
      </body>
    </html>
  );
}
