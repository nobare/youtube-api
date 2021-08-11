const routes = require('express').Router();

const { getVideos, getMock } = require('./controllers/controller');

routes.post('/search', getVideos)
routes.get('/mock', getMock)

module.exports = routes;