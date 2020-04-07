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
const JobController = require('./controllers/Situations/JobController')
const DonationController = require('./controllers/Situations/DonationController')

// Search
routes.get('/all/:type/:id', SearchController.indexAll)

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

  routes.get('/confeccao', ConfeccaoController.index)
  routes.get('/confeccao/type/:adsTipo', ConfeccaoController.indexType)
  routes.get('/confeccao/from/:userId', ConfeccaoController.indexFrom)
  routes.get('/confeccao/type/from/:adsTipo/:userId', ConfeccaoController.indexTypeFrom)
  routes.get('/confeccao/:id', ConfeccaoController.detail)
  routes.post('/confeccao', ConfeccaoController.store)
  routes.put('/confeccao/:id', ConfeccaoController.update)
  routes.delete('/confeccao/:id', ConfeccaoController.destroy)

  // Malha
  routes.get('/malha/search/:search', SearchController.indexM)
  routes.get('/malha/search/type/:type/:search', SearchController.indexTypeM)

  routes.get('/malha', MalhaController.index)
  routes.get('/malha/type/:adsTipo', MalhaController.indexType)
  routes.get('/malha/from/:userId', MalhaController.indexFrom)
  routes.get('/malha/type/from/:adsTipo/:userId', MalhaController.indexTypeFrom)
  routes.get('/malha/:id', MalhaController.detail)
  routes.post('/malha', MalhaController.store)
  routes.put('/malha/:id', MalhaController.update)
  routes.delete('/malha/:id', MalhaController.destroy)

  // Outros
  routes.get('/outros/search/:search', SearchController.indexO)
  routes.get('/outros/search/type/:type/:search', SearchController.indexTypeO)

  routes.get('/outros', OutrosController.index)
  routes.get('/outros/type/:adsTipo', OutrosController.indexType)
  routes.get('/outros/from/:userId', OutrosController.indexFrom)
  routes.get('/outros/type/from/:adsTipo/:userId', OutrosController.indexTypeFrom)
  routes.get('/outros/:id', OutrosController.detail)
  routes.post('/outros', OutrosController.store)
  routes.put('/outros/:id', OutrosController.update)
  routes.delete('/outros/:id', OutrosController.destroy)

// Organizations
  // Charity Organization
  routes.get('/organizations/charity', CharityOrganizationController.index )
  routes.get('/organizations/charity/:id', CharityOrganizationController.detail )
  routes.post('/organizations/charity', CharityOrganizationController.store )
  routes.put('/organizations/charity/:id', CharityOrganizationController.update )
  routes.delete('/organizations/charity/:id', CharityOrganizationController.delete )

// Situations
  // Job
  routes.get('/sit/jobs', JobController.index )
  routes.get('/sit/jobs/:id', JobController.detail )
  routes.post('/sit/jobs', JobController.store )
  routes.put('/sit/jobs/:id', JobController.update )
  routes.delete('/sit/jobs/:id', JobController.delete )

  // Donation
  routes.get('/sit/donation', DonationController.index )
  routes.get('/sit/donation/from/:id', DonationController.indexFrom )
  routes.get('/sit/donation/to/:id', DonationController.indexTo )
  routes.get('/sit/donation/:id', DonationController.detail )
  routes.post('/sit/donation', DonationController.store )
  routes.put('/sit/donation/:id', DonationController.update )
  routes.delete('/sit/donation/:id', DonationController.delete )

module.exports = routes