import { motion } from "framer-motion";

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

export default function About() {
  return (
    <section id="about" className="mt-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base"
          >
            I'm <span className="font-bold text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text">Vrushti Patel</span>, a 3rd year BTech student at
            Ahmedabad University (graduating 2027). My core interests are in{" "}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              AI, ML, and Cyber Security
            </span>
            — building systems that are accurate, reliable, and safe.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base"
          >
            I thrive at the intersection of{" "}
            <span className="font-semibold">deep learning</span> and{" "}
            <span className="font-semibold">real-world engineering</span>: from
            medical imaging pipelines to IoT systems where security matters.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base font-semibold"
          >
            Currently exploring:
          </motion.p>

          <motion.ul
            variants={itemVariants}
            className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-200 text-base"
          >
            {[
              "🎯 Medical image segmentation & model generalization",
              "🧠 Efficient architectures (U-Net, 3D models, hybrids)",
              "🔐 Cyber security & secure system design",
              "📊 Applied ML for optimization"
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                className="font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />
          
          <motion.div
            className="relative rounded-3xl border-2 border-gradient-to-br from-indigo-500/50 to-cyan-500/20 dark:border-indigo-500/30 bg-gradient-to-br from-white/60 to-indigo-50/40 dark:from-zinc-950/60 dark:to-indigo-950/30 backdrop-blur-xl p-10 space-y-6"
            whileHover={{ y: -4 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-6">
                What I Bring
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "🤖 AI + ML Excellence",
                    desc: "Training stability, reproducibility, and clean experimentation"
                  },
                  {
                    title: "🔒 Security-First Mindset",
                    desc: "Edge cases, safe behavior, and systems that users can trust"
                  },
                  {
                    title: "⚙️ Full-Stack Execution",
                    desc: "End-to-end projects from embedded systems to ML pipelines"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <p className="font-semibold text-zinc-900 dark:text-white text-base">
                      {item.title}
                    </p>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
