import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
};

const SEO = ({ title, description, image = "/preview.jpg" }: SEOProps) => {
  const schema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Restart Coffee",
  image: image,
  description: description,
  telephone: "+34 621 30 67 20",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer dels Escolapis, 8",
    addressLocality: "Vilanova i la Geltrú",
    addressRegion: "Barcelona",
    postalCode: "08800",
    addressCountry: "ES"
  }
};
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
