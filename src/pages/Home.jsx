import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <EducationSection />
        <AboutSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// import { useState, useEffect } from "react";
// import { IntroLoader } from "@/components/IntroLoader";
// import { motion, AnimatePresence } from "framer-motion";

// export const Home = () => {
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowLoader(false), 3000); // loader lasts 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

// return (
//   <AnimatePresence mode="wait">
//     {showLoader ? (
//       <IntroLoader key="loader" />
//     ) : (
//       <motion.div
//         key="home"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1 }}
//         className="p-8 text-white bg-[#141418] min-h-screen"
//       >
//         <h1 className="text-4xl font-bold">Hi, I'm Komali 👋</h1>
//         <p className="mt-4 text-lg text-gray-300">
//           Welcome to my portfolio. Here’s what I do...
//         </p>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// };
