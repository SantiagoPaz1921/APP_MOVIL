import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import inicio from './screens/categoria';
import agregar from './screens/agregar';
import eliminar from './screens/eliminar';
import modificar from './screens/modificar';
import listar from './screens/listar';
import inicio from './screens/inicio';

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="inicio" 
          component={inicio}
          options={{
            title: 'SCRUM5M',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />

        <Stack.Screen 
          name="categoria" 
          component={categoria}
          options={{
            title: 'agregando categoria',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />

        <Stack.Screen 
          name="agregar" 
          component={agregar}
          options={{
            title: 'agregando productos',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />

        <Stack.Screen 
          name="eliminar" 
          component={eliminar}
          options={{
            title: 'eliminando producto',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />

        <Stack.Screen 
          name="modificar" 
          component={modificar}
          options={{
            title: 'modificando producto',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />

        <Stack.Screen 
          name="listar" 
          component={listar}
          options={{
            title: 'listar productos',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#3E8E41' }, 
            headerTintColor: 'black'
          }} 
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

