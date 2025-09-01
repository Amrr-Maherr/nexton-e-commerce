"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsappButton() {
  const whatsappNumber = "+201234567890";
  const message = "Hello! I would like to chat with you.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
    >
      <MessageSquare size={28} />
    </a>
  );
}
