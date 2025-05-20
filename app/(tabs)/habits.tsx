import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Moon, Droplet, Dumbbell, Heart } from 'lucide-react-native';

import { theme } from '@/constants/theme';
import { HabitCard } from '@/components/HabitCard';

const HABIT_DATA = [
  {
    id: '1',
    title: 'Sleep',
    description: 'Get 8 hours of quality sleep',
    icon: <Moon size={24} color={theme.colors.white} />,
    iconBackground: theme.colors.primary,
    frequency: 'daily',
    progress: 0.75,
    streakCount: 5,
  },
  {
    id: '2',
    title: 'Water',
    description: 'Drink 8 glasses of water',
    icon: <Droplet size={24} color={theme.colors.white} />,
    iconBackground: '#4AD991',
    frequency: 'daily',
    progress: 0.5,
    streakCount: 12,
  },
  {
    id: '3',
    title: 'Exercise',
    description: '30 minutes of physical activity',
    icon: <Dumbbell size={24} color={theme.colors.white} />,
    iconBackground: theme.colors.secondary,
    frequency: 'daily',
    progress: 1.0,
    streakCount: 3,
  },
  {
    id: '4',
    title: 'Meditation',
    description: '10 minutes of meditation',
    icon: <Heart size={24} color={theme.colors.white} />,
    iconBackground: '#F97066',
    frequency: 'daily',
    progress: 0,
    streakCount: 0,
  },
];

export default function HabitsScreen() {
  const [habits, setHabits] = useState(HABIT_DATA);

  const updateHabitProgress = (id: string, newProgress: number) => {
    setHabits(
      habits.map((habit) => 
        habit.id === id ? { ...habit, progress: newProgress } : habit
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>My Habits</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={styles.activeFilterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Completed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.habitsContainer}>
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onUpdateProgress={(progress) => updateHabitProgress(habit.id, progress)}
            />
          ))}
        </View>

        <View style={styles.spacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.xxl,
    color: theme.colors.text,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  filterContainer: {
    flexDirection: 'row',
    marginVertical: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  filterButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    marginRight: theme.spacing.md,
    borderRadius: theme.borderRadius.round,
  },
  activeFilter: {
    backgroundColor: theme.colors.primary,
  },
  activeFilterText: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
  },
  filterText: {
    color: theme.colors.subtext,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
  },
  habitsContainer: {
    marginTop: theme.spacing.md,
  },
  spacing: {
    height: theme.spacing.xxl * 2,
  },
});