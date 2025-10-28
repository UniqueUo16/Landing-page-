"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypewriterText() {
  const sentences = [
    "Welcome to Adeyemi's creative platform.",
    "We design with passion and precision.",
    "Let’s build the future — together.",
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[index];
    const typingSpeed = isDeleting ? 40 : 80;

    let typingInterval; // ✅ fixed — no TypeScript syntax

    if (!isDeleting && displayed.length < current.length) {
      typingInterval = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      typingInterval = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayed.length === current.length) {
      typingInterval = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % sentences.length);
    }

    return () => clearTimeout(typingInterval);
  }, [displayed, isDeleting, index, sentences]);

  return (
    <motion.div
      className="text-black text-[0.8rem] mt-6 sm:text-xl md:text-2xl font-mono tracking-wide text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        key={displayed}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="whitespace-pre"
      >
        {displayed}
        <span className="text-amber-500 animate-pulse">|</span>
      </motion.span>
    </motion.div>
  );
}
