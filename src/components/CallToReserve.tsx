import { Phone, Clock, MapPin } from "lucide-react";

const CallToReserve = () => {
  return (
    <section id="reservar" className="pt-0 pb-20 md:pb-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4">
          Reserva tu mesa
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Llámanos y te guardamos sitio
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-light">
          La forma más rápida de reservar es por teléfono. Te atendemos personalmente y
          confirmamos tu mesa al momento.
        </p>

        <a
          href="tel:+34938936758"
          aria-label="Llamar al Celler Cal Puput para reservar mesa"
          className="inline-flex items-center gap-4 bg-gold hover:bg-gold-light text-foreground font-bold px-10 py-5 rounded-md transition-all duration-300 text-xl md:text-2xl tracking-wide hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5"
        >
          <Phone size={26} />
          938 93 67 58
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 max-w-2xl mx-auto">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5 flex flex-col items-center text-center">
            <Clock size={22} className="text-gold-light mb-2" />
            <h3 className="font-display font-bold mb-3">Horario</h3>
            <ul className="text-primary-foreground/75 text-sm space-y-1 w-full max-w-[16rem] mx-auto">
              <li className="flex justify-between gap-3"><span>Lunes</span><span>18:00 – 1:00</span></li>
              <li className="flex justify-between gap-3"><span>Martes</span><span>18:00 – 1:00</span></li>
              <li className="flex justify-between gap-3"><span>Miércoles</span><span>18:00 – 1:00</span></li>
              <li className="flex justify-between gap-3"><span>Jueves</span><span>18:00 – 1:00</span></li>
              <li className="flex justify-between gap-3"><span>Viernes</span><span>18:00 – 1:00</span></li>
              <li className="flex justify-between gap-3"><span>Sábado</span><span>12:00 – 15:00</span></li>
              <li className="flex justify-between gap-3"><span aria-hidden="true" className="invisible">Sábado</span><span>19:00 – 2:00</span></li>
              <li className="flex justify-between gap-3"><span>Domingo</span><span>Cerrado</span></li>
            </ul>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5 flex flex-col items-center text-center">
            <MapPin size={22} className="text-gold-light mb-2" />
            <h3 className="font-display font-bold mb-1">Dirección</h3>
            <p className="text-primary-foreground/75 text-sm">C/ Santa Madrona, 35<br />Vilanova i la Geltrú</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToReserve;
