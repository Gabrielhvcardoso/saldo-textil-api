const { Router }= require('express')
const routes = Router()

// Controllers
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')
const ConfeccaoController = require('./controllers/Announcement/ConfeccaoController')
const MalhaController = require('./controllers/Announcement/MalhaController')

// Usuário
routes.get('/user', UserController.index )
routes.get('/user/:id', UserController.detail )
routes.post('/user/login', UserController.login )
routes.post('/user', UserController.store )
routes.put('/user/:id', UserController.update )
routes.delete('/user/:id', UserController.destroy )

// Cartão de credito
routes.get('/card/:id', CardController.detail )
routes.post('/card', CardController.store )
routes.put('card/:id', CardController.update )
routes.delete('card:id', CardController.destroy )

// Confecção
routes.get('/confeccao', ConfeccaoController.index)
routes.post('/confeccao', ConfeccaoController.indexType)
routes.post('/confeccao', ConfeccaoController.indexFrom)
routes.post('/confeccao', ConfeccaoController.indexTypeFrom)
routes.get('/confeccao/:id', ConfeccaoController.detail)
routes.post('/confeccao', ConfeccaoController.store)
routes.put('/confeccao/:id', ConfeccaoController.update)
routes.delete('/confeccao/:id', ConfeccaoController.destroy)

// Malha
routes.get('/malha', MalhaController.index)
routes.post('/malha', MalhaController.indexType)
routes.post('/malha', MalhaController.indexFrom)
routes.post('/malha', MalhaController.indexTypeFrom)
routes.get('/malha/:id', MalhaController.detail)
routes.post('/malha', MalhaController.store)
routes.put('/malha/:id', MalhaController.update)
routes.delete('/malha/:id', MalhaController.destroy)

module.exports = routes