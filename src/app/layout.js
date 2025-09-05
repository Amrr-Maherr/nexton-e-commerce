import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Index from "@/components/Header";
import Footer from "@/components/Footer/Index";
import WhatsappButton from "@/components/WhatsappButton/WhatsappButton";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { ReduxProvider } from "@/ReduxProvider/ReduxProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEXTON",
  description:
    "NEXTON is your ultimate online shopping destination, offering a wide range of products with fast delivery, secure payments, and an intuitive shopping experience.",
  icons: {
    icon: "/online-shopping.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Index />
        <ReduxProvider>{children}</ReduxProvider>
        <WhatsappButton />
        <ScrollToTop />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
