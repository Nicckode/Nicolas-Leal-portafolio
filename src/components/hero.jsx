import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-display font-bold text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Nicolas Leal 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A passionate software engineering student building projects that make an impact.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-primary--tw-bg-opacity: 0.2; hover:bg-primary-dark rounded-2xl "
        >
          See my work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-2xl"
        >
          Contact me
        </a>
      </motion.div>
    </section>
  );
}
