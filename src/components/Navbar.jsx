import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/VrushtiPatel_Resume.pdf";

export default function Navbar({ theme, toggleTheme }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-zinc-950/40 border-b border-zinc-200/50 dark:border-zinc-800/50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Vrushti<span className="text-indigo-500">.</span>
        </motion.a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                color: "#6366f1",
                transition: { duration: 0.2 }
              }}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 relative group transition"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Right section: Resume + Theme */}
        <div className="flex items-center gap-3">
          {/* Resume Download Button */}
          <motion.a
            href={resume}
            download="VrushtiPatel_Resume.pdf"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/50 transition"
          >
            <FiDownload size={16} />
            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
