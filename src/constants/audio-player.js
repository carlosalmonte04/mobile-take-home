let i = 1;
export const AUDIO_FILES = [];
export const AUDIO_BY_ID = {

};

for(let i = 0; i <= 16; i++) {
  const id = `SoundHelix-Song-${i + 1}`;
  AUDIO_FILES.push(
    {
      id: `SoundHelix-Song-${i}`,
      key: `SoundHelix-Song-${i}`,
      url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i + 1}.mp3`,
      title: `SoundHelix ${i + 1}`,
      artist: 'SoundHelix',
      artwork: `https://picsum.photos/id/1${i + 1}/200/300`,
    }
  );

  AUDIO_BY_ID[id] = i;
}
