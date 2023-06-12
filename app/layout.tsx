import RegisterModal from './components/modals/registerModal';
import Navbar from './components/navbar/navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToastProvider from './providers/toastProvider';

const nunitoFont = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'WanderBD - Travel around BD',
  description: 'this project is inspired by airBnB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={nunitoFont.className}>
        <ToastProvider />
        <RegisterModal />
        <Navbar />
        <div className='pb-20 pt-28'>
        {children}
        </div>
      </body>
    </html>
  );
}
