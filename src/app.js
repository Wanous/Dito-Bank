document.getElementById("imc-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const poids = parseFloat(document.getElementById("poids").value);
  const taille = parseFloat(document.getElementById("taille").value) / 100;
  const imc = poids / (taille * taille);
  document.getElementById("resultat").textContent = "Votre IMC est : " + imc.toFixed(2);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').then(() => {
    console.log('Service Worker enregistré');
  });
}
