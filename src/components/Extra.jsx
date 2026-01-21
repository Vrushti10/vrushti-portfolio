import { motion } from "framer-motion";

const ACTIVITIES = [
  {
    title: "Volunteering at Gyan Prakash Cheritable Trust",
    desc: "Championing educational excellence through innovative teaching initiatives and community engagement programs.",
    icon: "🤝",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Event Planning (Ingenium 2025)",
    desc: "Planned and managed multiple events including an escape room event.",
    icon: "🎯",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Technical Writing",
    desc: "Wrote practical AI guides and blogs on Medium.",
    icon: "✍️",
    color: "from-cyan-500 to-blue-500"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Extra() {
  return (
    <section id="extra" className="mt-28 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-rose-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 0.3 }}
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
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Co-Curricular
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 font-light"
          >
            Things I do beyond academics — leadership, community, and writing.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-7"
        >
          {ACTIVITIES.map((activity, i) => (
            <motion.div
              key={activity.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
              }}
              className="group relative"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition duration-500 blur-xl`} />

              <div className="relative rounded-3xl border-2 border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-white/60 to-white/40 dark:from-zinc-950/60 dark:to-zinc-900/40 backdrop-blur-xl p-8 h-full flex flex-col overflow-hidden transition">
                {/* Top accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${activity.color} origin-left`}
                  style={{ width: "100%" }}
                />

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="text-4xl"
                  >
                    {activity.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:bg-clip-text transition"
                  >
                    {activity.title}
                  </motion.h3>
                </div>

                <motion.p
                  className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed font-light flex-grow"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {activity.desc}
                </motion.p>

                {/* Bottom decoration */}
                <motion.div
                  className="mt-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-700/50 opacity-0 group-hover:opacity-100 transition"
                >
                  <div className="flex gap-2">
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      Learn more →
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
