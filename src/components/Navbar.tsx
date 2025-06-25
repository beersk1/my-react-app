import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { Menu, X, Truck } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 ">
          <img
            src="Images/FinalLogo (1).png"
            alt="FreshNClean Helmet Logo"
            className="h-12 w-auto"
          />
          <span className="font-display font-bold text-xl text-brand-black">
            Clean N Fresh Helmet
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-brand-black/80 hover:text-brand-red transition-colors"
          >
            Our Services
          </a>
          <a
            href="#solution"
            className="text-brand-black/80 hover:text-brand-red transition-colors"
          >
            Our Solution
          </a>
          <a
            href="#pickup-delivery"
            className="text-brand-black/80 hover:text-brand-red transition-colors"
          >
            Pickup & Delivery
          </a>
          <a
            href="#about"
            className="text-brand-black/80 hover:text-brand-red transition-colors"
          >
            Mission
          </a>
          <a
            href="#faq"
            className="text-brand-black/80 hover:text-brand-red transition-colors"
          >
            FAQ
          </a>
          <a
            href="https://forms.gle/o4qgxNV9XJoAUwjm9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-brand-red/10 hover:bg-brand-red/20 text-brand-red border border-brand-red/20 mr-2"
          >
            <Truck className="mr-1 h-4 w-4" />
            Schedule Pickup
          </a>
          <a href="#contact" className="btn-primary inline-flex items-center">
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-brand-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a
              href="#services"
              className="text-brand-black/80 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#solution"
              className="text-brand-black/80 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Solution
            </a>
            <a
              href="#pickup-delivery"
              className="text-brand-black/80 hover:text-brand-red transition-colors"
            >
              Pickup & Delivery
            </a>
            <a
              href="#about"
              className="text-brand-black/80 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mission
            </a>
            <a
              href="#faq"
              className="text-brand-black/80 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://forms.gle/o4qgxNV9XJoAUwjm9"
              target="_blank"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-brand-red/10 hover:bg-brand-red/20 text-brand-red border border-brand-red/20 mr-2"
            >
              <Truck className="mr-1 h-4 w-4" />
              Schedule Pickup
            </a>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
