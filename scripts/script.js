const deLijst = document.querySelector("section ul");

/* next pijltje */
const next = document.querySelector(".next");
if (next) {
	next.onclick = showNext;
}

/* previous pijltje */
const prev = document.querySelector(".prev");
if (prev) {
	prev.onclick = showPrev;
}

/* functie om volgende afbeelding te laten zien */
function showNext() {	
	const lastWeg = deLijst.querySelector( 'li.weg' );
	var dezeMoetWeg;
	if (lastWeg) {
		// dit is het plaatje vóór degene die weg is gehaald
		dezeMoetWeg = lastWeg.previousElementSibling;
	}
	else {
		// dit is dus het bovenste plaatje, geen plaatjes weg
		dezeMoetWeg = deLijst.querySelector( 'li:last-of-type' );
		
		// dáárna dus previous button tonen
		prev.classList.remove("hide");
	}
	
	// weggehaalde plaatje wordt ook als weg gezien
	dezeMoetWeg.classList.add("weg");
	
	const itemsZonderWeg = deLijst.querySelectorAll( 'li:not(.weg)' );
	
	// dit is dus het laatste plaatje
	if (itemsZonderWeg.length == 1) {
		// verberg next button
		next.classList.add("hide");
	}
}

/* functie om vorige afbeelding terug te halen */
function showPrev() {
	const dezeWeerInbeeld = deLijst.querySelector( 'li.weg' );
	
	dezeWeerInbeeld.classList.remove("weg");
	
	const isErNogEenOmWeerTeTonen = deLijst.querySelector( 'li.weg' );
	
	if (isErNogEenOmWeerTeTonen) {
		// we hoeven niks te doen, er ik er nog eentje om te tonen
	} else {
		// geen meer om te tonen / bovenste plaatje, dus previous button verbergen
		prev.classList.add("hide");
	}
	
	const isErNogEenOmWegTeHalen = deLijst.querySelector( 'li:not(.weg)' );
	
	if (isErNogEenOmWegTeHalen) {
		// er is er nog een die we weg kunnen halen, dus next button tonen
		next.classList.remove("hide");
	}
}

// menu laten verschijnen/verdwijnen
const menuButton = document.querySelector("header button");
const menuDiv = document.querySelector("header button + div");
const sluitButton = document.querySelector("div > button");

// menu laten verschijnen bij klik op de menu knop
menuButton.onclick = showMenu;

function showMenu() {
	menuDiv.style.display = "block";
}

// menu laten verdwijnen bij klik op kruije
sluitButton.onclick = hideMenu;

function hideMenu() {
	menuDiv.style.display = "none";
}

// aanmeldformulier voor nieuwsbrief laten verschijnen/verdwijnen in footer
// bron: c#corner - https://www.c-sharpcorner.com/article/show-and-hide-divs-on-button-click-with-javascript/
const nieuwsbriefButton = document.getElementById("nieuwsbriefButton");
const nieuwsbriefForm = document.querySelector("#aanmeldformulier");
const kruisjeForm = document.querySelector("#aanmeldformulier svg");

// aanmeldformulier laten verschijnen bij klik op de nieuwsbrief knop
nieuwsbriefButton.onclick = showForm;

function showForm() {
	nieuwsbriefForm.style.display = "block";
}

// aanmeldformulier laten verdwijnen bij klik op kruije
kruisjeForm.onclick = hideForm;

function hideForm() {
	nieuwsbriefForm.style.display = "none";
}

// aanmeldformulier versturen
const versturenButton = document.querySelector("#versturenbutton");
const verzondenDiv = document.querySelector("#verzonden");
const kruisjeVerzonden = document.querySelector("#verzonden svg");

versturenButton.onclick = showSent;

function showSent() {
	event.preventDefault(); /* bron: Quora - https://www.quora.com/How-do-you-prevent-a-page-reload-in-JavaScript#:~:text=To%20prevent%20a%20form%20from,form%20and%20reloading%20the%20page. */
	hideForm();
	verzondenDiv.style.display = "block";
}

// verzonden laten verdwijnen bij klik op kruije
kruisjeVerzonden.onclick = hideVerzonden;

function hideVerzonden() {
	verzondenDiv.style.display = "none";
}