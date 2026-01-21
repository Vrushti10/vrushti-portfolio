import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 6.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              Vrushti<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">
              Building the future with AI, ML, and secure systems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4, color: "#6366f1" }}
                  className="block text-sm text-zinc-600 dark:text-zinc-400 font-light hover:text-indigo-600 transition"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-2">
              {[
                { name: "GitHub", url: "https://github.com/vrushti-p" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/vrushti-patel-7963832a3/" },
                { name: "Medium", url: "https://medium.com/@vrushti.p" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4, color: "#6366f1" }}
                  className="block text-sm text-zinc-600 dark:text-zinc-400 font-light hover:text-indigo-600 transition"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent my-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 dark:text-zinc-500 gap-4"
        >
          <p className="font-light">
            © {currentYear} <span className="font-semibold text-zinc-700 dark:text-zinc-300">Vrushti Patel</span>. All rights reserved.
          </p>
          <p className="font-light">
            Crafted with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              ❤️
            </motion.span> using React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
