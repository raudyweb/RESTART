import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const MapSection = () => (
  <section id="visita" className="py-20 bg-muted/40">
    <div className="container px-6">
      <div className="text-center mb-14">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-medium">Visítanos</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Te esperamos en Escolapis, 8</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.908346105353!2d1.72313757586994!3d41.22376777132122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387915fb5626f%3A0xd7125a13c5d4ba64!2sRestart%20Coffee!5e0!3m2!1ses!2ses!4v1781360977596!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Restart Coffee"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Dirección</h3>
              <p className="text-muted-foreground">Carrer dels Escolapis, 8<br />08800 Vilanova i la Geltrú, Barcelona</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Teléfono</h3>
              <a href="tel:+34621306720" className="text-muted-foreground hover:text-foreground transition-colors">+34 621 30 67 20</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Email</h3>
              <a href="mailto:rscafevng@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">rscafevng@gmail.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Instagram size={18} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Instagram</h3>
              <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">@rscafevng</a>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.908346105353!2d1.72313757586994!3d41.22376777132122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387915fb5626f%3A0xd7125a13c5d4ba64!2sRestart%20Coffee!5e0!3m2!1ses!2ses!4v1781360977596!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity w-fit mt-2">
            <MapPin size={16} />
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
