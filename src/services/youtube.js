const { google } = require('googleapis');

const youtubeAPI = google.youtube({
  version: 'v3',
  auth: 'AIzaSyA-rBVfyLfSXGcAFzqnFZOy_knSJUdUWNY',
});

const searchVideos = async (query, data = [], nextPageToken = false) => {
  const params = {
    q: query,
		part:'snippet',
		maxResults:'5',
		order: 'viewCount',
		type: 'video'
  }

  if (nextPageToken) params.nextPageToken

  const infos = await youtubeAPI.search.list(params);
  const ids = infos.data.items.map(({id: { videoId }}) => videoId).join(',');
  const videos = await youtubeAPI.videos.list({...params, part:'contentDetails', id: ids });

  videos.data.items.forEach(({ id, contentDetails }) => {
    const detailedVideos = infos.data.items.find(({id: {videoId}}) => id == videoId);
    detailedVideos.contentDetails = contentDetails
  });

  data = [...data, ...infos.data.items]
  if(data.length === 5) return data 

  return searchVideos(query, data, nextPageToken);
}

module.exports = {
  searchVideos
}