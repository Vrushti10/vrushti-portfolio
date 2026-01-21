import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaKaggle } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

// CHANGE filename to your real image inside src/assets
import profile from "../assets/profile.jpg";
import resume from "../assets/VrushtiPatel_Resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-400">
            Hi, my name is
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight">
            Vrushti Patel.
          </h1>

          <h2 className="mt-2 text-3xl md:text-5xl font-black text-zinc-500 dark:text-zinc-400">
            I build AI + security driven systems.
          </h2>

          <p className="mt-6 text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-xl leading-relaxed">
            I’m a 3rd year BTech student at Ahmedabad University (Graduating 2027),
            focused on <span className="font-semibold">AI / ML</span>,{" "}
            <span className="font-semibold">Cyber Security</span>, and{" "}
            <span className="font-semibold">IoT systems</span>.
            I love building projects that are functional, scalable, and visually clean.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={resume}
              download="VrushtiPatel_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition flex items-center gap-2"
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-black font-semibold hover:scale-[1.03] transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-white/15 font-semibold hover:bg-zinc-100 dark:hover:bg-white/5 transition"
            >
              Contact
            </a>
          </div>

          {/* Social bar */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Social href="https://leetcode.com/u/Vrushti_patel10/" icon={<SiLeetcode />} />
            <Social href="https://codeforces.com/profile/vrushti_patel" icon={<SiCodeforces />} />
            <Social href="https://www.codechef.com/users/vrushti_p" icon={<SiCodechef />} />
            <Social href="https://medium.com/@vrushti.p" icon={<FaMedium />} />
            <Social href="https://www.linkedin.com/in/vrushti-patel-7963832a3/?trk=PROFILE_DROP_DOWN" icon={<FaLinkedin />} />
            <Social href="https://github.com/" icon={<FaGithub />} />
            <Social href="https://www.kaggle.com/" icon={<FaKaggle />} />
            <Social href="mailto:vrushti.p@ahduni.edu.in" icon={<HiOutlineMail />} />
          </div>

          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            📞 8866024176
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Neon border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 blur opacity-50" />

            <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={profile}
                alt="Vrushti Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl hover:scale-110 transition"
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
}
