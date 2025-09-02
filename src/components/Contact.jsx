import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";




export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex justify-center gap-8 text-3xl">
        <a
          href="mailto:nicolas.lealgonza@gmail.com"
          className="hover:text-blue-500 transition"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://github.com/Nicckode"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nickode/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="/cv.pdf" // cambia por la ruta real de tu CV
          download
          className="px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
