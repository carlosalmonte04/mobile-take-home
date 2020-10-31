import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { width, height } from 'constants/constants';
import { styles } from './styles';

const PLAY_HIT_SLOP = {
  top: 100,
  right: (width * 0.1),
  bottom: 100,
  left: (width * 0.1),
};

const SKIP_HIT_SLOP = {
  top: height * 0.18,
  right: (width * 0.1),
  bottom: height * 0.18,
  left: (width * 0.1),
};

export const AudioControls = ({
  onPlayPress,
  id,
  onForward30Press,
  onBack30Press,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        style={[styles.back30, styles.skip]}
        onPress={() => onBack30Press(id)}
        hitSlop={SKIP_HIT_SLOP}
      >
        <Text style={styles.skip}>-30s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={() => onPlayPress(id)}
        hitSlop={PLAY_HIT_SLOP}
      >
        <View style={styles.playTriangle}  />
        <View style={styles.playCircle}  />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        style={[styles.forward30, styles.skip]}
        onPress={() => onForward30Press(id)}
        hitSlop={SKIP_HIT_SLOP}
      >
        <Text style={styles.skip}>+30s</Text>
      </TouchableOpacity>
    </View>
  )
}


