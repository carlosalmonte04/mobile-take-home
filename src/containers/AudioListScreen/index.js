import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { AUDIO_FILES } from '../../constants/audio-player.js';  
import { AudioList } from '../../components';
import { POST_CONTAINER_SIZE } from '../../components/AudioList/styles';

export const AudioListScreen = (props) => {
  const [nowPlaying, setNowPlaying] = useState(0);
  const [queue, setQueue] = useState(AUDIO_FILES);

  useEffect(() => {
    const setupPlayer = (async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(queue);
    })();

    return () => {
      TrackPlayer.stop();
    }
  }, [])

  const onPlayPress = async () => {
    await TrackPlayer.play();
  }

  const skip = async (id) => {
    await TrackPlayer.skip(id);
  }

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
    const index = Math.round(scrollYPosition / POST_CONTAINER_SIZE);
    if (!(index > 0 && index < 17)) return;
    setNowPlaying(index);
    await moveToTrack(queue[index].id);
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
