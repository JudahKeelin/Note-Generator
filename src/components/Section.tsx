import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-windows';

interface Props {
  statement: string;
  values: string[];
}

function Section(props: Props) {
  if (props.values.length === 0 || !props.values[0]) {
    return null;
  }
  return (
      <Text selectable style={styles.textStyle}>{processString(props)}</Text>
  );
}

function processString(props: Props): string {
  return props.statement.replace(/\{\{(\d+)\}\}/g, (_, index) => props.values[index] || '').replace(/\\n/g, '\n');
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 21,
  },
});

export default Section;
