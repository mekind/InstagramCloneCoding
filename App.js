// In App.js in a new project

import * as React from 'react';
import {
  RefreshControl,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonWithIcons from './src/components/ButtonWithIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ReelsScreen from './src/screens/ReelsScreen';
import ShopScreen from './src/screens/ShopScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // headerStyle: {{styles.header}},
            title: '',
            tabBarButton: () => <ButtonWithIcons name="Home" />,
            headerLeft: () => <Text style={styles.instagram}>𝒾𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂</Text>,
            headerRight: () => (
              <View style={styles.icons}>
                <ButtonWithIcons name="AddBoard" />
                <ButtonWithIcons name="Like" />
                <ButtonWithIcons name="Plane" />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            // headerStyle: {{styles.header}},
            title: '',
            tabBarButton: () => <ButtonWithIcons name="Search" />,
          }}
        />
        <Stack.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            // headerStyle: {{styles.header}},
            title: '',
            tabBarButton: () => <ButtonWithIcons name="Reels" />,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            // headerStyle: {{styles.header}},
            title: '',
            tabBarButton: () => <ButtonWithIcons name="Shop" />,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // headerStyle: {{styles.header}},
            title: '',
            tabBarButton: () => <ButtonWithIcons name="Profile" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomColor: 'white',
  },
  instagram: {
    marginLeft: 10,
    fontSize: 33,
    letterSpacing: -7,
  },
  icons: {
    flexDirection: 'row',
    FlexDirection: 'row',
    paddingRight: 5,
    alignItems: 'center',
  },
  stories: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  storiescontent: {
    backgroundColor: 'white',
  },
  boards: {
    height: 100,
    backgroundColor: 'yellow',
  },
});

export default App;
