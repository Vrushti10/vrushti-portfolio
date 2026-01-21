import { motion } from "framer-motion";

const PROJECTS = [
  {
    category: "Embedded Systems & IoT",
    items: [
      {
        title: "Home Security System",
        tech: "Arduino, Python, RFID, Servo Motor",
        points: [
          "Designed an IoT-based access control system using RFID authentication.",
          "Integrated servo-based locking mechanism and unauthorized-access alert system.",
        ],
      },
      {
        title: "River Water Cleaner Boat",
        tech: "Arduino, DC Motors, Conveyor System",
        points: [
          "Built an Arduino-controlled robotic boat to collect floating waste.",
          "Implemented conveyor mechanism and weight measurement for collected waste.",
        ],
      },
    ],
  },
  {
    category: "Academic Projects",
    items: [
      {
        title: "Traffic Light Optimization",
        tech: "Python, SUMO Simulation",
        points: [
          "Optimized urban traffic flow using genetic algorithms and probabilistic models.",
        ],
      },
      {
        title: "Deblurring and Enhancing Astrophotographs",
        tech: "Python, Digital Image Processing",
        points: [
          "Designed PSF-based image restoration pipeline using star detection and sub-pixel centering.",
        ],
      },
      {
        title: "Research Project: ACOUSLIC-AI (3D Ultrasound Segmentation) — Ongoing",
        tech: "3D U-Net, Segmentation",
        points: [
          "Working on 3D U-Net based segmentation to improve Dice coefficient accuracy.",
        ],
      },
    ],
  },
  {
    category: "Personal / Software Projects",
    items: [
      {
        title: "Virtual Assistant",
        tech: "MERN Stack",
        points: [
          "Developing a web-based assistant supporting voice commands and task scheduling.",
        ],
      },
      {
        title: "JavaScript Calculator",
        tech: "HTML, CSS, JavaScript",
        points: [
          "Built a responsive calculator supporting arithmetic and advanced operations.",
        ],
      },
    ],
  },
];

function GlowCard({ children }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-xl transition hover:scale-[1.02]">
      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-[80px]" />
        <div className="absolute bottom-[-120px] right-[-80px] w-72 h-72 bg-pink-500/15 blur-[90px]" />
      </div>

      {/* border shine */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 ring-1 ring-indigo-500/30" />

      <div className="relative p-7">{children}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Embedded systems, academic builds, and software products.
            </p>
          </div>

          <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            curated selection ✦
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {PROJECTS.map((block) => (
            <div key={block.category}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{block.category}</h3>
                <span className="text-xs px-3 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/40 dark:bg-zinc-950/30 text-zinc-600 dark:text-zinc-300">
                  {block.items.length} items
                </span>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {block.items.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <GlowCard>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-extrabold tracking-tight">
                            {p.title}
                          </h4>
                          <p className="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                            {p.tech}
                          </p>
                        </div>
                        <span className="text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition">
                          ↗
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {p.points.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          built with precision
                        </span>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          View Details →
                        </span>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
