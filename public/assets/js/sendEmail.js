document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const loading = form.querySelector(".loading");
    const sentMessage = form.querySelector(".sent-message");
    const errorMessage = form.querySelector(".error-message");

    loading.style.display = "block";
    sentMessage.style.display = "none";
    errorMessage.style.display = "none";

    emailjs
      .send("service_dx6jhqm", "template_bcnpz6t", {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(() => {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        form.reset();
      })
      .catch((err) => {
        loading.style.display = "none";
        errorMessage.innerText = "Došlo je do greške. Pokušajte ponovo.";
        errorMessage.style.display = "block";
        console.error("EmailJS error:", err);
      });
  });
});
