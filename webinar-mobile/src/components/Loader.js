import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  wrap: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 120,
  },
};

const Loader = () => (
  <View style={styles.wrap}>
    <Text style={styles.emoji} role="img" aria-label="loading">⏳</Text>
  </View>
);

export default Loader;