import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AudioListScreen } from 'screens';


/*
AUDIO FILES

https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
...
https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3



*/
export default function App(): number {
  return <AudioListScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
