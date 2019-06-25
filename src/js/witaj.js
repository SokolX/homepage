const liczbaWejsc = 5;

const about = document.querySelector('.about__paragraph--js'); 
about.innerHTML = `Jestem tu po raz ${liczbaWejsc}`;

const name = 'Łukasz';

function witaj(name) {
    alert(`Witam na stronie. ${name}`);
}

witaj(name);

const witajConsolLog = (name) => {
    console.log(`Witam na stronie. ${name}`);
}

witajConsolLog(name);