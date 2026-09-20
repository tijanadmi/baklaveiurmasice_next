export default function About1Section() {
  return (
    <section id="about-story" className="section about-story" data-reveal>
      <div className="about-story-word" aria-hidden="true">
        urmašice
      </div>

      <div className="about-story-header section-heading-left">
        <p className="eyebrow">Naša priča</p>
        <h2>Malo o nama</h2>
        <p className="about-story-lead">
          Miris <strong>baklava i urmašica</strong> za nas nikada nije bio samo miris
          kolača, već miris porodičnih okupljanja, nedeljnih ručkova, slava i rođendana.
          Miris kafe sa prijateljicom i razgovori koji traju duže nego što smo planirale.
        </p>
      </div>

      <div className="about-story-spacer" aria-hidden="true" />

      <div className="about-story-grid">
        <div className="about-story-visual">
          <img
            src="/assets/img/about11.png"
            alt="Priprema domaćih baklava i urmašica u našoj radionici"
            width={1402}
            height={1122}
            loading="lazy"
          />
        </div>

        <div className="about-story-copy">
          <p>
            Mi smo <strong>Aleksandra i Svjetlana</strong> — sestre, majke, supruge i
            preduzetnice. Pre svega, dve žene koje veruju da pažnja koju posvetite ljudima
            koje volite nikada nije sitnica.
          </p>

          <p>
            Godinama smo gradile karijere u profesijama različitim od ove i tu naučile šta
            znači
            <strong>
              {" "}
              odgovornost, kvalitet bez kompromisa i poštovanje dogovora.
            </strong>{" "}
            Kada smo odlučile da stvorimo &quot;našu priču&quot;, ideja se sama nametnula.
            Sve je, zapravo, bilo tu — u našoj porodici, u receptima koje smo znale i
            kolačima koje smo decenijama pripremale za ljude koje volimo.
          </p>

          <p>
            Nekada su slatkiši bili posebna privilegija, a danas su nam dostupni gotovo
            svuda. Malo je danas tih ukusa koji{" "}
            <strong>bude sećanja na lepe trenutke</strong> i{" "}
            <strong>želju za stvaranjem novih momenata koje ćemo pamtiti.</strong> Malo je
            tih slatkiša koji su{" "}
            <strong>
              domaći, sveži i pravljeni od kvalitetnih i proverenih sastojaka.
            </strong>{" "}
            Malo ih je, ali ih ima — <strong>naše baklave i urmašice.</strong>
          </p>

          <details className="about-story-details">
            <summary>
              <span className="about-story-read-more">Pročitaj više</span>
              <span className="about-story-read-less">Prikaži manje</span>
            </summary>
            <p>
              Recept za naše baklave i urmašice nastao je u Bosni i Hercegovini i
              generacijama se prenosio kroz našu porodicu. Svaka generacija dodala je
              poneko svoje iskustvo, a ono najvažnije ostalo je isto:{" "}
              <strong>
                pažnja prema sastojcima, načinu pripreme i ukusu koji stvara posebne
                prilike.
              </strong>
            </p>

            <p>
              Tako su nastale <strong>Baklave i urmašice.</strong> Zadržale smo porodičnu
              recepturu i način pripreme koji smo nasledile, a biramo sastojke i
              posvećujemo pažnju svakom detalju kao da kolače spremamo za svoj dom.
            </p>

            <p>
              Danas ih pravimo za vas — za poklon koji birate s pažnjom, sto oko kog se
              okupljaju vama dragi ljudi, proslavu koju želite da pamtite ili onu malu
              pauzu uz kafu kada jednostavno želite da počastite sebe.
            </p>
          </details>
        </div>
      </div>

      <div className="about-story-center">
        <blockquote className="about-story-highlight">
          Recept čuva ukus
          <br />
          naše porodične priče, a vi mu danas dajete priliku da postane deo neke nove.
        </blockquote>

        <a className="button" href="#menu">
          Koja situacija je danas vaša?
        </a>
      </div>
    </section>
  );
}
