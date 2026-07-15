const YEAR = new Date().getFullYear();
document.getElementById("year").textContent = YEAR;

const CONTACT_PHONE = "5555981000187";
const form = document.getElementById("contact-form");
const status = document.getElementById("contact-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (!nome || !email || !servico || !mensagem) {
      status.textContent = "Preencha todos os campos para continuar.";
      return;
    }

    const text = [
      "Olá, vim pelo site da Speed Informática SM.",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Serviço de interesse: ${servico}`,
      "",
      mensagem,
    ].join("\n");

    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`;
    status.textContent = "Abrindo o WhatsApp com sua mensagem...";
    window.location.href = url;
  });
}
