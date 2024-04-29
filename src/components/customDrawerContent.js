import React from "react";
import { Drawer } from "react-native-paper";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  const [active, setActive] = React.useState("");

  function goTo(activeMenu, screen) {
    setActive(activeMenu);
    props.navigation.navigate(screen);
  }

  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => goTo("first", "Example Page")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => goTo("second", "Another Example")}
        />
      </Drawer.Section>

      <Drawer.Item label="Sair" />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
