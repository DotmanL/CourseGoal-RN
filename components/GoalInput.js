import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  input: {
    width: '80%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    display: 'flex',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
});

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleChange}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="#f31282" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

// onPress={() => props.onAddGoal.bind(this, enteredGoal)}
