import copy from "../data/copywriting";

const Hero = () => {
  return (
    <section className="hero font-sans">
      <div className="hero__container">
        <div className="hero__title">
          <p className="hero__intro text--secondary">Bonjour, je suis</p>

          <h2 className="">Eri Schön.</h2>

          <h1 className="">
            Je <span className="title--underline">confectionne</span> des apps
            web.
          </h1>

          <p className="hero__subtitle">
            Je suis un Artisan Développeur spécialisé dans la confection
            d&apos;applications web{" "}
            <span className="text--secondary">Fluides</span>,{" "}
            <span className="text--secondary">Rapides</span> et{" "}
            <span className="text--secondary">Fiables</span>.
          </p>
        </div>

        <a href="mailto:erischon@gmail.com">Contactez-moi!</a>
      </div>
    </section>
  );
};

export default Hero;
