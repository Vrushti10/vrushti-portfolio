import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const contactLinks = [
    { icon: <FaGithub size={24} />, label: "GitHub", href: "https://github.com/vrushti-p", color: "from-slate-600 to-slate-700" },
    { icon: <FaLinkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/vrushti-patel-7963832a3/", color: "from-blue-600 to-blue-700" },
    { icon: <FaEnvelope size={24} />, label: "Email", href: "mailto:vypatel2005@gmail.com", color: "from-indigo-600 to-indigo-700" },
  ];

  return (
    <section id="contact" className="mt-32 mb-12 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-light"
          >
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
              }}
              className={`group relative rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 overflow-hidden transition`}
            >
              {/* Animated background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition duration-500 blur-xl`} />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 rounded-full bg-gradient-to-r ${link.color} text-white shadow-lg`}
                >
                  {link.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {link.label}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    Click to connect
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left - Quick Links */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border-2 border-indigo-500/30 dark:border-indigo-500/20 backdrop-blur-xl p-8"
            whileHover={{ borderColor: "rgba(99, 102, 241, 0.6)" }}
          >
            <h3 className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                { name: "GitHub", url: "https://github.com/vrushti-p", icon: "🐙" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/vrushti-patel-7963832a3/", icon: "💼" },
                { name: "Medium Blog", url: "https://medium.com/@vrushti.p", icon: "✍️" },
                { name: "LeetCode", url: "https://leetcode.com/u/Vrushti_patel10/", icon: "💻" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4, color: "#6366f1" }}
                  className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium hover:text-indigo-600 transition group"
                >
                  <span className="text-xl group-hover:scale-125 transition">{link.icon}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Direct Email */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/30 dark:border-cyan-500/20 backdrop-blur-xl p-8 flex flex-col justify-between"
            whileHover={{ borderColor: "rgba(6, 182, 212, 0.6)" }}
          >
            <div>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent mb-3">
                Send Direct Email
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light">
                Have a question or proposal? Send me an email and I'll get back to you shortly.
              </p>
            </div>

            <motion.a
              href="mailto:vypatel2005@gmail.com?subject=Portfolio%20Contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg text-center"
            >
              Email Me Now
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
