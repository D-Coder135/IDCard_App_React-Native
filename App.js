import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.profile}>
      <Text></Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  profile: {
    flex: .4,
    backgroundColor: 'black',
    alignItems: center
  },
  
  details: {
    flex: .6,
    backgroundColor: 'red',
  },

  pic: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  items: {
    borderRightWidth: 2,
    borderBottomColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  }
});
