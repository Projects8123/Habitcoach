import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';

import { theme } from '@/constants/theme';
import { ProgressBar } from './ProgressBar';

interface HabitProgressCardProps {
  title: string;
  target: string;
  progress: number;
  current: string;
  completed?: boolean;
  icon: React.ReactNode;
  color: string;
}

export function HabitProgressCard({
  title,
  target,
  progress,
  current,
  completed = false,
  icon,
  color,
}: HabitProgressCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
          {icon}
        </View>
        {completed && (
          <View style={[styles.checkmark, { backgroundColor: color }]}>
            <Check size={12} color="white" />
          </View>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.target}>Target: {target}</Text>
      <ProgressBar progress={progress} color={color} />
      <Text style={styles.value}>{current}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  cardHeader: {
    position: 'relative',
    marginBottom: theme.spacing.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  target: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.sm,
  },
  value: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
  },
});