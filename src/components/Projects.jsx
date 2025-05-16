import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-200">Technologies used:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded 
                      dark:bg-blue-700 dark:text-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="flex space-x-4">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        <Github className="w-5 h-5 mr-1" />
        GitHub
      </a>
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
        >
          <ExternalLink className="w-5 h-5 mr-1" />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills and projects.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/vasu-22/portfolio",
      liveLink: "https://vasu-tech.netlify.app",
    },
    {
      title: "Movie Recommendation System",
      description: "An AI-powered movie recommendation system using collaborative filtering.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      githubLink: "https://github.com/vasu-22/YBI-found.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">ᴘʀᴏᴊᴇᴄᴛꜱ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
