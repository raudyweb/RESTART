import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImg from "@/assets/about.jpg";
import terraceImg from "@/assets/terrace.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import facadeImg from "@/assets/Interior.png";
import tableImg from "@/assets/restaurant-table.jpg";

const values = [
  {
    title: "Café de especialidad",
    text: "Trabajamos con Nomad Coffee, uno de los mejores tostadores del país. Cada extracción está calibrada. No hay atajos en la barra.",
  },
  {
    title: "Producto de temporada",
    text: "La carta cambia con el mercado. Priorizamos ingredientes frescos y de proximidad. Lo que no está en temporada, no está en el plato.",
  },
  {
    title: "Dog-friendly de verdad",
    text: "Tu perro es bienvenido en la terraza, sin asteriscos ni letra pequeña. Tenemos agua fresca para ellos y buena disposición para vosotros.",
  },
  {
    title: "Trato cercano",
    text: "No somos una cadena. Nos acordamos de cómo te gusta el café y de que los lunes necesitas un poco más de caña.",
  },
];

const About = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const images = [interiorImg, terraceImg, tableImg];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={facadeImg} alt="Fachada Restart Coffee" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 container px-6 pb-14">
          <p className="text-white/70 text-xs tracking-[0.35em] uppercase mb-3 font-medium">Conócenos más</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight max-w-2xl">Sobre Nosotros</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/80 italic">"Restart Coffee nació de una idea sencilla: crear el sitio al que quisiéramos ir nosotros mismos. Un lugar donde el café sea serio, la comida tenga sentido y la gente se sienta a gusto desde el primer momento."</p>
          <div className="mt-8 w-12 h-0.5 bg-primary mx-auto" />
          <p className="mt-6 text-sm text-muted-foreground">Carrer dels Escolapis, 8 · Vilanova i la Geltrú</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImg} alt="Interior Restart Coffee" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-medium">Nuestra historia</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">Empezó con una taza.<br />Siguió con muchas más.</h2>
              <p className="text-white/70 leading-relaxed mb-4">Abrimos en Vilanova i la Geltrú con la convicción de que esta ciudad merecía un espacio donde el café de especialidad y el brunch de calidad fueran accesibles, cercanos y sin pretensiones innecesarias.</p>
              <p className="text-white/70 leading-relaxed">Desde el primer día apostamos por el producto honesto: granos trazables, recetas pensadas, atención que no se improvisa. No buscamos ser el café más instagrameable — buscamos ser el que se echa de menos cuando no se está.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">Lo que nos define</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Cuatro cosas que nunca negociamos</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-foreground rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL ESPACIO */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3 font-medium">El espacio</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Un sitio para quedarse</h2>
            <p className="text-white/60 mt-3 text-sm max-w-xl mx-auto">Interior acogedor, terraza con luz natural y un ambiente que invita a alargar el café sin prisa.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Espacio ${i + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeSlide === i ? "opacity-100" : "opacity-0"}`} />
            ))}
            <button onClick={() => setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm text-lg">&#8592;</button>
            <button onClick={() => setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1))} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm text-lg">&#8594;</button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActiveSlide(i)} className={`w-2 h-2 rounded-full transition-colors ${activeSlide === i ? "bg-white" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-background text-center">
        <div className="container px-6 max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">¿Te animás a venir?</h2>
          <p className="text-muted-foreground mb-8">Estamos abiertos cada día. Sin reserva, sin protocolo. Solo ven.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/carta" className="px-8 py-3.5 rounded-full bg-foreground text-white font-semibold hover:opacity-90 transition-opacity text-sm">Ver la carta</a>
            <a href="/#visita" className="px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-medium hover:border-foreground transition-colors text-sm">Cómo llegar</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
