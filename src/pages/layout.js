import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import LoginPage from "./loginPage";
import HomePage from "./homePage";
import CadastroPage from "./cadastroPage";
import ResetPasswordPage from "./resetPasswordPage";
import ProfilePage from "./profilePage";

const Drawer = createDrawerNavigator();

const Layout = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Login" component={LoginPage} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Cadastro" component={CadastroPage} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Perfil" component={ProfilePage} />  
        <Drawer.Screen name="Trocar Senha" component={ResetPasswordPage} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Layout;


