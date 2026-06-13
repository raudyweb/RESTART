import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="container px-6 pt-32 pb-24 max-w-4xl">
      <h1 className="font-display text-4xl font-semibold mb-6">Sobre Nosotros</h1>
      <p className="text-lg leading-relaxed mb-4">En Re·Start Coffee creamos un espacio donde el café de especialidad, el brunch y los productos artesanos se unen para ofrecer una experiencia cercana y de calidad.</p>
      <p className="leading-relaxed">Nuestra filosofía es cuidar cada detalle: desde el origen del café hasta la atención a cada persona que nos visita.</p>
    </main>
    <Footer />
  </div>
);
export default About;
