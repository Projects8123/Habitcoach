import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';

interface ProgressBarProps {
  progress: number;
  color: string;
  height?: number;
}

export function ProgressBar({ progress, color, height = 6 }: ProgressBarProps) {
  return (
    <View style={[styles.container, { height }]}>
      <View 
        style={[
          styles.progress, 
          { 
            width: `${Math.min(progress * 100, 100)}%`,
            backgroundColor: color,
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.round,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: theme.borderRadius.round,
  },
});