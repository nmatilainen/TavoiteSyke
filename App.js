import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HeartRateCalculator from './HeartRateCalculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeartRateCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
