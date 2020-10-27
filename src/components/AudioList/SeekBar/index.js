import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';
import { styles } from './styles';

export const SeekBar = (props) => {
  const { position, bufferedPosition, duration } = useTrackPlayerProgress();
  return (
    <View style={styles.container}>
      <View style={styles.seekBar}
      />
      <View style={[{ left: position }, styles.seek]}
      />
      <View style={styles.time}>
        <Text style={styles.text}>{position.toString().toHHMMSS()}</Text>
        <Text style={styles.text}>{duration.toString().toHHMMSS()}</Text>
      </View>
    </View>
  )
}
