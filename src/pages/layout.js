import React from "react";
import ExamplePage from "./examplePage";
import AnotherExample from "./anotherExample";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Layout = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="ExamplePage"
          screenOptions={{
            drawerInactiveTintColor: "#fff",
            drawerActiveTintColor: "#fff",
            drawerStyle: {
              backgroundColor: "#1D2D3D",
            },
          }}
        >
          <Drawer.Screen name="Example Page" component={ExamplePage} />
          <Drawer.Screen name="Another Example" component={AnotherExample} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Layout;
