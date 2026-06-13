import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Local típic de Vilanova, bon ambient i servei. Moltes opcions per menjar i beure. De 10.",
    author: "Manel R.C.",
  },
  {
    text: "Autèntic ambient de celler, ideal per venir a fer una copa amb una tapa d'embotit, formatge, anxoves i pa amb tomàquet. Tot a molt bon preu. Un lloc collonut!",
    author: "Marc R.",
  },
  {
    text: "El menjar fantàstic, com sempre. El xató de Vilanova i les tapes de pernil, cecina i anxoves. Sempre que anem a Vilanova cau una visita al Puput!",
    author: "Júlia Plana Soria",
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4">
            Opiniones
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1 group"
            >
              <Quote size={32} className="text-gold/60 mb-4 group-hover:text-gold transition-colors" />
              <p className="text-primary-foreground/90 text-base leading-relaxed mb-6 italic font-display">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gold-light font-semibold text-sm">
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
