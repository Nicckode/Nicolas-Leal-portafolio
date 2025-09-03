import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaChalkboardTeacher } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const achievements = [
  {
    icon: FaTrophy,
    title: "Unsolved Mysteries Course",
    subtitle: "First place",
    description:
      'We had to write the final script that closed the story “Unsolved Mysteries”. Many people participated, and I was one of the three winners.',
    link: "https://platzi.com/cursos/misterio/version-1-nicolas-leal/",
    linkLabel: "View Certificate",
  },
  {
    icon: FaMedal,
    title: "Student of the Month",
    subtitle: "First place",
    description:
      "Awarded for dedication and performance. I received a private lesson with an English teacher of my choice and a paid English test voucher.",
    link: "https://platzi.com/blog/reconocimiento-a-estudiantes-destacados-de-english-academy/",
    linkLabel: "Read Article",
  },
  {
    icon: FaChalkboardTeacher,
    title: "English Teacher",
    subtitle: "Personal & informal English",
    description:
      "Part-time English teacher in my town. I teach friends, colleagues, and family, helping them improve practical communication.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition"
            >
              <achievement.icon className="text-indigo-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-gray-400 text-sm">{achievement.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mt-2">
                {achievement.description}
              </p>

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-500 transition"
                >
                  {achievement.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
