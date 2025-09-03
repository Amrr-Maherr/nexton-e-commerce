"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <form className="mx-auto p-6 w-full bg-white flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Input
          as="textarea"
          id="message"
          placeholder="Your Message"
          rows={5}
          required
          className="p-3"
        />
      </div>

      <Button type="submit" className="bg-black rounded-full">
        Send
      </Button>
    </form>
  );
}
