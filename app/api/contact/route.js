const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (
      !name?.trim() ||
      !emailPattern.test(email) ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return Response.json(
        { error: "Popunite sva obavezna polja i unesite ispravan e-mail." },
        { status: 400 }
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.ORDER_TO_EMAIL ||
      !process.env.ORDER_FROM_EMAIL
    ) {
      return Response.json(
        { error: "Slanje poruka još nije podešeno. Kontaktirajte nas putem Instagrama." },
        { status: 503 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.ORDER_FROM_EMAIL,
        to: [process.env.ORDER_TO_EMAIL],
        reply_to: email,
        subject: `Kontakt forma: ${subject.trim()}`,
        text: [
          "NOVA PORUKA SA SAJTA — Baklave i urmašice",
          "",
          `Ime: ${name.trim()}`,
          `E-mail: ${email.trim()}`,
          `Predmet: ${subject.trim()}`,
          "",
          "PORUKA",
          message.trim(),
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend contact-email error:", await resendResponse.text());
      return Response.json(
        { error: "Poruku trenutno nije moguće poslati. Pokušajte ponovo." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Došlo je do neočekivane greške." }, { status: 500 });
  }
}
