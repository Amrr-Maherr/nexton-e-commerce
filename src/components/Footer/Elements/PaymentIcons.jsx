"use client";
import Image from "next/image";

export default function PaymentIcons() {
  const paymentMethods = [
    { src: "/images/ApplePay.png", alt: "Apple Pay" },
    { src: "/images/card.png", alt: "Credit Card" },
    { src: "/images/GooglePay.png", alt: "Google Pay" },
    { src: "/images/Stripe.png", alt: "Stripe" },
    { src: "/images/visa.png", alt: "Visa" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      {paymentMethods.map((method) => (
        <div key={method.alt} className="w-8 h-8 relative">
          <Image
            src={method.src}
            alt={method.alt}
            fill
            className="object-contain"
            sizes="32px"
          />
        </div>
      ))}
    </div>
  );
}
