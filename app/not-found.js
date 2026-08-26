import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found-content">
        <p className="eyebrow">Greška 404</p>
        <h1>Ova stranica je otišla po još jednu baklavu.</h1>
        <p>Izgleda da smo je izgubili putem.</p>
        <p>
          Vratite se na početnu stranu – tamo su baklave i urmašice, gde treba da budu.{" "}
          <span aria-hidden="true">❤️</span>
        </p>
        <Link className="button" href="/">
          Nazad na početnu stranu
        </Link>
      </section>
    </main>
  );
}
