const _ = require('lodash');
const moment = require('moment')

const separateInfos = (data) => {
  const titles = data.map(({ snippet: { title, description }}) => {
    return _.split(_.lowerCase(title + description), ' ')
  })
  return titles.flat();
}

const wordCounter = (data) => {
  const words = {};
  data.forEach( word => words[word] = (words[word] || 0) + 1 );
  const sortedWords = Object.keys(words).sort((a, b) => words[b] - words[a])

  return sortedWords;
}

const convertTimeFormat = (data) => {
  const durations = data.map(({ contentDetails: { duration }}) => {
    const time = moment.duration(duration, moment.ISO_8601);
    return time.asSeconds();
  })

  return durations
}
  
module.exports = {
  separateInfos,
  wordCounter,
  convertTimeFormat
};