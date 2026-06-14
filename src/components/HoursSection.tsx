import { Clock } from "lucide-react";
import terraceImg from "@/assets/Exterior.png";

const schedule = [
  { days: "Dilluns", hours: "8:30 – 13:00", closed: false },
  { days: "Dimarts a Dijous", hours: "8:30 – 16:00", closed: false },
  { days: "Divendres", hours: "8:30 – 19:30", closed: false },
  { days: "Dissabte", hours: "9:00 – 15:00", closed: false },
  { days: "Diumenge i Festius", hours: "Tancat", closed: true },
];

const HoursSection = () => (
  <section id="horarios" className="py-24 bg-background">
    <div className="container px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img src={terraceImg} alt="Poke Bowl de Re·Start Coffee" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium"></p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8 text-foreground leading-snug">
            Horaris
          </h2>
          <div className="space-y-1">
            {schedule.map((item) => (
              <div key={item.days} className={`flex items-center justify-between py-3.5 border-b border-border/50 ${item.closed ? "opacity-40" : ""}`}>
                <span className="flex items-center gap-3 text-sm text-foreground">
                  <Clock size={14} className="text-muted-foreground" />
                  {item.days}
                </span>
                <span className={`text-sm font-semibold ${item.closed ? "text-muted-foreground" : "text-foreground"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">Els horaris poden variar en festius especials.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HoursSection;
