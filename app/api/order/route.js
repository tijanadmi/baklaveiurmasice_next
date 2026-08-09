const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { customer, items, totalGrams, totalPrice } = await request.json();

    if (
      !customer?.name ||
      !customer?.phone ||
      !customer?.email ||
      !customer?.address ||
      !customer?.deliveryDate ||
      !emailPattern.test(customer.email) ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return Response.json(
        {
          error:
            "Popunite obavezne podatke, unesite ispravan e-mail i dodajte najmanje jedan proizvod u korpu.",
        },
        { status: 400 }
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.ORDER_TO_EMAIL ||
      !process.env.ORDER_FROM_EMAIL
    ) {
      return Response.json(
        {
          error:
            "Slanje porudžbina još nije podešeno. Kontaktirajte nas putem Instagrama.",
        },
        { status: 503 }
      );
    }

    const formatKilograms = (grams) => `${String(grams / 1000).replace(".", ",")} kg`;
    const formatPrice = (price) => `${Number(price).toLocaleString("sr-RS")} RSD`;
    const orderLines = items
      .map(
        (item) =>
          `- ${item.name}: ${formatKilograms(item.grams)} (${formatPrice(item.totalPrice)})`
      )
      .join("\n");
    const orderSummary = [
      `KORPA`,
      orderLines,
      `Ukupno: ${formatKilograms(totalGrams)} — ${formatPrice(totalPrice)}`,
    ].join("\n");
    const customerDetails = [
      `Ime: ${customer.name}`,
      `Telefon: ${customer.phone}`,
      `E-mail: ${customer.email}`,
      `Adresa: ${customer.address}`,
      `Željeni datum isporuke: ${customer.deliveryDate}`,
      `Napomena: ${customer.note || "nema"}`,
    ].join("\n");
    const sendEmail = (message) =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

    const ownerResponse = await sendEmail({
      from: process.env.ORDER_FROM_EMAIL,
      to: [process.env.ORDER_TO_EMAIL],
      reply_to: customer.email,
      subject: `Nova porudžbina: ${customer.name}`,
      text: [
        "NOVA PORUDŽBINA — Baklave i urmašice",
        "",
        orderSummary,
        "",
        "KUPAC",
        customerDetails,
      ].join("\n"),
    });

    if (!ownerResponse.ok) {
      console.error("Resend owner-email error:", await ownerResponse.text());
      return Response.json(
        { error: "Porudžbinu trenutno nije moguće poslati. Pokušajte ponovo." },
        { status: 502 }
      );
    }

    const confirmationResponse = await sendEmail({
      from: process.env.ORDER_FROM_EMAIL,
      to: [customer.email],
      reply_to: process.env.ORDER_TO_EMAIL,
      subject: "Potvrda porudžbine — Baklave i urmašice",
      text: [
        `Zdravo, ${customer.name}!`,
        "",
        "Hvala vam. Vaša porudžbina je uspešno poslata.",
        "",
        orderSummary,
        "",
        "Uskoro ćemo vas kontaktirati radi potvrde porudžbine i dogovora o isporuci.",
        "",
        "Baklave i urmašice",
      ].join("\n"),
    });

    if (!confirmationResponse.ok)
      console.error(
        "Resend confirmation-email error:",
        await confirmationResponse.text()
      );
    return Response.json({ success: true, confirmationSent: confirmationResponse.ok });
  } catch (error) {
    console.error("Order route error:", error);
    return Response.json({ error: "Došlo je do neočekivane greške." }, { status: 500 });
  }
}
