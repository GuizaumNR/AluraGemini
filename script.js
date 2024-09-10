//console.log(dados[2]);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

section.innerHTML = `
<div class="item-resultado">
    <h2>
        <a href="">${dados[0].titulo}</a>
    </h2>
    <p class="descricao-meta">${dados[0].descricao}</p>
        <a href="https://www.cob.org.br/comunicacao/noticias/beatriz-ferreira-conquista-o-ouro-na-categoria-60kg-do-boxe-nos-jogos-panamericanos" target="_blank">Mais informações</a>
    
</div>
`;