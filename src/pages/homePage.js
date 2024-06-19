import React from "react";
// import {View, StyleSheet} from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Text } from "react-native-paper";

import Container from "../components/container";

const HomePage = ({ navigation }) => {
  navigation.toggleDrawer();

  return (
    <Container>
      <Text>Teste</Text>
    </Container>
  );
};

export default HomePage;