import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { View } from 'react-native';
import { AUDIO_TRACKS } from 'constants/audio-player.js';  
import {
  StatusBarHeight,
  height,
  width,
  IMAGE_SIZE,
  IMAGE_CONTAINER_SIZE,
  POST_CONTAINER_SIZE,
} from 'constants/constants.js';  
import { SeekBar } from './SeekBar';
import { AudioPostItem } from './AudioPostItem';
import { styles } from './styles';

export const AudioList = ({ 
  data,
  onMomentumScrollEnd,
  onPlayPress,
  queue,
  skip,
  nowPlaying,
}) => {
  const renderItem = ({ item, index }) => {
    return (
      <AudioPostItem
        id={item.id}
        title={item.title}
        artist={item.artist}
        artwork={item.artwork}
        index={index}
        queue={queue}
        onPlayPress={onPlayPress}
        skip={skip}
        nowPlaying={nowPlaying}
      />
    );
  }

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          onMomentumScrollEnd={onMomentumScrollEnd}
          data={data}
          renderItem={renderItem}
          initialNumToRender={3}
          keyExtractor={(item) => item.id}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={POST_CONTAINER_SIZE}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={(
            <View style={styles.header}>
              <Text style={styles.title}>Owning your single life</Text>
              <Text style={styles.subtitle}>Audio sessions</Text>
            </View>
          )}
          ListFooterComponent={(
            <View style={[styles.header, styles.footer]}>
            </View>
          )}
          pagingEnabled
        />
      </View>
    )
}
