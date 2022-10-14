import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                cardStyle: { backgroundColor: 'white' },
                headerTitleStyle: {
                    fontFamily: boldFontFamily,
                    fontSize: boldFontSize,
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomColor: '#eaeaea',
                    borderBottomWidth: 0.5,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                title: '마이페이지',
                headerTitleAlign: 'center',
            }} />
    );
};

export default HomeScreen;