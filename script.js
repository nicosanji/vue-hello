// Per poter mostrare l'inspector di Vue 
Vue.config.devtools = true;

// Per poter mettere lo script nell'HEAD in html
window.addEventListener("DOMContentLoaded", function () {
    // Instanziare VueJs
    const vueApp = new Vue({
        // el: (#id del contenitore)
        el: `#titoloPag`,
        // data: (variabili utili)
        data: {
            // testo h1
            testoH1: "Glenn Quagmire",
            // classi h1
            testoH1Class: "text-center text-danger",
            // src immagine
            imgGlenn: "https://c.tenor.com/MXkU_7S8yaYAAAAC/glenn-quagmire-family-guy.gif",
            // classi immagine
            imgGlennClass: "d-block rounded mx-auto"
        }
    });
});



