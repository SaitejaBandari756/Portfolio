import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real Time Object Detection",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project.png",
    tags: ["Python", "OpenCV", "YOLOv8"],
    // demoUrl: "#",
    githubUrl: "https://github.com/SaitejaBandari756/Real-Time-Object-Detection-Using-Yolo",
  },
  {
    id: 2,
    title: "IntelliDocs",
    description:
      "An Interactive ai Assistant to summarize the documents provided.",
    image: "/projects/project2.png",
    tags: ["Django", "React", "TailwindCSS", "Tesseract OCR"],
    // demoUrl: "#", 
    githubUrl: "https://github.com/SaitejaBandari756/IntelliDocs---AI",
  },
  {
    id: 3,
    title: "BIOME",
    description:"AI fitness coach that prevents injuries through frame-accurate video analysis.",
    image: "/projects/project3.png",
    tags: ["React", "FastAPI", "Google ADK"],
    // demoUrl: "https://biome-frontend-524095675885.us-central1.run.app/",
    githubUrl: "https://github.com/SaitejaBandari756/Biome",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my latest work and innovations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SaitejaBandari756"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
