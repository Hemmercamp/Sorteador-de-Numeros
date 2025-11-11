// =============================
// 🎲 SORTEADOR DE NÚMEROS
// =============================

// 1️⃣ Captura o botão "SORTEAR"
const botao = document.getElementById("sortear");

// 2️⃣ Adiciona o evento de clique
botao.addEventListener("click", function () {

  // --- PEGAR VALORES DOS INPUTS ---
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  // --- VERIFICAÇÃO SIMPLES ---
  // (Impede que o usuário deixe os campos vazios ou invertidos)
  if (isNaN(min) || isNaN(max) || min >= max) {
    document.getElementById("resultado").innerText = "⚠️ Valores inválidos";
    return;
  }

  // --- GERAR NÚMERO ALEATÓRIO ---
  const resultado = Math.floor(Math.random() * (max - min + 1) + min);

  // --- MOSTRAR RESULTADO NA TELA ---
  document.getElementById("resultado").innerText = resultado;

  // --- EFEITO VISUAL (reaplica a animação) ---
  const elemento = document.getElementById("resultado");
  elemento.style.animation = "none";
  elemento.offsetHeight; // força reflow pra reiniciar a animação
  elemento.style.animation = "aparecer 0.5s ease-in-out";
});
