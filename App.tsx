// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import CardListScreen from './screens/CardListScreen';
import AddCardScreen from './screens/AddCardScreen';
import { Ionicons } from '@expo/vector-icons';


type RootStackParamList = {
  Cards: undefined;
  AddCard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = ({ route }: { route: RouteProp<RootStackParamList, keyof RootStackParamList> }): StackNavigationOptions => {
  return ({
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTintColor: '#333',

    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitleVisible: false,

    headerLeft: () => {
      const navigation = useNavigation();
      return (
        <Ionicons.Button
          name="chevron-back"
          size={24}
          color="#333"
          backgroundColor="transparent"
          underlayColor="transparent"
          onPress={() => navigation.goBack()}
        />
      )
    },
    headerRight: () => {
      const navigation = useNavigation();

      if (route.name === 'Cards') {
        const handleAddCardPress = () => {
          // Navigate to AddCardScreen
          navigation.navigate('AddCard');
        };

        return (
          <Ionicons.Button
            name="add"
            size={30}
            color="#333"
            activeOpacity={0.6}
            backgroundColor="transparent"
            underlayColor="transparent"
            onPress={handleAddCardPress}
          />
        );
      }

      return null;
  },
  })
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cards" screenOptions={(route) => {
        return screenOptions(route)
      }}>
        <Stack.Screen name="Cards" component={CardListScreen} options={{ title: 'Cards' }} />
        <Stack.Screen name="AddCard" component={AddCardScreen} options={{ title: 'Add Card' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
