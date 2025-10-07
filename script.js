let panier = [];
let total = 0;

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  afficherPanier();
}

function afficherPanier() {
  const ul = document.getElementById("panier");
  ul.innerHTML = "";
  panier.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nom} - ${item.prix}€`;
    ul.appendChild(li);
  });
  document.getElementById("total").textContent = `Total : ${total}€`;
}
