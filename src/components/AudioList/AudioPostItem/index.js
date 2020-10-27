import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { IMAGE_SIZE, width, StatusBarHeight } from '../../../constants/constants.js';
import { SeekBar } from '../SeekBar';
import { AudioControls } from '../AudioControls';
import { styles } from './styles';

export const AudioPostItem = ({
  title,
  artist,
  id,
  artwork,
  index,
  queue,
  onPlayPress,
  skip,
  nowPlaying,
}) => {
  return (
    <View key={id} style={styles.post}>
      <View style={styles.postTitleContainer}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postAuthor}>{artist}</Text>
      </View>
      <View style={styles.imageBtnsContainer}>
        <Image
          style={styles.artwork}
          source={{ uri: artwork }}
        />
        <AudioControls
          onPress={skip}
          id={id}
          onPlayPress={onPlayPress}
          onForward30Press={() => {}}
          onBack30Press={() => {}}
          disabled={!(nowPlaying === index)}
        />
      </View>
      <SeekBar
        id={id}
        nowPlaying={queue[nowPlaying].id}
      />
    </View>
  )
};
