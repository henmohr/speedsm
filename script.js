document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();
    const subject = encodeURIComponent(`Contato pelo site - ${servico || "Speed Informática SM"}`);
    const body = encodeURIComponent(
      [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Serviço de interesse: ${servico}`,
        "",
        mensagem,
      ].join("\n")
    );

    window.location.href = `mailto:contato@speedinformaticasm.com.br?subject=${subject}&body=${body}`;
  });
}
