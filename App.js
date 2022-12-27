import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setModalOpen(true)}
        />
        <GoalInput
          visible={modalOpen}
          onAddGoal={handleSubmit}
          onCancel={cancelGoal}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={deleteGoal}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </>
  );
};

export default App;
