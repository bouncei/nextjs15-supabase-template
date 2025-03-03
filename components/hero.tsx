"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted-foreground/50  dark:from-gray-900 dark:to-background  p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Next.js 15 Starter Template
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-muted-foreground mt-4 text-center max-w-2xl"
      >
        A modern Next.js 15 template with Zustand, Supabase, TailwindCSS,
        ShadCN, and Framer Motion. Open for collaboration!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 flex gap-4"
      >
        <Button asChild variant="secondary" className="dark:bg-gray-800">
          <a
            href="https://github.com/bouncei/nextjs15-supabase-template"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Star size={18} /> Star on GitHub
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://github.com/bouncei/nextjs15-supabase-template"
            target="_blank"
          >
            <span className="mr-0.5">🚀</span>
            Get Started
          </a>
        </Button>
      </motion.div>

      {/* Made by Bouncey Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-6 bg-foreground/90 dark:bg-gray-800 px-4 py-2 rounded-full text-sm text-muted dark:text-muted-foreground"
      >
        <a href="https://bouncei.vercel.app" target="_blank">
          🚀 Made by <span className="text-white font-bold">Bouncey</span>
        </a>
      </motion.div>
    </main>
  );
};

export default Hero;
