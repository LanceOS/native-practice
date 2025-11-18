import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native"
import { Tabs } from "expo-router"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


const IS_WEB = Platform.OS === 'web'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarPosition: IS_WEB ? "top" : "bottom",
      tabBarActiveTintColor: '#d579ffff',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        ...(IS_WEB ? styles.tabBarWeb : styles.tabBarMobile)
      },
      tabBarLabelStyle: {
        ...styles.tabBarLabels
      }
    }} >
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name="profile" options={{ 
        title: "Profile",
        tabBarIcon: ({color}) => (
          <AntDesign name="profile" size={24} color={color} />
        )
       }} />
      <Tabs.Screen name="settings" options={{ 
        title: "Settings",
        tabBarIcon: ({color}) => (
          <Feather name="settings" size={24} color={color} />
        )
       }} />
    </Tabs>
  );
};


const styles = StyleSheet.create({
  tabBarMobile: {
    backgroundColor: "#202020ff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: 55
  },
  tabBarWeb: {
    backgroundColor: "#2a2a2a",
  },
  tabBarLabels: {
    fontWeight: "bold",
  },
});




