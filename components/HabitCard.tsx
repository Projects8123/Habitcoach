import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { theme } from '@/constants/theme';

interface HabitCardProps {
  habit: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBackground: string;
    frequency: string;
    progress: number;
    streakCount: number;
  };
  onUpdateProgress: (progress: number) => void;
}

export function HabitCard({ habit, onUpdateProgress }: HabitCardProps) {
  const [animValue] = useState(new Animated.Value(0));
  
  const handlePress = () => {
    const newProgress = habit.progress >= 1 ? 0 : habit.progress + 0.25;
    
    Animated.sequence([
      Animated.timing(animValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    
    onUpdateProgress(newProgress);
  };
  
  const scale = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.95, 1],
  });
  
  const getProgressText = () => {
    if (habit.progress === 0) return 'Not started';
    if (habit.progress < 1) return `${Math.round(habit.progress * 100)}% done`;
    return 'Completed';
  };
  
  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <View style={styles.header}>
        <View 
          style={[
            styles.iconContainer, 
            { backgroundColor: habit.iconBackground }
          ]}
        >
          {habit.icon}
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streakCount}>{habit.streakCount}</Text>
          <Text style={styles.streakLabel}>days</Text>
        </View>
      </View>
      
      <Text style={styles.title}>{habit.title}</Text>
      <Text style={styles.description}>{habit.description}</Text>
      
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${Math.min(habit.progress * 100, 100)}%` }
          ]} 
        />
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.progressText}>{getProgressText()}</Text>
        <TouchableOpacity
          style={[
            styles.updateButton,
            habit.progress >= 1 && styles.resetButton,
          ]}
          onPress={handlePress}
        >
          <Text 
            style={[
              styles.updateButtonText,
              habit.progress >= 1 && styles.resetButtonText,
            ]}
          >
            {habit.progress >= 1 ? 'Reset' : 'Update'}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    elevation: 1,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakContainer: {
    alignItems: 'center',
  },
  streakCount: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
  },
  streakLabel: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.xs,
    color: theme.colors.subtext,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.round,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.round,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
  },
  updateButton: {
    backgroundColor: theme.colors.primary + '20',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.round,
  },
  resetButton: {
    backgroundColor: theme.colors.error + '20',
  },
  updateButtonText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  resetButtonText: {
    color: theme.colors.error,
  },
});