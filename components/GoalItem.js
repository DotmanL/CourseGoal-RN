import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touc } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
