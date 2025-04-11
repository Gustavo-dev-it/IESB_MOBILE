import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg" }}
        style={styles.escudo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  escudo: { width: 200, height: 200, resizeMode: 'contain' }
});
