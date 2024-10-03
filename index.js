const express = require('express');
const app = express();
app.use(express.json());

//get http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})

let filmes = [
    {
        titulo: "Interstellar",
        sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
    },
    {
       titulo: "Ate o ultimo homem",
        sinopse: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens."
    }
];

app.get('/filmes', (req, res)=>{
    res.json(filmes);
});

app.post('/filmes', (req, res) =>{
    //capturar as informações enviadas
    const titulo = req.body
    const sinopse = req.body.sinopse
    //montar um objeto json filme com as informações capturadas
    const novo_filme = {titulo: titulo, sinopse: sinopse}
    //acrescenta o novo filme a base
    filmes.push(novo_filme)
    //responde ao cliente. Aqui, optamos por devolver a base inteira ao cliente,embora não seja obrigatório.
res.json(filmes)
})

app.listen (3000, () => console.log("server up & running"))
