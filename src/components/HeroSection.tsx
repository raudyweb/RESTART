import heroBg from "@/assets/hero.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Restart Coffee — La Marzocco" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-white/75 font-body text-xs md:text-sm tracking-[0.4em] uppercase mb-5">
        Vilanova i la Geltrú · Brunch & Coffee
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-semibold text-white mb-5 leading-tight">
        Restart Coffee
      </h1>
      <p className="text-white/75 text-base md:text-lg font-body font-light max-w-xl mx-auto mb-10 leading-relaxed tracking-wide">
        Specialty coffee · Brunch · Terraza dog-friendly
      </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide hover:bg-white/90">
    Ver carta
  </a>
        <a href="#visita" className="border border-white/50 hover:border-white text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide">
          Cómo llegar
        </a>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-5 h-9 border border-white/30 rounded-full flex justify-center pt-1.5">
        <div className="w-0.5 h-2 bg-white/50 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
