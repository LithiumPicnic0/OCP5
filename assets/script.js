const slides = [{
	"image": "slide1.jpg",
	"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
 },
 {
	"image": "slide2.jpg",
	"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
 },
 {
	"image": "slide3.jpg",
	"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
 },
 {
	"image": "slide4.png",
	"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
 }]

// Attend que le contenu HTML soit chargé
document.addEventListener('DOMContentLoaded', function () {
 // Sélectionne l'élément HTML avec l'ID "banner" où le diaporama sera affiché
 const bannerDiv = document.querySelector('#banner');
 let currentIndex = 0; // Initialise l'indice de la diapositive actuelle à 0

 // Crée une image de flèche vers la gauche
 let arrowLeftImg = document.createElement('img');
 arrowLeftImg.classList.add('arrow', 'arrow_left'); // Ajoute des classes pour le stylage
 arrowLeftImg.src = './assets/images/arrow_left.png'; // Chemin vers l'image de la flèche gauche

 // Associe un événement "click" à la flèche gauche pour passer à la diapositive précédente
 arrowLeftImg.addEventListener('click', function () {
    console.log("Clic sur la flèche gauche"); // Ajout de la commande console.log
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner();
 });

 // Crée une image pour afficher la diapositive actuelle
 let bannerImg = document.createElement('img');
 bannerImg.className = 'banner-img'; // Ajoute une classe pour le stylage

 // Crée un élément "p" pour afficher la légende de la diapositive
 let bannerTagline = document.createElement('p');

 // Crée une image de flèche vers la droite
 let arrowRightImg = document.createElement('img');
 arrowRightImg.classList.add('arrow', 'arrow_right'); // Ajoute des classes pour le stylage
 arrowRightImg.src = './assets/images/arrow_right.png'; // Chemin vers l'image de la flèche droite

 // Associe un événement "click" à la flèche droite pour passer à la diapositive suivante
 arrowRightImg.addEventListener('click', function () {
    console.log("Clic sur la flèche droite"); // Ajout de la commande console.log
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner();
 });

 // Crée un conteneur pour les indicateurs de points
 let dotsImg = document.createElement('div');
 dotsImg.className = 'dots';

 // Initialise un tableau vide pour stocker les indicateurs de points
 let dots = [];

 // Parcourt le tableau "slides" pour créer les points et associer des événements "click" à chaque point
 slides.forEach((_slide, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot'); // Ajoute une classe pour le stylage
	dot.addEventListener('click', function () {
	   currentIndex = index;
	   updateBanner();
	});

	dotsImg.appendChild(dot);
	dots.push(dot);
 });

 // Fonction pour mettre à jour le contenu du diaporama en fonction de la diapositive actuelle
 function updateBanner() {
	bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image
	bannerTagline.innerHTML = slides[currentIndex].tagLine;
	dots.forEach((dot, index) => {
	   dot.classList.toggle('dot_selected', index === currentIndex);
	});

 }

 // Ajoute les éléments (flèches, image, légende, points) à l'élément HTML avec l'ID "banner"
 bannerDiv.appendChild(arrowLeftImg);
 bannerDiv.appendChild(bannerImg);
 bannerDiv.appendChild(bannerTagline);
 bannerDiv.appendChild(arrowRightImg);
 bannerDiv.appendChild(dotsImg);

 // Affiche la première diapositive
 updateBanner();
});
