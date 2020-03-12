const { Router }= require('express')
const routes = Router()

const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')

routes.get('/user', UserController.index )
routes.get('/user/:id', UserController.detail )
routes.post('/user/login', UserController.login )
routes.post('/user', UserController.store )
routes.put('/user/:id', UserController.update )
routes.delete('/user/:id', UserController.destroy )


routes.get('/card/:id', CardController.detail )
routes.post('/card', CardController.store )
routes.put('card/:id', CardController.update )
routes.delete('card:id', CardController.destroy )

module.exports = routes