import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.profile}>
        <Text style = {{marginTop: 20, marginBottom: 20, fontSize: 28, fontWeight: 'bold', fontFamily: 'aerial'}}>MI Card</Text>
      <Image style = {styles.pic} source = {require('./assets/pic.png')}/>
      <Text></Text>
      </View>

      <View style = {styles.details}></View>
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
    backgroundColor: 'red',
    alignItems: 'center'
  },
  
  details: {
    flex: .6,
    backgroundColor: 'black',
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
