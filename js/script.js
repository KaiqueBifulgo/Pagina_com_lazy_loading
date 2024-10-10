const imagens = document.querySelectorAll(".images-article img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const imagem = entry.target;

        imagem.src = imagem.src.replace("&w=10&", "&w=2100&");

        observer.unobserve(imagem);
    }) 
}, {});


imagens.forEach((imagem) => {
    observer.observe(imagem)
})

