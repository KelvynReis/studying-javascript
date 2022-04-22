// XMLHttprequest

const request = obj =>{

    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);

        xhr.send();

        xhr.addEventListener('load', ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            }
        })
    })
    
}

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

        const objConfig = {
            method: 'GET',
            url: href,
        }
        const response = await request(objConfig)
        ResultLoad(response)
    }catch(err){
        console.log(err);
    }
}

function ResultLoad( response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}