const file = `./resource/content.json`;
var target = document.getElementById('target');
target.innerHTML = '';


function gerarID() {
    var conteudo = "abcdefghijklmnopqrstuvxyz"
    var id = "";
    for (var i = 0; i < 8; i++) {
        var indice = Math.floor(Math.random() * conteudo.length);
        id += conteudo[indice];
    }
    return id
}

function addAcordeon(title, itens) {
    var id = gerarID();
    var accItem = `<div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed px-5 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
                                <h1 class="display-5">${title}</h1>
                            </button>
                        </h2>
                        <div id="${id}" class="accordion-collapse" data-bs-parent="#target">
                            <div class="accordion-body"><div class="container">`;
    for (n in itens) {
        // let question = itens[n].replace(/<ol>/g, "").replace(/<li>/g, "<p>").replace(/<\/li>/g, "</p>").replace(/<\/ol>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "");
        let question = itens[n].replace(/<p>/g, "<p class='lead fl-norecued'>")
            .replace(/<li>/g, "<li class='list-group-item bg-light'>")
            .replace(/<ul>/g, "<ul class='list-group list-group-flush mx-4 bg-light'>")
            .replace(/<table>/g, "<table class='table m-auto w-50 bg-light'>")
            .replace(/<td>/g, "<td class='bg-light'>")
            .replace(/<td class='text-center'/g, "<td class='text-center bg-light'");
        
        accItem += `<div class="bg-light my-2 p-2 border border-primary border-1 rounded rounded-2"><p class="lead fl-recued">${parseInt(n) + 1} - ${question}</p></div>`;
    }

    accItem += `</div></div></div></div>`;

    return accItem;
}

fetch(file).then(response => {
    return response.json();
}).then(data => {
    var dados = data.topic;
    var itens = [];
    var title = '';
    for (n in dados) {
        title = dados[n].title;
        for (j in dados[n].questions) {
            itens.push(dados[n].questions[j]);
        }
        target.innerHTML += addAcordeon(title, itens);
        title = "";
        itens = [];
    }

})
