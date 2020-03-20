const { Router }= require('express')
const routes = Router()

// Controllers
const SearchController = require('./controllers/SearchController')
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')
const ConfeccaoController = require('./controllers/Announcement/ConfeccaoController')
const MalhaController = require('./controllers/Announcement/MalhaController')



// Search
routes.get('/user/search/:search', SearchController.indexU)
routes.get('/confeccao/search/:search', SearchController.indexC)
routes.get('/malha/search/:search', SearchController.indexM)

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
routes.get('/confeccao/:adsTipo', ConfeccaoController.indexType)
routes.get('/confeccao/:userId', ConfeccaoController.indexFrom)
routes.get('/confeccao/:adsTipo/:userId', ConfeccaoController.indexTypeFrom)
routes.get('/confeccao/detail/:id', ConfeccaoController.detail)
routes.post('/confeccao', ConfeccaoController.store)
routes.put('/confeccao/:id', ConfeccaoController.update)
routes.delete('/confeccao/:id', ConfeccaoController.destroy)

// Malha
routes.get('/malha', MalhaController.index)
routes.get('/malha/:adsTipo', MalhaController.indexType)
routes.get('/malha/:userId', MalhaController.indexFrom)
routes.get('/malha/:adsTipo/userId', MalhaController.indexTypeFrom)
routes.get('/malha/detail/:id', MalhaController.detail)
routes.post('/malha', MalhaController.store)
routes.put('/malha/:id', MalhaController.update)
routes.delete('/malha/:id', MalhaController.destroy)

module.exports = routes