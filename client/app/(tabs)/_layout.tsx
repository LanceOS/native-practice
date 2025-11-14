import React from "react";
import { Text, View } from "react-native"
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui"

export default function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="index" href="/">
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="profile" href="/profile">
          <Text>Profile</Text>
        </TabTrigger>
        <TabTrigger name="settings" href="/settings">
          <Text>Settings</Text>
        </TabTrigger>
     </TabList>
    </Tabs>
  );
};




