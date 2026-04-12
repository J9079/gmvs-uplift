import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import gmvsLogo from "@/assets/gmvs-logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-narrow section-padding !py-12 md:!py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={gmvsLogo} alt="GMVS Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-heading font-bold text-lg">GMVS</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Gramin Mahila Vikas Sansthan — Empowering rural women and communities since inception through education, health, and sustainable development.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/programs" className="hover:opacity-100 transition-opacity">Programs</Link>
            <Link to="/impact" className="hover:opacity-100 transition-opacity">Our Impact</Link>
            <Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Focus Areas</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Women Empowerment</span>
            <span>Education</span>
            <span>Health & Nutrition</span>
            <span>Sustainable Agriculture</span>
            <span>Child Welfare</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Ajmer, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@gmvs.org.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p>© {new Date().getFullYear()} GMVS. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary" /> for rural communities
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
