"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import TypewriterText from "@/components/Typewriter";
import Herotype from "@/components/hero-type";
import { Facebook, Linkedin, Twitter, X } from "lucide-react";
import { useState } from "react";
import { Briefcase, Building, BookOpen, HeartPulse, Cpu } from "lucide-react";

const initiatives = [
  {
    icon: <Briefcase size={40} />,
    title: "Jobs & Training",
    sub: "Empower Youth, Build Tomorrow",
    desc: "Join initiatives creating jobs and skill opportunities for thousands.",
    color: "from-amber-100 to-amber-300",
  },
  {
    icon: <Building size={40} />,
    title: "Roads & Infrastructure",
    sub: "Connect Communities",
    desc: "Help us build safer roads, bridges, and a better-connected Osun State.",
    color: "from-blue-100 to-blue-300",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Education",
    sub: "Educate for the Future",
    desc: "Support schools, scholarships, and digital learning for every child.",
    color: "from-green-100 to-green-300",
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Healthcare",
    sub: "Healthy People, Stronger Nation",
    desc: "Be part of improving access to affordable, quality healthcare.",
    color: "from-rose-100 to-rose-300",
  },
  {
    icon: <Cpu size={40} />,
    title: "Tech & Innovation",
    sub: "Drive Digital Growth",
    desc: "Partner with us to nurture startups, innovation hubs, and smart solutions.",
    color: "from-purple-100 to-purple-300",
  },
];



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});


 const stats = [
  {
    title: "Youth Jobs Created",
    img: "/vb-1.gif.crdownload",
    desc: "Through targeted empowerment programs and skill acquisition initiatives, thousands of young people have gained access to sustainable employment opportunities. Senator Olubiyi Fadeyi Ajagunla’s campaign continues to bridge the gap between talent and opportunity — turning ambition into income, and dreams into careers that uplift entire families.",
  },
  {
    title: "Projects Delivered",
    img: "/vb-2.gif",
    desc: "From rural electrification and clean water access to educational facility upgrades and tech hubs, the campaign has consistently delivered on its promises. Every project reflects a commitment to progress, accountability, and long-term community growth — ensuring that no neighborhood is left behind in the march toward development.",
  },
  {
    title: "Investments",
    img: "/vb-3.gif",
    desc: "Strategic investments in local businesses, innovation centers, and agricultural enterprises have revitalized the regional economy. Senator Ajagunla’s forward-thinking approach attracts investors and fuels new ventures — empowering citizens to become contributors to economic prosperity, not just beneficiaries of aid.",
  },
];




const comments = [
  {
    name: "Amad",
    text: "I got a job through Senator Ajagunla's program 🥳☺️",
    img: "/it1.webp",
  },
  {
    name: "Lara",
    text: "Truly inspiring and insightful content every week!",
    img: "/stud.jpg",
  },
  {
    name: "David",
    text: "A must-read newsletter for any aspiring designer.",
    img: "/it3.webp",
  },
];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % comments.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length);

  return (
    <div className={`${montserrat.className} relative overflow-hidden bg-white`}>
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
          <div className="text-sm md:text-base text-gray-500 tracking-wide">
            ------- <TypewriterText />
          </div>

          <div className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-black">
<div className="text-center mt-24">
      <motion.span
        className="font-semibold text-3xl md:text-5xl block"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          duration: 0.8,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{amount: 0.105, once:false}}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
          duration: 0.8,
        }}
        className="uppercase text-amber-700">Creating a</motion.span> Better
      </motion.span>

      <motion.span
        className="font-light text-4xl md:text-6xl block text-gray-900"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{amount: 0.5, once:false}}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
          duration: 0.8,
        }}
      >
        future
      </motion.span>
    </div>
          </div>

          <motion.p 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{amount: 0.5, once:false}}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
          duration: 0.8,
        }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
          Discover the ideas, people, and purpose driving a new generation of leadership.
Together, we’re shaping the future — one vision, one community, one tomorrow at a time.
          </motion.p>

          <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 ml-[-1rem]">
            <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{amount: 0.5, once:false}}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
          duration: 0.8,
        }}
            className="flex -space-x-4">
              <Image
                src="/stud.jpg"
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
            </motion.div>
            <span className="text-sm text-gray-600 font-medium max-w-[180px]">
              🌐Trusted by 10K+ Followers Globaly.
            </span>

            <div className="text-black">
              <motion.div
        initial={{ x:-80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{amount: 0.5, once:false}}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
          duration: 0.8,
        }}
              className="text-amber-700 ml-[-22rem] md:mt-[0rem] md:ml-[-12rem] sm:ml-18 mt-4 z-50 sm:mt-[-30rem] justify-start items-start flex absolute  gap-6 bg-white/80 shadow-lg shadow-amber-600 rounded-lg p-6">
                {/* Statistic 1 */}
                <div className="flex flex-col justify-start items-start">
                  <span className="text-3xl font-bold">3,847</span>
                  <span className="text-sm md:text-base font-medium">Youth Jobs Created</span>
                </div>

                {/* Statistic 2 */}
                <div className="flex flex-col justify-start items-start">
                  <span className="text-3xl font-bold">60</span>
                  <span className="text-sm md:text-base font-medium">Projects Delivered</span>
                </div>

                {/* Statistic 3 */}
                <div className="flex flex-col justify-start items-start">
                  <span className="text-3xl font-bold">₦2.1B</span>
                  <span className="text-sm md:text-base font-medium">Community Investment</span>
                </div>
              </motion.div>
            </div>
          </div>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
          >
            See True Testimonial Profiles
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative mt-16 lg:mt-0 flex z justify-center lg:justify-end lg:w-1/2"
        >
          <div className="absolute w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-50 top-[-2rem] right-[-2rem]" />

          <Image
            src="/relic.avif"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="rounded-full object-cover relative z-10"
          />
          
          <div className="relative w-full flex justify-center items-center">
            {comments.map((comment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 80 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute bottom-8 z-50 ml-[-14rem] sm:ml-[0rem] bg-white/20 backdrop-blur-md border-2 border-amber-200 shadow-xl rounded-2xl p-4 flex items-center gap-4 w-[280px] sm:w-[350px]"
              >
                <Image
                  src={comment.img}
                  alt={comment.name}
                  width={55}
                  height={55}
                  className="rounded-full border-2 border-black object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-black">{comment.name}</span>
                  <span className="text-sm text-gray-700 leading-snug">{comment.text}</span>
                </div>
                <span className="absolute p-3 left-0 w-full bg-amber-700 text-white mt-44 text-sm rounded-b-md text-center font-medium">
                  See opportunities
                </span>
              </motion.div>
            ))}

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute mt-14 z-50 left-0 top-1/2 -translate-y-1/2 bg-black text-white text-black rounded-full p-2 shadow-md"
            >
              ▶
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 mt-14  top-1/2 -translate-y-1/2 bg-black  rounded-full p-2 shadow-md"
            >

            </button>
          </div>
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
          { img: "/vb2.gif",num: "10K+", label: "Active Subscribers" },
          { img: "/vb3.gif", num: "60+", label: "Projects Delivered" },
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

                   {/* ===== BLOG / INSIGHT SECTION ===== */}
