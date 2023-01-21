import React from 'react';
import ViewContact from '../screens/ViewContact';
import ContactList from '../screens/ContactList';
import AddContact from '../screens/AddContact';
import EditContact from '../screens/EditContact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Contacts" component={ContactList} />
        <Stack.Screen name="SingleContact" component={ViewContact} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="EditContact" component={EditContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
