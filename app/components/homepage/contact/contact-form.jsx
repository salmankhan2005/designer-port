"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState, useRef } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import contactAnimation from "@/app/assets/lottie/contact.json";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    projectType: "Branding",
    message: "",
  });
  const form = useRef();

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }
    try {
      setIsLoading(true);
      await emailjs.sendForm(
        'service_grsbtdn',
        'template_cn072j6',
        form.current,
        'weRuLa93NvvOExLvx'
      );
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", projectType: "Branding", message: "" });
    } catch (error) {
      toast.error("Failed to send message, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full flex justify-center items-center py-12 px-2 bg-gradient-to-br from-[#10172d] via-[#181c2a] to-[#232946]">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#10172d] via-[#181c2a] to-[#232946] backdrop-blur-lg rounded-3xl shadow-2xl border border-[#16f2b3]/30 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Animation */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#16f2b3]/20 to-[#232946]/60 p-6 md:p-10">
          <Lottie animationData={contactAnimation} loop={true} className="w-60 h-60 md:w-72 md:h-72" />
        </div>
        {/* Right: Form */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#16f2b3] mb-2 uppercase tracking-wide">Let&apos;s Connect</h2>
          <p className="text-gray-200 mb-6 text-sm md:text-base">If you have a project, idea, or opportunity, feel free to reach out. I love collaborating on creative design work!</p>
          <form ref={form} onSubmit={handleSendMail} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-base text-white font-medium">Your Name</label>
              <input
                className="bg-[#10172d] border border-[#16f2b3]/40 rounded-lg px-4 py-2 text-white focus:border-[#16f2b3] outline-none transition-all duration-300 placeholder:text-gray-400"
                type="text"
                maxLength="100"
                required={true}
                name="user_name"
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                value={userInput.name}
                placeholder="Enter your name"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base text-white font-medium">Your Email</label>
              <input
                className="bg-[#10172d] border border-[#16f2b3]/40 rounded-lg px-4 py-2 text-white focus:border-[#16f2b3] outline-none transition-all duration-300 placeholder:text-gray-400"
                type="email"
                maxLength="100"
                required={true}
                name="user_email"
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
                placeholder="Enter your email"
                suppressHydrationWarning
              />
              {error.email && <p className="text-xs text-red-400 mt-1">Please provide a valid email!</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base text-white font-medium">Project Type</label>
              <select
                className="bg-[#10172d] border border-[#16f2b3]/40 rounded-lg px-4 py-2 text-white focus:border-[#16f2b3] outline-none transition-all duration-300"
                name="project_type"
                value={userInput.projectType}
                onChange={(e) => setUserInput({ ...userInput, projectType: e.target.value })}
                required
                suppressHydrationWarning
              >
                <option value="Branding">Branding</option>
                <option value="Poster Design">Poster Design</option>
                <option value="Social Media">Social Media</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Illustration">Illustration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base text-white font-medium">Your Message</label>
              <textarea
                className="bg-[#10172d] border border-[#16f2b3]/40 rounded-lg px-4 py-2 text-white focus:border-[#16f2b3] outline-none transition-all duration-300 placeholder:text-gray-400"
                maxLength="500"
                name="message"
                required={true}
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                rows="4"
                value={userInput.message}
                placeholder="Type your message..."
                suppressHydrationWarning
              />
            </div>
            {error.required && <p className="text-xs text-red-400">All fields are required!</p>}
            <button
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-black to-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 hover:shadow-lg"
              role="button"
              type="submit"
              disabled={isLoading}
              suppressHydrationWarning
            >
              {isLoading ? (
                <span>Sending...</span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;