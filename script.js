// Link de destino do botão "Faça seu pedido".
// Altere apenas esta constante para atualizar o link em todo o site.
const ORDER_URL = "https://wa.me/5531972141057?text=Ol%C3%A1%21+Vim+pelo+link+da+bio+e+gostaria+de+fazer+meu+pedido+Miz%21&utm_source=chatgpt.com";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("cta-button");
  if (button) {
    button.setAttribute("href", ORDER_URL);
  }
});
