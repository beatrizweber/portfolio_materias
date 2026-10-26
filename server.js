
// express.json() -> TRADUTOR: Converte o JSON recebido no req.body em um objeto JavaScript legível.
// cors() -> SEGURANÇA: Libera o acesso para que seu frontend (ex: localhost:5173) consiga fazer requisições para a API.
// listen(3000) -> BOTÃO DE LIGAR: Inicia o servidor e fica "ouvindo" as requisições que chegam na porta 3000.
import express from 'express'
import cors from 'cors'

const servidor = express()

// Configurações (devem vir no começo)
servidor.use(express.json())
servidor.use(cors())

// Rota raiz
servidor.get('/', (req, res) => {
    res.send('Olá! A API está funcionando corretamente.')
})

// === ROTAS DA POKÉDEX ===
const pokedex = []

servidor.get('/pokedex', (req, res) => {
    res.send(pokedex)
})

servidor.post('/pokedex', (req, res) => {
    const pokemon = req.body
    pokedex.push(pokemon)

    res.send('pokemon cadastrado!')
})

// === ROTAS DO PORTFÓLIO (MATÉRIAS) ===
const materias = []

servidor.get('/materias', (req, res) => {
    res.send(materias)
})

servidor.post('/materias', (req, res) => {
    const materia = req.body
    materias.push(materia)

    res.send('matéria cadastrada!')
})

// Servidor rodando (precisa ficar no final de tudo)
servidor.listen(3000, () => { console.log('deu bom') })