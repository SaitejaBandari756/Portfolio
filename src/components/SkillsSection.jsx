import React from "react";
import { Code, Cpu, Database, Brain } from "lucide-react"; // icons

const skills = {
  "Programming Languages": [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "</>" },
    { name: "JavaScript", icon: "🟨" },
  ],
  "Technologies / Frameworks": [
    { name: "ReactJS", icon: "⚛️" },
    { name: "NodeJS", icon: "🟩" },
    { name: "Django", icon: "🌿" },
    
  ],
  "Database & Tools": [
    { name: "MongoDB", icon: "🌱" },
    { name: "MySQL", icon: "💾" },
  ],
  "Domain Knowledge": [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Artificial Intelligence", icon: "🧠" },
    { name: "Deep Learning", icon: "🔗" },
  ],
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0d0d0d] text-white min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Tools and technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex flex-col items-center mb-6">
                {index === 0 && <Code className="text-cyan-400 mb-3" size={40} />}
                {index === 1 && <Cpu className="text-cyan-400 mb-3" size={40} />}
                {index === 2 && <Database className="text-cyan-400 mb-3" size={40} />}
                {index === 3 && <Brain className="text-cyan-400 mb-3" size={40} />}
                <h3 className="text-xl font-semibold text-center">{category}</h3>
              </div>

              <div className="space-y-3">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-[#2a2a2a] hover:bg-[#333] transition rounded-lg px-4 py-3"
                  >
                    <span className="text-xl mr-3">{skill.icon}</span>
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
