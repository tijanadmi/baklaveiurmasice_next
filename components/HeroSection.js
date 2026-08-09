export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Domaći slatkiši</p>
        <h1>
          Baklave i <span>urmašice</span>
        </h1>
        <p className="lead">
          Za sladokusce, hedoniste i ljubitelje hrane proverenog kvaliteta.
        </p>
        <div className="actions">
          <a className="button" href="#cart">
            Naruči
          </a>
          <a className="text-link" href="#menu">
            Pogledaj meni →
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/img/hero-img.png" alt="Baklava i urmašice" />
      </div>
    </section>
  );
}
