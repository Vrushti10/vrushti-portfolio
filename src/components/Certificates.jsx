import { motion } from "framer-motion";

// Certificate PDFs
import cert1 from "../assets/SQL_Foundations.pdf";
import cert2 from "../assets/ComputerVisionApp.pdf";
import cert3 from "../assets/ CNN using TensorFlow.pdf";
import cert4 from "../assets/Delloite_Certificate.pdf";

const CERTS = [
  {
    title: "SQL Foundations",
    org: "Microsoft (Coursera)",
    desc: "Core SQL concepts including querying, filtering, joins, and database fundamentals for structured data analysis.",
    file: cert1,
  },
  {
    title: "Computer Vision Application",
    org: "Certificate",
    desc: "Hands-on computer vision application work involving practical CV workflows and real-world implementation thinking.",
    file: cert2,
  },
  {
    title: "CNN Using TensorFlow",
    org: "Certificate",
    desc: "Implemented Convolutional Neural Networks (CNNs) using TensorFlow, strengthening deep learning foundations for vision tasks.",
    file: cert3,
  },
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte (Forage)",
    desc: "Completed Deloitte’s job simulation in Data Analytics & Forensic Technology with real-world problem solving and reporting tasks.",
    file: cert4,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Certificates
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Verified learning and achievements — view the original PDF
            certificates.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group p-6 rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 
            bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl 
            hover:scale-[1.03] hover:border-indigo-400/60 dark:hover:border-indigo-500/50
            transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
              {c.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {c.org}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {c.desc}
            </p>

            <a
              href={c.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center mt-6 w-full px-4 py-2 rounded-2xl 
              bg-indigo-500 text-white font-medium 
              hover:bg-indigo-600 hover:scale-[1.02] transition"
            >
              View PDF
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
