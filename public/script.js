window.addEventListener("DOMContentLoaded", async() => {
    const musicaContainer = document.querySelector(".musicas");

    const resposta = await fetch("http://localhost:5500/api/musicas");
    const musicas = await resposta.json();

    musicas.forEach(musica => {
        const musicaCard = document.createElement("div");
        musicaCard.classList.add("musica-card");
        musicaCard.innerHTML = `
        <h3>${musica.titulo}</h3>
        <p>${musica.artista}</p>
        <p>${musica.album}</p>
        <p>${musica.duracao}</p>
        <audio controls>
            <source src="${musica.url}" type="audio/mpeg">
        </audio>
        `;
        musicaContainer.appendChild(musicaCard);
    })
})