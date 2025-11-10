import { motion } from "framer-motion";

export const IntroLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.div
        className="mt-6 w-24 h-1 bg-white rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </div>
  );
};
