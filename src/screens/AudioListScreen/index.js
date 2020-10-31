import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { AUDIO_TRACKS } from 'constants/audio-player.js';  
import { AudioList } from 'components';
import { POST_CONTAINER_SIZE } from 'components/AudioList/styles';

export const AudioListScreen = (props) => {
  const [nowPlaying, setNowPlaying] = useState(0);
  const [queue, setQueue] = useState(AUDIO_TRACKS);

  useEffect(() => {
    const setupPlayer = (async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(queue);
    })();

    return () => TrackPlayer.stop();
  }, [])

  const onPlayPress = async () =>
    await TrackPlayer.play();

  const skip = async (id) =>
    await TrackPlayer.skip(id);


  const moveToTrack =  async (id) => {
    await TrackPlayer.pause();
    await TrackPlayer.skip(id);
  }

  const onMomentumScrollEnd = async ({
    nativeEvent: {
      contentOffset: {
        y: scrollYPosition
      }
    }
  }) => {
    const songIndex = Math.round(scrollYPosition / POST_CONTAINER_SIZE);
    if (!(songIndex > 0 && songIndex < 17)) return;
    setNowPlaying(songIndex);
    await moveToTrack(queue[songIndex].id);
  }

  return (
    <AudioList
      data={queue}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onPlayPress={onPlayPress}
      queue={queue}
      onPlayPress={onPlayPress}
      skip={skip}
      nowPlaying={nowPlaying}
    />
  );
}
