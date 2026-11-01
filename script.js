const carte = document.getElementById("carte");
const fond = document.getElementById("fond");
const conteneurPoints = document.getElementById("points");
const infobulle = document.getElementById("infobulle");
const btnPlacement = document.getElementById("btn-placement");
const coords = document.getElementById("coords");

// Si la carte de fond est absente, on garde un fond de remplacement
fond.addEventListener("error", () => {
  fond.style.display = "none";
  carte.classList.add("sans-image");
});

// "Robe Fortune Teller" -> "robe-fortune-teller"
function slug(texte) {
  return texte
    .toLowerCase()
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function contenuInfobulle(lieu) {
  let html = `<h2>${lieu.nom}</h2>`;
  if (lieu.energie || lieu.temps) {
    html += `<p class="infos">`;
    if (lieu.energie) html += `⚡ ${lieu.energie} `;
    if (lieu.temps) html += `⏱ ${lieu.temps}`;
    html += `</p>`;
  }
  if (lieu.objets.length === 0) {
    return html + `<p class="infos">(liste à compléter)</p>`;
  }
  html += `<ul>`;
  for (const nom of lieu.objets) {
    const image = `images/items/${slug(nom)}.png`;
    // Si l'image n'existe pas, la case affiche le nom à la place
    html += `<li>
      <img src="${image}" alt="${nom}" onerror="this.parentElement.classList.add('sans-image'); this.remove()">
      <span>${nom}</span>
    </li>`;
  }
  return html + `</ul>`;
}

// Délai avant de cacher l'infobulle, pour pouvoir passer du point à l'infobulle
let minuteur;

function afficher(lieu, point) {
  clearTimeout(minuteur);
  infobulle.innerHTML = contenuInfobulle(lieu);
  infobulle.hidden = false;

  const c = carte.getBoundingClientRect();
  const p = point.getBoundingClientRect();
  const t = infobulle.getBoundingClientRect();

  // À droite du point, sinon à gauche s'il n'y a pas la place
  let left = p.left - c.left + p.width + 4;
  if (left + t.width > c.width) left = p.left - c.left - t.width - 4;
  left = Math.max(0, left);

  // Centrée verticalement sur le point, sans sortir de la carte
  let top = p.top - c.top + p.height / 2 - t.height / 2;
  top = Math.max(0, Math.min(top, c.height - t.height));

  infobulle.style.left = left + "px";
  infobulle.style.top = top + "px";
}

function masquer() {
  clearTimeout(minuteur);
  minuteur = setTimeout(() => { infobulle.hidden = true; }, 250);
}

// L'infobulle reste ouverte tant que la souris est dessus
infobulle.addEventListener("mouseenter", () => clearTimeout(minuteur));
infobulle.addEventListener("mouseleave", masquer);

// Création des points
for (const lieu of lieux) {
  const point = document.createElement("button");
  point.className = "point";
  point.type = "button";
  point.style.left = lieu.x + "%";
  point.style.top = lieu.y + "%";
  point.setAttribute("aria-label", lieu.nom);

  point.addEventListener("mouseenter", () => afficher(lieu, point));
  point.addEventListener("focus", () => afficher(lieu, point));
  point.addEventListener("click", () => afficher(lieu, point));
  point.addEventListener("mouseleave", masquer);
  point.addEventListener("blur", masquer);

  conteneurPoints.appendChild(point);
}

// Mode placement : cliquer sur la carte affiche les coordonnées x / y
let modePlacement = false;
if (new URLSearchParams(location.search).has("placement")) btnPlacement.hidden = false;

btnPlacement.addEventListener("click", () => {
  modePlacement = !modePlacement;
  btnPlacement.textContent = "Mode placement : " + (modePlacement ? "ON" : "OFF");
  coords.textContent = modePlacement ? "Clique sur la carte pour lire les coordonnées." : "";
});

carte.addEventListener("click", (e) => {
  if (!modePlacement) {
    // Cliquer dans le vide ferme l'infobulle (utile sur mobile)
    if (!e.target.classList.contains("point") && !e.target.closest("#infobulle")) {
      infobulle.hidden = true;
    }
    return;
  }
  const r = carte.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
  const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
  coords.textContent = `x: ${x}, y: ${y}`;
});
// Croix de fermeture du paragraphe d'introduction
document.getElementById("fermer-intro").addEventListener("click", () => {
  document.querySelector(".intro").hidden = true;
});