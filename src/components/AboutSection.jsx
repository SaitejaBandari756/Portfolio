
import { motion } from "framer-motion";
import { Briefcase, Code, User } from "lucide-react";
import hackathon1 from "../assets/hack1.jpeg"; 
// import hackathon2 from "../assets/pic2.jpg"; 
const achievements = [
  {
    title: "Secured 2nd place in STARTUPS INDIA IDEAx PITCH FEAST",
    date: "October 16, 2025",
    organizer: "Conducted by Methodist College of Engineering and Technology",
    description:
      "Developed an AI-powered vulnerability detection platform that identifies bugs and security flaws of an organization's software systems.",
    images: [hackathon1],
  },
  // {
  //   title: "Won 3rd prize at Solutions Challenge Hackathon",
  //   date: "February 10, 2025",
  //   organizer: "Organized by GDGC–CVR College of Engineering",
  //   description:
  //     "Designed an innovative solution leveraging technology to address poverty-related challenges through data-driven insights.",
  //   images: [hackathon2],
  // },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0b0b0f] text-white relative">
      <div className="container mx-auto max-w-6xl">
        <div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex-1 text-left">
             <h2 className="text-3xl font-bold text-sky-400 mb-4">Achievements</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#141418] to-[#0e0e12] border border-gray-700 rounded-2xl shadow-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">
                    {achievement.title}
                  </h3>
                  <p className="text-emerald-400 mb-1">{achievement.date}</p>
                  <p className="text-gray-400 mb-4">{achievement.organizer}</p>

                  {/* Images */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {achievement.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="Achievement"
                        className="w-40 h-40 object-cover rounded-xl border border-gray-700"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
