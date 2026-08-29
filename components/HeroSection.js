export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">PREMIJUM DOMAĆI SITNI KOLAČI</p>
        <h1>
          Baklave i <span>urmašice</span>
        </h1>
        <p className="lead">
          Za sladokusce, hedoniste i ljubitelje hrane proverenog kvaliteta.
        </p>
        <div className="actions">
          <a className="button" href="#menu">
            Evo kako možemo da vam pomognemo
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/img/hero-naslovna1-krug.png" alt="Baklava i urmašice" />
      </div>
    </section>
  );
}
