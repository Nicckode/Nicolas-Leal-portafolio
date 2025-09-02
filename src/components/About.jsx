import { motion } from "framer-motion";
import { FaSwimmer, FaDumbbell, FaFistRaised, FaGlobeAmericas, FaCode } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Texto principal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg"
        >
          <p className="text-gray-300 leading-relaxed">
            I’m Nicolas Leal, a software engineering student passionate about building
            clean, user-friendly web apps. I enjoy solving problems, crafting interfaces
            with attention to detail, and learning new tools that help me deliver value.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
            Beyond coding, I’m a high-performance athlete. I love swimming, calisthenics,
            and martial arts, and I genuinely enjoy meeting different kinds of people,
            personalities, and cultures. That curiosity and discipline are the same traits
            I bring to my work as a developer.
          </p>
        </motion.div>

        {/* Intereses en “chips” */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaCode className="text-blue-400 shrink-0" />
              <span className="text-gray-300">Developing modern, accessible web apps</span>
            </li>
            <li className="flex items-center gap-3">
              <FaSwimmer className="text-blue-400 shrink-0" />
              <span className="text-gray-300">Swimming</span>
            </li>
            <li className="flex items-center gap-3">
              <FaDumbbell className="text-blue-400 shrink-0" />
              <span className="text-gray-300">Gymnastics / Calisthenics</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFistRaised className="text-blue-400 shrink-0" />
              <span className="text-gray-300">Martial arts</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobeAmericas className="text-blue-400 shrink-0" />
              <span className="text-gray-300">Meeting new people & cultures</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
