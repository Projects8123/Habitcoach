import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react-native';
import { theme } from '@/constants/theme';

interface StatSummaryCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

export function StatSummaryCard({ title, value, change, positive }: StatSummaryCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.changeContainer}>
        {positive ? (
          <ArrowUpRight size={16} color={theme.colors.success} />
        ) : (
          <ArrowDownRight size={16} color={theme.colors.error} />
        )}
        <Text 
          style={[
            styles.changeText, 
            { color: positive ? theme.colors.success : theme.colors.error }
          ]}
        >
          {change}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.sm,
  },
  value: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.xxl,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
    marginLeft: 4,
  },
});