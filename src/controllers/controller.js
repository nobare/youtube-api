const { searchVideos } = require('../services/youtube');
const { wordCounter, separateInfos, convertTimeFormat } = require('../utils/utils');
const { Mock } = require('../mock/Mock');

const getVideos = async (req, res) => {
  const { query } = req.body;

  const videos = await searchVideos(query);
  const mostUsedWords = wordCounter(separateInfos(videos))
  const videoDurations = convertTimeFormat(videos);
  res.json(videos)
};

const getMock = (req, res) => {
  const videos = Mock();
  const mostUsedWords = wordCounter(separateInfos(videos))
  const videoDurations = convertTimeFormat(videos); 
  res.json(videos)
};

module.exports = {
  getVideos,
  getMock
};