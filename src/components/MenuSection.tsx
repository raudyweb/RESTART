import { Coffee, UtensilsCrossed, Cake } from "lucide-react";
import food1 from "@/assets/brunch.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/cafes.jpg";

const categories = [
  {
    title: "Cafés & Bebidas",
    icon: <Coffee size={20} />,
    img: food3,
    imgAlt: "Preparación artesana en barra",
    items: [
      { name: "Espresso / Especial", price: "1,8€ / 2,3€" },
      { name: "Flat White", price: "3,8€" },
      { name: "Matcha Latte", price: "3,7€" },
      { name: "Iced Filter", price: "4,2€" },
      { name: "Cold Brew", price: "4,2€" },
      { name: "Espresso Tonic", price: "4,9€" },
    ],
  },
  {
    title: "Brunch",
    icon: <UtensilsCrossed size={20} />,
    img: food1,
    imgAlt: "Poke Bowl de temporada",
    items: [
      { name: "Avo-Lima", price: "7,9€" },
      { name: "Marina (queso crema, espinacas, salmón)", price: "10,9€" },
      { name: "Nido (aguacate, remolacha, huevos)", price: "10,9€" },
      { name: "Noruega (salmón, huevas de lumpo)", price: "13,9€" },
      { name: "Poke Bowl", price: "desde 13,5€" },
      { name: "Pan sin gluten disponible", price: "+2€" },
    ],
  },
  {
    title: "Pastelería & Dulces",
    icon: <Cake size={20} />,
    img: food2,
    imgAlt: "Pastelería artesana de Re·Start",
    items: [
      { name: "Cookies artesanas", price: "" },
      { name: "Bollos de matcha y pistacho", price: "" },
      { name: "Bollos de mantequilla", price: "" },
      { name: "Pancakes dulces", price: "" },
      { name: "Tartas de temporada", price: "" },
    ],
  },
];

const MenuSection = () => (
  <section id="carta" className="py-24 bg-foreground">
    <div className="container px-6">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4 font-medium">Carta</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Lo que hacemos bien</h2>
        <p className="text-white/60 mt-3 text-sm">Pedir en barra · Carta completa</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/40 hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={cat.img} alt={cat.imgAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-muted-foreground">{item.name}</span>
                    {item.price && <span className="font-medium text-foreground shrink-0">{item.price}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="block mx-auto mt-8 w-fit px-6 py-3 rounded-full bg-white text-foreground font-semibold">Ver carta completa</a>
      <p className="text-center text-xs text-white/60 mt-8">En caso de alergias, consulta con el personal</p>
    </div>
  </section>
);

export default MenuSection;
