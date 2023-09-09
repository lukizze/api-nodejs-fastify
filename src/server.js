import { fastify } from 'fastify';
import { databaseMemory } from './database/databaseMemory.js';

const server = fastify();
const db = new databaseMemory();


// Lista os Perfil Criados
server.get('/', (req, res) => {
    const information = db.list()


    return res.status(200).send(information)
});


// Cria o Perfil
server.post('/profile', (req, res) => {
    const { name, email, password } = req.body

    db.create({
        name,
        email,
        password,
    })

    return res.status(201).send('Successfully Created')
});


// Modifica Informações do Perfil
server.put('/profile/:id', (req, res) => {
    const profileId = req.params.id
    const { name, email, password } = req.body

    db.update(profileId, {
        name,
        email,
        password,
    })

    return res.status(200).send()
});


// Deleta o Perfil
server.delete('/profile/:id', (req, res) => {
    const id = req.params.id

    db.delete(id)

    return res.status(200).send('Successfully Deleted')
});


server.listen({
    port: process.env.PORT ?? 3030,
});