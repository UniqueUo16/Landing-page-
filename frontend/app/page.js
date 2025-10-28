"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import TypewriterText from "@/components/Typewriter";
import { Facebook, Linkedin, Twitter, X } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className={`${montserrat.className} flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-24`}
      >
        {/* === LEFT SIDE === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left"
        >
          <p className="text-sm md:text-base text-gray-500 tracking-wide">
            ------- <TypewriterText />
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-black">
            <span className="font-semibold">
              <span className="text-amber-700">Subscribe </span>To Our
            </span>
            <br />
            <span className="font-light">Tomorrow</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Discover creative stories, brand ideas, and bold insights every
            week. A newsletter made for thinkers, doers, and dreamers shaping
            what comes next.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 ml-[-1rem]">
            <div className="flex -space-x-4">
              <Image
                src="/it1.webp"
                alt="Profile 1"
                width={100}
                height={60}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/it1.webp"
                alt="Profile 2"
                width={100}
                height={60}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/landing1.webp"
                alt="Profile 3"
                width={100}
                height={60}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm text-gray-600 font-medium max-w-[180px]">
              Trusted by 10K+ readers weekly.
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
          >
            Subscribe Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative mt-16 lg:mt-0 flex justify-center lg:justify-end lg:w-1/2"
        >
          <div className="absolute w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-50 top-[-2rem] right-[-2rem]" />

          <Image
            src="/relic.avif"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="rounded-full object-cover relative z-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-8 right-0 bg-white/80 backdrop-blur-md border-2 border-amber-200 shadow-xl rounded-2xl p-4 flex items-center gap-4 w-[280px] sm:w-[350px]"
          >
            <Image
              src="/it1.webp"
              alt="User"
              width={55}
              height={55}
              className="rounded-full border-2 border-black object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black">Amad</span>
              <span className="text-sm text-gray-700 leading-snug">
                “The best creative newsletter I’ve read all year.”
              </span>
            </div>
            <span className="absolute bottom-[-2rem] left-0 w-full bg-amber-700 text-white text-sm py-2 rounded-b-md text-center font-medium">
              Try For Free Today
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-amber-700 w-1.5 h-[180px] mx-auto rotate70"
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
        className="bg-amber-500 w-1.5 h-[180px] mx-auto"
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="bg-amber-500 w-1.5 h-[180px] mx-auto"
      ></motion.div> */}

      <section className="text-amber-700 py-12 px-6 flex flex-wrap justify-center items-center gap-10 md:gap-16 text-center font-medium tracking-wide">
        {[
          { img: "/vb2.gif", num: "10K+", label: "Active Subscribers" },
          { img: "/vb3.gif", num: "500+", label: "Projects Delivered" },
          { img: "/vb1.gif", num: "120+", label: "Trusted Startups" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Image
              src={item.img}
              alt={item.label}
              width={60}
              height={60}
              className="rounded-full bg-white/10 p-2"
            />
            <h3 className="text-3xl font-bold">{item.num}</h3>
            <p className="text-sm uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="bg-amber-800 text-white py-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Why Get Updated?
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl">
          {[
            {
              title: "Youth Jobs Created",
              desc: `Every trend starts small — before it goes mainstream. We track ideas from the edges of the internet: the bold creators, design shifts, and digital culture sparks that shape what’s next.`,
            },
            {
              title: "Projects Delivered",
              desc: `No fluff. No recycled advice. Just crisp insights that respect your time. We cut through noise and hand you what truly matters — in under five minutes.`,
            },
            {
              title: "Investments",
              desc: `Creativity isn’t random — it’s fueled by what you see, read, and think. Our weekly drops bring content that recharges your imagination and inspires your next move.`,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="text-black p-8  cursor-pointer flex flex-col justify-between h-[200px]"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-amber-200">
                  {item.title}
                </h3>
                <p className="text-gray-100 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <motion.div
                className="mt-6 text-amber-700 font-medium flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span>Learn More</span>
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
          <span className="flex justify-center items-center m-7 bg-white p-5 text-amber-700">Subscribe To NewsLeter</span>
        </div>
      </section>
        {/* ===== PROMO + CONTACT ===== */}
      <section className="bg-white text-black py-20 px-6 md:px-20 flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-amber-700">
            A Little Extra Noise
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Sometimes you just want to fill the page with unnecessary promo —
            because why not? Talk about your community, your brand, or just flex
            your space.
          </p>
          <p className="text-gray-700 italic">
            “The newsletter world is crowded — but yours can still feel like a
            conversation worth opening.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-amber-800  rounded-sm p-10 md:p-16 max-w-3xl mx-auto w-full"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-800 mb-10">
            Have a question or feedback? Drop a message below.
          </p>

          <form className="flex flex-col gap-6">
            {["name", "email", "message"].map((field, i) => (
              <div key={i} className="flex flex-col">
                <label htmlFor={field} className="font-medium mb-2 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    placeholder="Write your message here..."
                    className="p-3 rounded-md text-black h-32 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={
                      field === "email"
                        ? "you@example.com"
                        : "Enter your name"
                    }
                    className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-amber-800 text-amber-100 font-semibold py-3 px-6 shadow-md w-full hover:bg-amber-100 transition-all duration-200 self-center mt-4"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* ===== BLOG / INSIGHT SECTION ===== */}
<section className="relative bg-white text-black py-24 px-6 md:px-16">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-700"
  >
    Problems We Solve with Every Newsletter
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
      {
        img: "/relic.avif",
        title: "1. Information Overload",
        text: "The internet drowns you in noise — endless feeds, clickbait, and clutter. Our newsletter filters that chaos into five minutes of real insight.",
      },
      {
        img: "/vb3.gif",
        title: "2. Lack of Creative Focus",
        text: "You want inspiration that actually matters. We spotlight projects, tools, and creators who help you sharpen your creative edge.",
      },
      {
        img: "/landing1.webp",
        title: "3. Staying Consistently Inspired",
        text: "It’s hard to stay motivated when ideas fade fast. Each edition is a nudge — stories that fuel you, not drain you.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
      >
        {/* Image Background */}
        <Image
          src={item.img}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-[420px] object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-3"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-sm leading-relaxed max-w-md"
          >
            {item.text}
          </motion.p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* ===== FAQ ===== */}
      <section className="blog1 bg-gray-50 bg-cover text-black py-20 px-6 md:px-16 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-amber-700"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full max-w-4xl space-y-6">
          {[
            {
              q: "How often will I receive the newsletter?",
              a: "You’ll get one carefully curated email every week — no spam, no fluff.",
            },
            {
              q: "Can I unsubscribe anytime?",
              a: "Absolutely. Every email includes an unsubscribe link.",
            },
            {
              q: "Is it really free?",
              a: "Yes — 100% free. Premium features may come later, but your subscription now costs nothing.",
            },
            {
              q: "What kind of content can I expect?",
              a: "Design insights, creativity tips, growth ideas, and behind-the-scenes stories from Adeyemi’s creative circle.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              <details className="group">
                <summary className="flex justify-between items-center text-lg font-semibold text-amber-700 cursor-pointer">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 leading-relaxed">{item.a}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

    {/* ===== ENHANCED FOOTER ===== */}
<footer className={`${montserrat.className} relative bg-gray-900 text-white py-16 px-6 md:px-16 justify-center items-center text-center`}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

    {/* === Brand Section === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center md:items-start"
    >
      <h3 className="text-3xl font-bold tracking-wide">
        Adeyemi<span className="text-amber-300">.</span>
      </h3>
      <p className="text-amber-200 text-sm mt-3 leading-relaxed max-w-xs">
        Creating stories, one newsletter at a time.  
        Your daily dose of creative energy and digital insight.
      </p>
      <div className="flex gap-4 mt-6 text-xl">
        <a href="#" className="hover:text-amber-300 transition-colors"><Linkedin/></a>
        <a href="#" className="hover:text-amber-300 transition-colors"><Twitter/></a>
        <a href="#" className="hover:text-amber-300 transition-colors"><Facebook/></a>
        <a href="#" className="hover:text-amber-300 transition-colors">Port:🌐</a>
      </div>
    </motion.div>

    {/* === Quick Links === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="flex flex-col items-center md:items-start"
    >
      <h4 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h4>
      <ul className="space-y-2 text-sm text-amber-100">
        {["About", "Contact", "FAQ", "Subscribe"].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* === Resources / Learn === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center md:items-start"
    >
      <h4 className="text-lg font-semibold mb-4 text-amber-300">Resources</h4>
      <ul className="space-y-2 text-sm text-amber-100">
        <li><a href="#" className="hover:text-white">Case Studies</a></li>
        <li><a href="#" className="hover:text-white">Press Kit</a></li>
        <li><a href="#" className="hover:text-white">Partner Program</a></li>
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
      </ul>
    </motion.div>

    {/* === Newsletter Signup === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center md:items-start"
    >
      <h4 className="text-lg font-semibold mb-4 text-amber-300">
        Join The Movement
      </h4>
      <p className="text-sm text-amber-100 mb-4">
        Subscribe for creative stories, ideas, and insights every week.
      </p>
      <form className="flex w-full max-w-xs">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 p-3 rounded-l-lg text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 transition-all text-white px-5 rounded-r-lg font-medium"
        >
          Join
        </button>
      </form>
    </motion.div>
  </div>

  {/* === Bottom Bar === */}
  <div className="border-t border-amber-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-amber-200">
    <p>© {new Date().getFullYear()} Adeyemi. All rights reserved.</p>
    <p className="mt-2 md:mt-0">Built with ❤️ by Adeyemi Studio Unique Uo</p>
  </div>

  {/* === Subtle Glow Effect === */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
</footer>
   <div className="">

      </div>
    </div>
  );
}
