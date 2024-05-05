import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "Edit Name",
    icon: {
      name: "account-edit",
      backgroundColor: colors.primary,
    },
    screen: "EditName",
  },
  {
    title: "Edit Password",
    icon: {
      name: "account-key",
      backgroundColor: colors.secondary,
    },
    screen: "EditPassword",
  },
  {
    title: "Change profile photo",
    icon: {
      name: "account-tie-outline",
      backgroundColor: colors.caramel,
    },
    screen: "",
  },
];

function AccountScreen(props) {
  const navigation = useNavigation();

  const handleMenuItemPress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Roua Bouassida"
          subTitle="rouabouassida7@gmail.com"
          image={require("../assets/utilisateur.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMenuItemPress(item.screen)}>
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.claire,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
