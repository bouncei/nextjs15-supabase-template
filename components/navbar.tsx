"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b  backdrop-blur-lg fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Next.js 15 Template 🚀
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Support Me */}
          <Button className=" ">
            <a
              href="https://buymeacoffee.com/bouncei"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Me ❤️
            </a>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-6 bg-gradient-to-b from-background to-muted-foreground/50  dark:from-gray-900 dark:to-background"
          >
            <nav className="flex flex-col space-y-4">
              {/* Support Me */}
              <Button className="  w-full">
                <a
                  href="https://buymeacoffee.com/bouncei"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support Me ❤️
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
