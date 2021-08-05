const { searchVideos } = require('../services/youtube');

exports.getVideos = async (req, res) => {
  const { query } = req.body;

  const data = await searchVideos(query);
  res.json(data)
} 