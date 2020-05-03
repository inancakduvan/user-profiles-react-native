import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import Home from "./components/home";
import Profile from "./components/profile";

export default function App() {

  // const [users, setUsers] = useState([]);

  // const ws = new WebSocket(
  //   "https://wunder-provider.herokuapp.com/"
  // );

  // ws.onopen = () => {
  //   console.log("Opened.");
  // };

  // ws.onmessage = msg => {
  //   console.log(msg, "saa")
  // };

  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
