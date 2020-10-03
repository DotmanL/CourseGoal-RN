import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

import GoalInput from './components/GoalInput';

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleSubmit = (goalTitle) => {
    // console.log(enteredGoal);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  //using key && id instead don't need key generator prop
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <GoalInput onAddGoal={handleSubmit} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={() => console.log('doesn;t work')}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

export default App;
