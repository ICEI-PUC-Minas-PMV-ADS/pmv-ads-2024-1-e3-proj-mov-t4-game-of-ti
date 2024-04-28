import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerActions,
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import ExamplePage from "./examplePage";
import AnotherExample from "./anotherExample";

const Drawer = createDrawerNavigator();
import CustomDrawerContent from "../components/customDrawerContent";

const Layout = () => {
  const navigationRef = useNavigationContainerRef();
  const theme = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.Action
          icon="menu"
          color="#fff"
          onPress={() => {
            navigationRef.dispatch(DrawerActions.toggleDrawer());
          }}
        />
        <Appbar.Content title="Game of IT" color="white" />
      </Appbar.Header>
      <Drawer.Navigator
        initialRouteName="ExamplePage"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: "front",
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#1D2D3D",
          },
        }}
      >
        <Drawer.Screen name="Example Page" component={ExamplePage} />
        <Drawer.Screen name="Another Example" component={AnotherExample} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
