import { Clock } from "lucide-react";
import terraceImg from "@/assets/Exterior.png";

const schedule = [
  { days: "Lunes", hours: "8:30 – 13:00", closed: false },
  { days: "Martes a Jueves", hours: "8:30 – 16:00", closed: false },
  { days: "Viernes", hours: "8:30 – 19:30", closed: false },
  { days: "Sábado", hours: "9:00 – 15:00", closed: false },
  { days: "Domingo y Festivos", hours: "Cerrado", closed: true },
];

const HoursSection = () => (
  <section id="horarios" className="py-24 bg-foreground">
    <div className="container px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img src={terraceImg} alt="Terraza de Re·Start Coffee" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-medium">Horarios</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8 text-white leading-snug">
            Te esperamos aquí
          </h2>
          <div className="space-y-1">
            {schedule.map((item) => (
              <div key={item.days} className={`flex items-center justify-between py-3.5 border-b border-white/10 ${item.closed ? "opacity-40" : ""}`}>
                <span className="flex items-center gap-3 text-sm text-white/90">
                  <Clock size={14} className="text-white/50" />
                  {item.days}
                </span>
                <span className={`text-sm font-semibold ${item.closed ? "text-white/50" : "text-white"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/50 mt-6">Los horarios pueden variar en festivos especiales.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HoursSection;
