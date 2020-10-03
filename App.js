import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setModalOpen(false);
  };

  const deleteGoal = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoal = () => {
    setModalOpen(false);
  };

  //using key && id instead don't need key generator prop
  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setModalOpen(true)} />
      <StatusBar style="auto" />
      <GoalInput
        visible={modalOpen}
        onAddGoal={handleSubmit}
        onCancel={cancelGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteGoal}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

export default App;
