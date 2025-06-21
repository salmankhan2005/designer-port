"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import ContactForm from './components/homepage/contact/contact-form';

export default function ContactForm() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_grsbtdn",      // Service ID
        "template_cn072j6",     // Template ID
        form.current,
        "weRuLa93NvvOExLvx"     // Public Key
      );
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSendMail} className="flex flex-col gap-4" autoComplete="off">
      <input name="user_name" placeholder="Your Name" required className="border p-2 rounded" />
      <input name="user_email" placeholder="Your Email" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Your Message" required className="border p-2 rounded" />
      <button type="submit" disabled={isLoading} className="bg-blue-600 text-white rounded px-4 py-2">
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}