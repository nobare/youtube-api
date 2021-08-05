const { google } = require('googleapis');
require('dotenv').config();

const youtubeApi = google.youtube({
  version: 'v3',
  auth: process.env.GOOGLE_AUTH
});

const searchVideos = async (query) => {
  const obj = {
    q: query,
		part:'snippet',
		maxResults:'3',
		order: 'viewCount',
		type: 'video'
  }

  const infos = await youtubeApi.search.list(obj);
  /* const ids = infos.data.items(({ id: {videoId }}) => videoId).join('');
  const videos = youtubeApi.videos.list({
    ...obj,
    part:'contentDetails',
    id: ids
  }) */
  return infos;
}

module.exports = {
  searchVideos
}