import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
   Github,
} from "lucide-react";
import { SiWhatsapp, SiLeetcode } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">

      <div className="text-center py-16 bg-[#0b0b12] text-gray-200">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-4">
        Let&apos;s Connect
      </h2>

      <p className="text-lg mb-4">
        Ready to collaborate? Let&apos;s build something amazing together
      </p>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        My inbox is always open. Whether you have a question, want to discuss
        opportunities, or just want to say hello, I&apos;ll try my best to get
        back to you!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sai-teja-bandari/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center w-32 h-32 bg-[#141420] rounded-2xl shadow-md transition-all duration-300 hover:bg-[#0A66C2]"
        >
          <Linkedin
            size={40}
            className="mb-3 text-gray-200 transition-colors duration-300 group-hover:text-white"
          />
          <span className="text-sm font-medium group-hover:text-white">
            LinkedIn
          </span>
        </a>
        
        {/* GitHub */}
        <a
          href="https://github.com/SaitejaBandari756"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center w-32 h-32 bg-[#141420] rounded-2xl shadow-md transition-all duration-300 hover:bg-[#333]"
        >
          <Github
            size={40}
            className="mb-3 text-gray-200 transition-colors duration-300 group-hover:text-white"
          />
          <span className="text-sm font-medium group-hover:text-white">
            GitHub
          </span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/9LGLnbR6rB/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center w-32 h-32 bg-[#141420] rounded-2xl shadow-md transition-all duration-300 hover:bg-[#FFA116]"
        >
          <SiLeetcode
            size={40}
            className="mb-3 text-gray-200 transition-colors duration-300 group-hover:text-white"
          />
          <span className="text-sm font-medium group-hover:text-white">
            LeetCode
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917569847387"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center w-32 h-32 bg-[#141420] rounded-2xl shadow-md transition-all duration-300 hover:bg-[#25D366]"
        >
          <SiWhatsapp
            size={40}
            className="mb-3 text-gray-200 transition-colors duration-300 group-hover:text-white"
          />
          <span className="text-sm font-medium group-hover:text-white">
            WhatsApp
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:saitejabandari49@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center w-32 h-32 bg-[#141420] rounded-2xl shadow-md transition-all duration-300 hover:bg-[#EA4335]"
        >
          <Mail
            size={40}
            className="mb-3 text-gray-200 transition-colors duration-300 group-hover:text-white"
          />
          <span className="text-sm font-medium group-hover:text-white">
            Email
          </span>
        </a>

      </div>
    </div>
    </section>
  );
};
