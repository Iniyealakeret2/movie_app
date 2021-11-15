import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import FavoritesTab from "./navigation/FavoritesTab";
import MoviesTab from "./navigation/MoviesTab";
import DetailsScreen from "./screens/Details/DetailsScreen";
import MoviesScreen from "./screens/Movies/MoviesScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
let iconName: string;

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Favorite Movies") {
              iconName = focused ? "ios-bookmark" : "ios-bookmark-outline";
            }

            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          labelPosition: "below-icon",
        })}
      >
        <Tab.Screen name="Home" component={MoviesTab} />
        <Tab.Screen name="Favorite Movies" component={FavoritesTab} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: "Movie Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
