import { Dog, Sun, Wifi } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const badges = [
  { icon: <Dog size={15} />, label: "Dog-friendly" },
  { icon: <Sun size={15} />, label: "Terraza" },
  { icon: <Wifi size={15} />, label: "Wifi" },
];

const AboutSection = () => (
  <section className="py-24 bg-background">
    <div className="container px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Sobre nosotros</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-foreground leading-snug">
            Café con alma, en el corazón de Vilanova
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            En Re·Start trabajamos con granos de especialidad Nomad — uno de los mejores tostadores del país. Cada taza está preparada con atención al detalle, sin atajos.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-8">
            Ven a desayunar, hacer brunch con calma o simplemente a tomarte un momento. Somos el sitio de siempre para los de aquí, y el descubrimiento favorito para los de fuera.
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
             <span key={b.label} className="inline-flex items-center gap-2 bg-foreground text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide">
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img src={aboutImg} alt="Tostada de aguacate en Re·Start Coffee" className="w-full h-full object-cover" loading="lazy" />
          </div>
        <div className="absolute -bottom-4 -left-4 bg-foreground rounded-xl px-5 py-4 shadow-lg border border-border/40">
           <p className="font-display text-2xl font-semibold text-white">4.8 <span className="text-yellow-400">★</span></p>
             <p className="text-xs text-white/80 mt-0.5">+150 reseñas en Google</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
