import React from "react";
import { useTheme } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { SQLiteProvider, useSQLiteContext} from 'expo-sqlite';


import LoginPage from "./loginPage";
import HomePage from "./homePage";
import CadastroPage from "./cadastroPage";
import ResetPasswordPage from "./resetPasswordPage";

const Drawer = createDrawerNavigator();

const Layout = () => {
  const navigationRef = useNavigationContainerRef();
  const theme = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="LoginPage">
        <Drawer.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Drawer.Screen name="Cadastro" component={CadastroPage} options={{ headerShown: false }} />
        <Drawer.Screen name="ResetPassword" component={ResetPasswordPage} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={HomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Layout;


