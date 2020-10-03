import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={handleChange}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

// onPress={() => props.onAddGoal.bind(this, enteredGoal)}
