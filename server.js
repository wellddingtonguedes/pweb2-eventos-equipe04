
import { EventosDatabase } from './database/EventosDatabase.js';
const db = new EventosDatabase();

import express from "express"

const app = express()

app.use(express.json())

app.get('/eventos', (req,res) => {
    res.json(db.listarTodos());
} )


app.post('/eventos', (req, res) => {
    const dadosEvento = req.body
    const dadosCadastrado = db.inserir(dadosEvento)
    res.status(201).json(dadosCadastrado)
})


app.put('/eventos/:id', (req, res) => {
    console.log(req.params)
    const {id} = req.params
    
    const dadosModificado = db.atualizar(id, req.body)
    res.status(200).json(dadosModificado)
})

app.listen(3000)
