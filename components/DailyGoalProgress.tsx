import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { theme } from '@/constants/theme';

interface DailyGoalProgressProps {
  progress: number;
  completed: number;
  total: number;
}

export function DailyGoalProgress({ progress, completed, total }: DailyGoalProgressProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedValue]);
  
  const width = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Daily Goals</Text>
        <Text style={styles.counter}>{completed}/{total} completed</Text>
      </View>
      
      <View style={styles.progressContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            {
              width,
              backgroundColor: progress === 1 ? theme.colors.success : theme.colors.primary,
            },
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
  },
  counter: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.primary,
  },
  progressContainer: {
    height: 10,
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.round,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: theme.borderRadius.round,
  },
});