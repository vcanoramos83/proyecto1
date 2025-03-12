document.addEventListener("DOMContentLoaded", () => {
    const noticiasContainer = document.getElementById("noticias");
    const botonCargar = document.createElement("button");

    botonCargar.textContent = "Cargar más noticias";
    botonCargar.style.display = "block";
    botonCargar.style.margin = "20px auto";
    noticiasContainer.appendChild(botonCargar);

    const noticiasExtras = [
        {
            titulo: "🎮 Xbox lanza su nuevo servicio de juegos en la nube",
            contenido: "Microsoft ha anunciado un nuevo servicio que permitirá jugar sin necesidad de consola."
        },
        {
            titulo: "🕹️ Nintendo Switch 2: rumores sobre su lanzamiento",
            contenido: "Se han filtrado nuevos detalles sobre la posible Nintendo Switch 2 y su potencia gráfica."
        }
    ];

    botonCargar.addEventListener("click", () => {
        noticiasExtras.forEach(noticia => {
            const article = document.createElement("article");
            article.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
            noticiasContainer.appendChild(article);
        });

        botonCargar.remove(); // Elimina el botón después de cargar las noticias
    });
});
