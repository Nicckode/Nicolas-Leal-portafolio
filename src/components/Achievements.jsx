import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

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
      'We had to write the final script that closed the story “Unsolved Mysteries”. Many people participated— I was one of the three winners.',
  },
  {
    icon: FaMedal,
    title: "Student of the Month",
    subtitle: "First place",
    description:
      "Awarded for dedication and performance. I received a private lesson with an English teacher of my choice and a paid English test voucher.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "English Teacher",
    subtitle: "Personal & informal English",
    description:
      "Part-time English teacher in my town. I teach friends, colleagues, and family, helping them improve practical communication.",
  },
  {
    icon: FaLaptopCode,
    title: "Software Developer — PATHO",
    subtitle: "Startup in progress",
    description:
      "Building web experiences with JavaScript (HTML5, CSS3/SCSS) and connecting frontends to backend services (PHP + MySQL).",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8"
      >
        Achievements
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {achievements.map(({ icon: Icon, title, subtitle, description }) => (
          <motion.article
            key={title}
            variants={card}
            className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg border border-white/5 hover:border-blue-400/30 transition"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Icon className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-blue-300 text-sm mb-2">{subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
