const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta) =>{
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    passoword: "root",
    database: "todoapp",
    port:3306
})

conexao.connect((erro) => {
    if (erro) {
        returnconsole.log(erro)
    }

    console.log("Estou aqui")

    app.listen(3000, () => {
        console.log("servidor rodando na porta")
    })

})

