function calculer() {
  const is_EPITA = document.getElementById("student").checked;
  const montant = parseFloat(document.getElementById("price").value);

  if (isNaN(montant)) {
    document.getElementById("resultat").innerText = "Veuillez entrer un montant valide.";
    return;
  }

  let result;
  if (is_EPITA) {
    result = (montant / 3.5) * 0.7;
  } else {
    result = montant / 3.5;
  }

  document.getElementById("resultat").innerText = "Résultat : " + result.toFixed(2);
}

document.getElementById("DaDitoForm").addEventListener("input", calculer);
document.getElementById("student").addEventListener("input", calculer);



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').then(() => {
    console.log('Service Worker enregistré');
  });
}
