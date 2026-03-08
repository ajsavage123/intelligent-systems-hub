import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Briefcase, Rocket, BookOpen, Users } from "lucide-react";

interface NavbarProps {
  onOpenPartner: () => void;
}

const Navbar = ({ onOpenPartner }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 rounded-full ${
        scrolled ? "glass-dark border-white/5 mx-6 py-3" : "bg-transparent py-0"
      }`}>
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <svg viewBox="0 0 100 100" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500 fill-none stroke-primary stroke-[6]" style={{ strokeLinecap: 'round' }}>
               <path d="M 35 15 A 40 40 0 1 1 20 35" />
            </svg>
            {scrolled && <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />}
          </div>
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.4em] uppercase font-bold text-foreground">Ooma Labs</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#connect" className="btn-solid !py-2.5 !px-6 rounded-full text-[9px]">
            Connect
          </a>
        </div>

        <div className="md:hidden w-8 h-8 glass flex items-center justify-center rounded-lg border-white/10">
           <div className="w-4 h-0.5 bg-foreground/60 relative after:absolute after:top-1.5 after:left-0 after:w-4 after:h-0.5 after:bg-foreground/60 before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-0.5 before:bg-foreground/60" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
