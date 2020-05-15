const { Router }= require('express')
const routes = Router()

// Controllers
const UserController = require('./controllers/UserController')

// Announcements
const ConfeccaoController = require('./controllers/Announcement/ConfeccaoController')
const MalhaController = require('./controllers/Announcement/MalhaController')
const OutrosController = require('./controllers/Announcement/OutrosController')

// Situations
const AgentController = require('./controllers/Situations/AgentController')
const JobController = require('./controllers/Situations/JobController')
const DonationController = require('./controllers/Situations/DonationController')

// Usuário

routes.get('/user', UserController.index )
routes.get('/user/:id', UserController.detail )
routes.post('/user/login', UserController.login )
routes.post('/user', UserController.store )
routes.put('/user/:id', UserController.update )
routes.delete('/user/:id', UserController.destroy )

// Announcements
  // Confecção
  routes.get('/confeccao/:id', ConfeccaoController.detail)
  routes.post('/confeccao', ConfeccaoController.store)
  routes.put('/confeccao/:id', ConfeccaoController.update)
  routes.delete('/confeccao/:id', ConfeccaoController.destroy)
  routes.get('/confeccao/find', ConfeccaoController.index)
  routes.post('/confeccao/find', ConfeccaoController.indexType)

  // Malha
  routes.get('/malha/:id', MalhaController.detail)
  routes.post('/malha', MalhaController.store)
  routes.put('/malha/:id', MalhaController.update)
  routes.delete('/malha/:id', MalhaController.destroy)
  routes.get('/malha/find', MalhaController.index)
  routes.post('/malha/find', MalhaController.indexType)

  // Outros
  routes.get('/outros/:id', OutrosController.detail)
  routes.post('/outros', OutrosController.store)
  routes.put('/outros/:id', OutrosController.update)
  routes.delete('/outros/:id', OutrosController.destroy)
  routes.get('/outros/find', OutrosController.index)
  routes.post('/outros/find', OutrosController.indexType)

// Situations
  // Agents
  routes.post('/sit/agents/find', AgentController.index )
  routes.get('/sit/agents/:search', AgentController.searchProducts )
  routes.post('/sit/agents', AgentController.store )
  routes.put('/sit/agents/:id', AgentController.update )
  routes.delete('/sit/agents/:id', AgentController.destroy )

  // Job
  routes.post('/sit/jobs/find', JobController.index )
  routes.get('/sit/jobs/:id', JobController.detail )
  routes.post('/sit/jobs', JobController.store )
  routes.put('/sit/jobs/:id', JobController.update )
  routes.delete('/sit/jobs/:id', JobController.destroy )

  // Donation
  routes.post('/sit/donation/find', DonationController.index )
  routes.get('/sit/donation/:id', DonationController.detail )
  routes.post('/sit/donation', DonationController.store )
  routes.put('/sit/donation/:id', DonationController.update )
  routes.delete('/sit/donation/:id', DonationController.destroy )

module.exports = routes