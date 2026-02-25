
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 py-12"
    >
      {/* main container */}
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* LEFT: text */}
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
            Final Year Computer Science student specializing in AI & ML,
            aspiring to be a software developer driven by innovation and
            impactful coding.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-4 justify-center lg:justify-start">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/Bandari Sai Teja's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT: photo card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-[#0f172a]/40 rounded-[32px] p-2 md:p-3 shadow-2xl border border-white/5">
            {/* keep your image here */}
            <img
              src="../public/Profilepic.jpg" // <-- put your image here
              alt="Sai Teja"
              className="h-[420px] w-[280px] md:h-[460px] md:w-[310px] object-cover rounded-[28px]"
            />
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};



// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

//         {/* ==== LEFT TEXT SIDE ==== */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
//             <span className="opacity-0 animate-fade-in">Hello, I'm</span>
//             <br />
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               Sai Teja
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               Bandari
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3">
//             Final Year Computer Science student specializing in AI & ML, aspiring to be a software developer driven by innovation and impactful coding.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>

//         {/* ==== RIGHT IMAGE SIDE ==== */}
//         <div
//           className="md:w-1/2 flex justify-center"
//         >
//           <img
//             src="../public/gojo.jpg"  // <-- replace with your image path in /public
//             alt="profile-image"
//             className="rounded-2xl shadow-xl border border-gray-800 max-h-[440px] object-cover"
//           />
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
