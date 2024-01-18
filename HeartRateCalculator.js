import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculateHeartRateLimits = () => {
    try {
      const ageValue = parseInt(age, 10);
      const lowerLimit = (220 - ageValue) * 0.65;
      const upperLimit = (220 - ageValue) * 0.85;
      setResult(`Heart Rate Limits: ${Math.floor(lowerLimit)} - ${Math.floor(upperLimit)} bpm`);
    } catch (error) {
      setResult('Please enter a valid age.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default HeartRateCalculator;
