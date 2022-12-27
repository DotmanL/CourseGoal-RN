import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderWidth: 1,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        activeOpacity={0.4}
        android_ripple={{ color: '#210644' }}
        onPress={props.onDelete.bind(this, props.id)}
        // this is to show ripple effect on IOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
