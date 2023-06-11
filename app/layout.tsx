import Modal from "./components/modals/modal";
import RegisterModal from "./components/modals/registerModal";
import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunitoFont = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "WanderBD - Travel around BD",
  description: "this project is inspired by airBnB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <RegisterModal />
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