<section className=" bg-white text-black py-24 px-6 md:px-16 ">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-700"
  >
    Problems Solved by Mr.Senator Olubiyi Fadeyi Ajagunla Campaign
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
     {
    img: "/relic.avif",
    title: "1. Job Opportunities",
    text: "Thousands of youths now have meaningful employment opportunities through programs initiated under the campaign, reducing unemployment in local communities.",
  },
  {
    img: "/health1.webp",
    title: "4. HealthCare & Wellness nfastructure",
    text: "Health outreach programs have brought medical aid, awareness campaigns, and essential services to underprivileged communities.",
  },
  {
    img: "/skill.jpg",
    title: "2. Creative Empowerment",
    text: "Young innovators and creators are receiving mentorship and resources, helping them turn ideas into impactful projects that benefit society.",
  },
  {
    img: "/edu.jpg",
    title: "3. Sustained Education Access",
    text: "Scholarship schemes and educational initiatives have enabled students to continue learning, reducing dropout rates and nurturing future leaders.",
  },
  {
    img: "/emp.jpg",
    title: "6. Youth Leadership & Engagement",
    text: "Workshops, training, and civic engagement programs empower youths to take active roles in decision-making and leadership within their communities.",
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
          className="w-full h-[420px]  transform group-hover:scale-110 transition-transform duration-500"
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


    <section className="py-24 text-gray-900 ">
      <motion.h2
        className="text-center text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How Do You Want to Participate?
      </motion.h2>

      <div className="grid bg-white md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
        {initiatives.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -6 }}
            className={`rounded-2xl p-6 shadow-lg bg-[amber] ${item.color} transition-all cursor-pointer hover:shadow-amber-300/40`}
          >
            <div className="text-amber-700 mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{item.sub}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
        <a href="/" className="p-3 m-3 rounded-full bg-white/10 backdrop-blur-lg border border-amber-300  text-amber-700 flex justify-center text-center items-center">Participate</a>
    </section>




    <section className="flex justify-center py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white/10  backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8 flex flex-col justify-between cursor-pointer h-[450px] hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-amber-400">
                  <Image
                  src={item.img}
                  alt="For icons"
                  width={55}
                  height={55}
                  className="rounded-full border-2object-cover"
                />{item.title} 
              </h3>
              <p className="text-gray-200 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
            <motion.div
              className="mt-6 text-amber-400 font-medium flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="p-3 bg-black/60 text-white text-sm text-center font-medium rounded-md">
                Join  ÀJÀGÚNLÀ Program Today
              </span>
              <span className="text-amber-400 text-lg">→</span>
            </motion.div>
          </motion.div>
        ))}

        <span className="flex justify-center items-center col-span-full m-7 bg-white/20 text-amber-400 p-5 text-lg font-semibold rounded-lg shadow-lg backdrop-blur-md">
          Join The Campaign
        </span>
      </div>
    </section>
 
 

      {/* ===== PROMO + CONTACT ===== */}
      <section className="bg-white text-black py-20 px-6 md:px-20 flex flex-col gap-20">
       

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
              Mr. Senator Adeyemi Campaign 2027<span className="text-amber-300">.</span>
            </h3>
            <p className="text-amber-200 text-sm mt-3 leading-relaxed max-w-xs">
             Empowering , And Creating Better Tomorrow & Infastructre
            </p>
            <div className="flex gap-4 mt-6 text-xl">
              <a href="#" className="hover:text-amber-300 transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Facebook /></a>
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
              <li><a href="#" className="hover:text-white"><u>Privacy Policy | NDPR Compliant</u></a></li>
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
                className="flex-1 p-3 rounded-l-lg text-white focus:outline-none"
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
          <p className="mt-2 md:mt-0">Built with  by Adeyemi Studio Unique Uo</p>
        </div>

        {/* === Subtle Glow Effect === */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
      </footer>
      <div className="">

      </div>
    </div>
  );
}
