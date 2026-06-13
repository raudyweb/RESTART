import { Instagram, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container px-6 py-14">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Re·Start Coffee" className="w-10 h-10 object-contain brightness-0 invert opacity-80" />
          <div>
            <h3 className="font-display text-lg font-semibold">Re · Start</h3>
            <p className="text-white/50 text-xs mt-0.5">Brunch & Specialty Coffee · Vilanova i la Geltrú</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
            <Instagram size={19} />
          </a>
          <a href="mailto:rscafevng@gmail.com" aria-label="Email" className="text-white/50 hover:text-white transition-colors">
            <Mail size={19} />
          </a>
          <a href="tel:+34621306720" aria-label="Teléfono" className="text-white/50 hover:text-white transition-colors">
            <Phone size={19} />
          </a>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <p>Carrer dels Escolapis, 8 · 08800 Vilanova i la Geltrú</p>
        <p>Web by <span className="text-white/50 font-medium">Raudy</span></p>
      </div>
    </div>
  </footer>
);

export default Footer;
