const routes = require('express').Router();
const { getVideos } = require('./controllers/searchController');

routes.post('/search', getVideos)
//routes.post('/mock')

module.exports = routes;