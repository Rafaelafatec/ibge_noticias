import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './css/styles';


import HomeScreen from './HomeScreen';
import Notificacao from './Notificacao';

const Tab = createMaterialBottomTabNavigator();

export default function Root() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.topBar}>
          <Appbar.Content
            title="IBGE Notícias"
            style={styles.tituloToolbar}/>
        </Appbar.Header>
      <Tab.Navigator
      activeTintColor= 'blue'
      inactiveTintColor= 'black'
      barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen
        name="HomeScreen" 
        component={HomeScreen}
        style={styles.listaItem}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} style={styles.icone} />
          ),
        }}/>
        <Tab.Screen 
        name="Notificacao" 
        component={Notificacao} 
        options={{
          tabBarLabel: 'Notificação',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} style={styles.icone} />
          ),
        }}/>
      </Tab.Navigator>
      </View>
    );
}
 