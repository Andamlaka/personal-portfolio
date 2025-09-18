"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const blogPosts = [
    {
      title: "My Journey to Becoming a Full-Stack Developer",
      date: "September 2025",
      excerpt:
        "Sharing my path, challenges faced, and milestones achieved in web development.",
    },
    {
      title: "Top Resources That Shaped My Coding Skills",
      date: "August 2025",
      excerpt:
        "Books, courses, and tools that helped me level up my coding journey.",
    },
    {
      title: "Building Responsive Web Applications",
      date: "July 2025",
      excerpt:
        "A guide on creating responsive, modern web applications with React and Tailwind CSS.",
    },
  ];

  return (
    <section className="mt-20 px-6 py-16 md:px-12 lg:px-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Blog
        </motion.h1>

        {/* Future features note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-2xl font-dm text-gray-700 dark:text-gray-300 mb-12 "
        >
          Some features are currently under development and will be available in
          the near future.
        </motion.p>

        {/* Blog posts */}
        <div className="space-y-8 md:space-y-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {post.date}
              </p>
              <p className="text-base sm:text-lg leading-relaxed">{post.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
