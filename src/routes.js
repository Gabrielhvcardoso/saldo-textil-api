const { Router }= require('express')
const routes = Router()

// Controllers
const SearchController = require('./controllers/SearchController')
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')

// Announcements
const ConfeccaoController = require('./controllers/Announcement/ConfeccaoController')
const MalhaController = require('./controllers/Announcement/MalhaController')
const OutrosController = require('./controllers/Announcement/OutrosController')

// Organizations
const CharityOrganizationController = require('./controllers/Organization/CharityOrganizationController')

// Situations
const AgentController = require('./controllers/Situations/AgentController')
const JobController = require('./controllers/Situations/JobController')
const DonationController = require('./controllers/Situations/DonationController')

// Usuário
routes.get('/user/search/:search', SearchController.indexU)

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

// Announcements
  // Confecção
  routes.get('/confeccao/search/:search', SearchController.indexC)
  routes.get('/confeccao/search/type/:type/:search', SearchController.indexTypeC)
  routes.get('/confeccao/:id', ConfeccaoController.detail)
  routes.post('/confeccao', ConfeccaoController.store)
  routes.put('/confeccao/:id', ConfeccaoController.update)
  routes.delete('/confeccao/:id', ConfeccaoController.destroy)
  routes.get('/confeccao/find', ConfeccaoController.index)
  routes.post('/confeccao/find', ConfeccaoController.indexType)

  // Malha
  routes.get('/malha/search/:search', SearchController.indexM)
  routes.get('/malha/search/type/:type/:search', SearchController.indexTypeM)
  routes.get('/malha/:id', MalhaController.detail)
  routes.post('/malha', MalhaController.store)
  routes.put('/malha/:id', MalhaController.update)
  routes.delete('/malha/:id', MalhaController.destroy)
  routes.get('/malha/find', MalhaController.index)
  routes.post('/malha/find', MalhaController.indexType)

  // Outros
  routes.get('/outros/search/:search', SearchController.indexO)
  routes.get('/outros/search/type/:type/:search', SearchController.indexTypeO)
  routes.get('/outros/:id', OutrosController.detail)
  routes.post('/outros', OutrosController.store)
  routes.put('/outros/:id', OutrosController.update)
  routes.delete('/outros/:id', OutrosController.destroy)
  routes.get('/outros/find', OutrosController.index)
  routes.post('/outros/find', OutrosController.indexType)

// Organizations
  // Charity Organization
  routes.get('/search/organizations/charity/:search', SearchController.indexOC )
  
  routes.get('/organizations/charity', CharityOrganizationController.index )
  routes.get('/organizations/charity/:id', CharityOrganizationController.detail )
  routes.post('/organizations/charity', CharityOrganizationController.store )
  routes.put('/organizations/charity/:id', CharityOrganizationController.update )
  routes.delete('/organizations/charity/:id', CharityOrganizationController.destroy )

// Situations
  // Agents
  routes.get('/sit/agents', AgentController.index )
  routes.get('/sit/agents/:search', AgentController.searchProducts )
  routes.post('/sit/agents', AgentController.store )
  routes.put('/sit/agents/:id', AgentController.update )
  routes.delete('/sit/agents/:id', AgentController.destroy )
  // Job
  routes.get('/search/sit/jobs/:search', SearchController.indexJ )

  routes.get('/sit/jobs', JobController.index )
  routes.get('/sit/jobs/:id', JobController.detail )
  routes.post('/sit/jobs', JobController.store )
  routes.put('/sit/jobs/:id', JobController.update )
  routes.delete('/sit/jobs/:id', JobController.destroy )

  // Donation
  routes.get('/sit/donation', DonationController.index )
  routes.get('/sit/donation/from/:id', DonationController.indexFrom )
  routes.get('/sit/donation/to/:id', DonationController.indexTo )
  routes.get('/sit/donation/:id', DonationController.detail )
  routes.post('/sit/donation', DonationController.store )
  routes.put('/sit/donation/:id', DonationController.update )
  routes.delete('/sit/donation/:id', DonationController.destroy )

module.exports = routes