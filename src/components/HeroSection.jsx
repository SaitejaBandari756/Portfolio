
import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 py-12"
    >
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-teal-300 text-sm md:text-base opacity-0 animate-fade-in">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in-delay-1">
              Sai Teja{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Bandari
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3 mx-auto lg:mx-0">
            Computer Science graduate specializing in AI & ML,
            passionate about building scalable systems and solving
            real-world problems through impactful software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-4 justify-center lg:justify-start">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/Bandari_SaiTeja_Software_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              View Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-[#0f172a]/40 rounded-[32px] p-2 md:p-3 shadow-2xl border border-white/5">
            <img
              src="/Profilepic.jpg"
              alt="Sai Teja"
              className="h-[420px] w-[280px] md:h-[460px] md:w-[310px] object-cover rounded-[28px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

