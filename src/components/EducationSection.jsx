import { motion } from "framer-motion";
import collegeLogo from "../assets/college_logo.png";
import { Briefcase, Code, User } from "lucide-react";

const Card = ({ children }) => (
  <div className="bg-gradient-to-br from-[#141418] to-[#0e0e12] border border-gray-700 rounded-2xl shadow-2xl">
    {children}
  </div>
);

const CardContent = ({ children }) => <div className="p-8">{children}</div>;

const Badge = ({ children }) => (
  <span className="bg-transparent text-gray-300 border border-gray-600 px-4 py-2 rounded-full hover:bg-gray-800 transition">
    {children}
  </span>
);

export default function AboutEducationSection() {
  const courses = [
    "Data Structures & Algorithms",
    "Web Technologies",
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Networking",
    "Database Management",
    "Operating Systems",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0b0b0f] text-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <h5 className="text-xl md:text-2xl font-semibold mt-3 leading-snug text-gray-300">
            Get to Know me Better
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-[#141418] to-[#0e0e12] border border-gray-700 rounded-2xl shadow-xl p-8 text-center"
          >
            <User className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm <span className="text-sky-400 font-medium">Sai Teja Bandari</span>,
              a Computer Science graduate with hands-on experience building
              production-grade applications. I enjoy solving complex backend
              challenges and turning ideas into{" "}
              <span className="text-sky-400">scalable, deployable software</span>.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-[#141418] to-[#0e0e12] border border-gray-700 rounded-2xl shadow-xl p-8 text-center"
          >
            <Code className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I build{" "}
              <span className="text-sky-400">full-stack web applications</span> and{" "}
              <span className="text-sky-400">REST APIs</span> using FastAPI, Django,
              and React. I work with databases, Docker, and CI/CD pipelines —
              focusing on clean architecture, performance, and real-world usability.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-[#141418] to-[#0e0e12] border border-gray-700 rounded-2xl shadow-xl p-8 text-center"
          >
            <Briefcase className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I aim to grow as a{" "}
              <span className="text-sky-400">software engineer</span> who builds
              systems that scale. I'm actively seeking opportunities where I can
              contribute to engineering teams, ship quality code, and keep
              growing with every problem I solve.
            </p>
          </motion.div>
        </div>



        <div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex-1 text-left">
              <h2 className="text-3xl font-bold text-sky-400 mb-4">Education</h2>
            </div>
          </div>
          <Card>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="flex justify-center items-center md:w-1/4"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={collegeLogo}
                    alt="College Logo"
                    className="w-48 h-48 rounded-xl object-contain"
                  />
                </motion.div>

                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold text-gray-100">
                    St. Martin's Engineering College
                  </h3>
                  <p className="text-gray-400 text-lg mt-1">
                    Bachelor of Technology in CSE (AI & ML)
                  </p>
                  <p className="text-emerald-400 font-medium mt-2">
                    2022 - 2026 | CGPA: 8.17 / 10
                  </p>

                  <p className="text-gray-300 mt-6 font-medium">
                    Key Coursework:
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {courses.map((course, index) => (
                      <Badge key={index}>{course}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
