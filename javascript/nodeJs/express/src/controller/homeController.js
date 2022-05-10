exports.homePage = ( req, res ) =>{
    res.render('index');
}

exports.pagePost = (req, res) =>{
    const dados = req.body.nome
    res.send(`Dados recebidos via POST: ${dados}`)
}