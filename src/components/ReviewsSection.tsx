import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "El mejor café de Vilanova i la Geltrú. El lugar es muy acogedor, la presentación exquisita y el trato inmejorable. ¡Lo recomiendo!",
    author: "Marta G.",
    rating: 5,
  },
  {
    text: "Brunch delicioso y café excelente. Ambiente tranquilo, terraza muy agradable y un servicio rápido, siempre con una sonrisa.",
    author: "Jordi P.",
    rating: 5,
  },
  {
    text: "De lo mejorcito que hay por la zona. Se come de maravilla y el servicio no puede ser mejor. No podéis dejar de venir.",
    author: "Laura S.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-4">
            Opiniones
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">4.8 ★ · +300 reseñas en Google</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#e6dcc6] border border-[#d7c8a8] rounded-xl p-8 hover:shadow-md transition-all duration-500 hover:-translate-y-1 group"
            >
              <Quote size={32} className="text-primary/40 mb-4 group-hover:text-primary transition-colors" />
              <p className="text-foreground/90 text-base leading-relaxed mb-6 italic font-display">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-primary font-semibold text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
