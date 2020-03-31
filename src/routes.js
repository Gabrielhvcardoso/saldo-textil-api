const { Router }= require('express')
const routes = Router()

// Controllers
const SearchController = require('./controllers/SearchController')
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')
const ConfeccaoController = require('./controllers/Announcement/ConfeccaoController')
const MalhaController = require('./controllers/Announcement/MalhaController')
const OutrosController = require('./controllers/Announcement/OutrosController')


// Search
routes.get('/user/search/:search', SearchController.indexU)
routes.get('/confeccao/search/:search', SearchController.indexC)
routes.get('/confeccao/search/type/:type/:search', SearchController.indexTypeC)
routes.get('/malha/search/:search', SearchController.indexM)
routes.get('/malha/search/type/:type/:search', SearchController.indexTypeM)
routes.get('/outros/search/:search', SearchController.indexO)
routes.get('/outros/search/type/:type/:search', SearchController.indexTypeO)

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
routes.get('/confeccao/type/:adsTipo', ConfeccaoController.indexType)
routes.get('/confeccao/from/:userId', ConfeccaoController.indexFrom)
routes.get('/confeccao/type/from/:adsTipo/:userId', ConfeccaoController.indexTypeFrom)
routes.get('/confeccao/:id', ConfeccaoController.detail)
routes.post('/confeccao', ConfeccaoController.store)
routes.put('/confeccao/:id', ConfeccaoController.update)
routes.delete('/confeccao/:id', ConfeccaoController.destroy)

// Malha
routes.get('/malha', MalhaController.index)
routes.get('/malha/type/:adsTipo', MalhaController.indexType)
routes.get('/malha/from/:userId', MalhaController.indexFrom)
routes.get('/malha/type/from/:adsTipo/:userId', MalhaController.indexTypeFrom)
routes.get('/malha/:id', MalhaController.detail)
routes.post('/malha', MalhaController.store)
routes.put('/malha/:id', MalhaController.update)
routes.delete('/malha/:id', MalhaController.destroy)

// Outros
routes.get('/outros', OutrosController.index)
routes.get('/outros/type/:adsTipo', OutrosController.indexType)
routes.get('/outros/from/:userId', OutrosController.indexFrom)
routes.get('/outros/type/from/:adsTipo/:userId', OutrosController.indexTypeFrom)
routes.get('/outros/:id', OutrosController.detail)
routes.post('/outros', OutrosController.store)
routes.put('/outros/:id', OutrosController.update)
routes.delete('/outros/:id', OutrosController.destroy)

module.exports = routes