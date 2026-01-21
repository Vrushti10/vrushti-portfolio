import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // load theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
    else setTheme("dark");
  }, []);

  // apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-zinc-50 text-zinc-950 dark:bg-[#05070f] dark:text-white overflow-x-hidden">
      {/* subtle background grid */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.09] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/40" />
      </div>

      {/* theme toggle */}
      <div className="fixed top-5 right-5 z-50">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm"
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          <span className="text-sm font-semibold">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </motion.button>
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-5 md:px-6 pt-24 pb-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Extra />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
