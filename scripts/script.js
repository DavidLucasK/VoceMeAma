const imagens = [
    "./assets/gatinho1.jpg",
    "./assets/gatinho2.png",
    "./assets/gatinho3.png",
    "./assets/gatinho4.png",
    "./assets/gatinho5.jpg",
    "./assets/gatinho6.jpeg",
    "./assets/gatinho7.jpeg",
    "./assets/gatinho8.jpeg",
    "./assets/gatinho9.jpeg",
    "./assets/gatinho10.jpeg",
    "./assets/gatinho11.jpeg",
    "./assets/gatinho12.jpeg",
    "./assets/gatinho13.jpeg",
    "./assets/gatinho14.jpeg",
    "./assets/gatinho15.jpeg",
    "./assets/gatinho16.jpeg",
    "./assets/gatinho17.jpeg",
    "./assets/gatinho18.jpeg",
    "./assets/gatinho19.jpeg",
    "./assets/gatinho20.jpeg",
    "./assets/gatinho21.jpeg",
    "./assets/gatinho22.jpeg",
];

const noTexts = [
    "Não",
    "Ei",
    "Que?",
    "Hã?",
    "Porque?",
    "Sai daqui",
    "Sai ow",
    "Marcela Montagner?!?!",
    "Amor?",
    "Para",
    "Hihihihihi",
    "PARA!",
    "Como assim?",
    "Que isso",
    "Sai fora",
    "Desviei hihi",
    "Você não me pega"
]

let audioAtual = null;

function tocaMusica() {

    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    audioAtual = new Audio("./assets/careless_whispers.mp3");
    audioAtual.play();
}
  
function sim() {

tocaMusica();

const randomImage = imagens[Math.floor(Math.random() * imagens.length)];

const altura = 400;
const largura = 400;

    if (window.innerWidth < 768) { 
        const altura = 200;
        const largura = 200;

        Swal.fire({
            title: "Te amo também!",
            text: "Sabia que você me amava <3",
            imageUrl: randomImage,
            imageWidth: largura,
            imageHeight: altura,
            imageAlt: "Te amo",
            confirmButtonColor: "#d11507",
            confirmButtonText: "❤"
        });
    }
    else {
        Swal.fire({
            title: "Te amo também!",
            text: "Sabia que você me amava <3",
            imageUrl: randomImage,
            imageWidth: largura,
            imageHeight: altura,
            imageAlt: "Te amo",
            confirmButtonColor: "#d11507",
            confirmButtonText: "❤"
        });
    }
}

function desvia(btnnao) {
    const textRandom = noTexts[Math.floor(Math.random() * noTexts.length)];
    btnnao.style.display = 'inline-block';
    btnnao.textContent = textRandom;
    btnnao.style.width = 'auto';
    btnnao.style.padding = '10px';
    btnnao.style.bottom = geraPosicao(10, 90);
    btnnao.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}