import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';

interface ChartCardProps {
  title: string;
  period: string;
}

export function ChartCard({ title, period }: ChartCardProps) {
  // This would be replaced with actual chart data in a real app
  const mockBarData = [
    { day: 'Mon', value: 0.6 },
    { day: 'Tue', value: 0.8 },
    { day: 'Wed', value: 0.4 },
    { day: 'Thu', value: 0.9 },
    { day: 'Fri', value: 0.7 },
    { day: 'Sat', value: 0.5 },
    { day: 'Sun', value: 0.3 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.period}>{period}</Text>
      </View>
      
      <View style={styles.chartContainer}>
        {mockBarData.map((item, index) => (
          <View key={index} style={styles.barColumn}>
            <View style={styles.barWrapper}>
              <View 
                style={[
                  styles.bar, 
                  { 
                    height: `${item.value * 100}%`,
                    backgroundColor: item.value > 0.7 
                      ? theme.colors.primary 
                      : item.value > 0.4 
                        ? theme.colors.secondary 
                        : theme.colors.error,
                  }
                ]} 
              />
            </View>
            <Text style={styles.barLabel}>{item.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  period: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
  },
  barWrapper: {
    height: 120,
    width: 12,
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.round,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderRadius: theme.borderRadius.round,
  },
  barLabel: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.xs,
    color: theme.colors.subtext,
    marginTop: theme.spacing.sm,
  },
});