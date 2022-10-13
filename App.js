// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonWithIcons from './src/components/ButtonWithIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerLeft: () => (<Text style={{
              fontSize: 30,
              letterSpacing: -5
            }}>𝒾𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂</Text>),
            headerRight: () => (
              <View style={{
                flexDirection: "row",
                FlexDirection: "row",
                // backgroundColor: "yellow",
                alignItems: "center",
                marginLeft: 30
              }}>
                <ButtonWithIcons name='AddBoard' />
                <ButtonWithIcons name='Like' />
                <ButtonWithIcons name='Plane' />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};


export default App;