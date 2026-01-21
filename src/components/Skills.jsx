import { motion } from "framer-motion";

const SKILLS = [
  {
    title: "Languages",
    items: ["Python", "C", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Embedded Systems",
    items: ["Arduino", "Sensors", "RFID", "Servo Motors"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "Django"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Docker", "GitHub", "GitLab", "AWS (Basics)", "VS Code"],
  },
  {
    title: "Domains",
    items: [
      "Embedded Systems",
      "IoT",
      "Artificial Intelligence",
      "Web Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-black tracking-tight">Technical Skills</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Strong foundation across software, embedded systems, and AI.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800
            bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl
            hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10
            hover:-translate-y-1 transition-all"
          >
            <h3 className="text-lg font-bold group-hover:text-indigo-400 transition">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-sm font-semibold
                  bg-zinc-100 dark:bg-zinc-800
                  text-zinc-700 dark:text-zinc-200
                  border border-zinc-200 dark:border-zinc-700
                  group-hover:border-indigo-500/50 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
