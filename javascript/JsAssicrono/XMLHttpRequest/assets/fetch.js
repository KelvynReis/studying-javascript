// fetch

document.addEventListener('click', event =>{
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        event.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    
    try{
        const href = el.getAttribute('href')
        const response = await fetch(href)
        const html = await response.text()

        ResultLoad(html)

    }catch(err){
        console.log(err);
    }
}

function ResultLoad( response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}