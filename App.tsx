import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import tw from "twrnc";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: tw.color("slate-900") },
        headerTintColor: tw.color("slate-200"),
        sceneContainerStyle: { backgroundColor: tw.color("slate-900") },
        drawerContentStyle: { backgroundColor: tw.color("slate-800") },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: tw.color("slate-700"),
        drawerActiveTintColor: tw.color("slate-50"),
        drawerInactiveTintColor: tw.color("slate-400"),
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
              headerStyle: { backgroundColor: tw.color("slate-900") },
              headerTintColor: tw.color("slate-200"),
              contentStyle: { backgroundColor: tw.color("slate-900") },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
            <Stack.Screen name="MealsDetails" component={MealsDetailScreen} options={{ title: "About the Meal" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
