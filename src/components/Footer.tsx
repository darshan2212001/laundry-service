import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-white text-slate-500 py-16 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-[#0044FF] transition-colors">Wash & Fold</Link></li>
              <li><Link to="/prices" className="hover:text-[#0044FF] transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-[#0044FF] transition-colors">Ironing</Link></li>
              <li><Link to="/commercial" className="hover:text-[#0044FF] transition-colors">Commercial & Airbnb</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Locations</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">Central London</a></li>
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">East London</a></li>
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">West London</a></li>
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">South London</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-[#0044FF] transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-[#0044FF] transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-[#0044FF] transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-[#0044FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0044FF] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Smart Laundry Service. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-[#0044FF] transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#0044FF] transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#0044FF] transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#0044FF] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
