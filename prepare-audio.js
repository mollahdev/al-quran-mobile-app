const fs = require('fs');
const path = require('path');
const getMP3Duration = require('get-mp3-duration')


const basePath = path.resolve('./assets/audio'); // Replace with your actual path
const folders = fs.readdirSync(basePath);

// sort the folders from 1 to 114
folders.sort((a, b) => Number(a) - Number(b));

const fileMap = folders.map((folder) => {
    if (folder !== '.DS_Store') {
      const json = path.join(basePath, folder, 'audio.json');
  
      // extract title and duration from json file
      const jsonFile = require(json);
      const endingDigit = folder.charAt(folder.length - 1);
      const titlePrefix = folder < 10 ? `0${folder}` : folder;
      
      // read the audio file duration from mp3 file
      const audioFile = path.join(basePath, folder, 'audio.mp3');
      const buffer = fs.readFileSync(audioFile);
      const duration = getMP3Duration(buffer)

  
      return `{
        id: ${Number(folder)},
        title: '${titlePrefix} ${jsonFile.name}',
        audio: require('@/assets/audio/${folder}/audio.mp3'),
        duration: ${duration},
        artwork: require('@/assets/thumbnails/${endingDigit}.png'),
      }`;
    }    
}).filter(Boolean)

fs.writeFileSync('./services/store/data.js', `
  const data = [
    ${fileMap.join(',\n     ')}
  ];
  export default data;
`);