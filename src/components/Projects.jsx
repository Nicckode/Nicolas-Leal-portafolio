import { motion } from "framer-motion";


const projects = [
  {
    title: "Bakery Website",
    description: "Modern responsive website for a bakery.",
    link: "https://nicckode.github.io/Bakery/",
  },
  {
    title: "Batatabit",
    description: "Landing page about cryptocurrency exchange.",
    link: "https://nicckode.github.io/Batatabit/",
  },
  {
    title: "Web Video",
    description: "Responsive web app for video playback.",
    link: "https://nicckode.github.io/Web-Video/",
  },
  {
    title: "Simon Dice",
    description: "Interactive memory game built with JavaScript.",
    link: "https://nicckode.github.io/Simon-Dice/",
  },
  {
    title: "To-Do List",
    description: "Task management app with local storage.",
    link: "https://nicckode.github.io/to-dolist/",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using an external API.",
    link: "https://nicckode.github.io/weather-app/",
  },
  {
    title: "Programming Quiz",
    description: "Quiz game for testing programming knowledge.",
    link: "https://nicckode.github.io/Programming-quiz/",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-display font-bold text-center text-primary mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-light p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
