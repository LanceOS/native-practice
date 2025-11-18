import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


export default function Home() {
  return (
    <SafeAreaView style={styles.pageBG}>
      <View>
        
      </View>
      <Text>Hello World</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  pageBG: {
    backgroundColor: "#131313",
    height: "auto"
  }
})