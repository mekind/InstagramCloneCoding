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

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        style={{flexDirection: 'column'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.stories}>
          <ScrollView
            horizontal
            name="stories"
            contentContainerStyle={styles.storiescontent}>
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
            <ButtonWithIcons name="DefaultProfile" />
          </ScrollView>
        </View>
        <View style={styles.boards}></View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

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
    backgroundColor: 'white',
  },
  storiescontent: {
    backgroundColor: 'blue',
    borderBottomColor: 'red',
  },
  boards: {
    height: 100,
    backgroundColor: 'yellow',
  },
});

export default App;
