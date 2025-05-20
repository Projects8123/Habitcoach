import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, ChevronsUpDown } from 'lucide-react-native';

import { theme } from '@/constants/theme';
import { ChartCard } from '@/components/ChartCard';
import { StatSummaryCard } from '@/components/StatSummaryCard';
import { ProgressBar } from '@/components/ProgressBar';

const timeRanges = ['Week', 'Month', 'Year'];

export default function StatsScreen() {
  const [selectedRange, setSelectedRange] = useState('Week');
  const [showRangeDropdown, setShowRangeDropdown] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Statistics</Text>
        <TouchableOpacity 
          style={styles.rangeSelector}
          onPress={() => setShowRangeDropdown(!showRangeDropdown)}
        >
          <Text style={styles.rangeText}>{selectedRange}</Text>
          <ChevronsUpDown size={16} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {showRangeDropdown && (
        <View style={styles.dropdown}>
          {timeRanges.map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.dropdownItem,
                selectedRange === range && styles.selectedDropdownItem
              ]}
              onPress={() => {
                setSelectedRange(range);
                setShowRangeDropdown(false);
              }}
            >
              <Text style={[
                styles.dropdownText,
                selectedRange === range && styles.selectedDropdownText
              ]}>
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView style={styles.container}>
        <View style={styles.summaryRow}>
          <StatSummaryCard 
            title="Completed"
            value="85%"
            change="+5%"
            positive={true}
          />
          <StatSummaryCard 
            title="Streak"
            value="7 days"
            change="+3"
            positive={true}
          />
        </View>

        <ChartCard 
          title="Overall Consistency"
          period="Last 7 days"
        />

        <Text style={styles.sectionTitle}>Habit Performance</Text>

        <View style={styles.habitStats}>
          <View style={styles.habitStat}>
            <View style={styles.habitHeader}>
              <Text style={styles.habitTitle}>Sleep</Text>
              <Text style={styles.habitValue}>6.7h <Text style={styles.habitTarget}>/ 8h</Text></Text>
            </View>
            <ProgressBar progress={0.75} color={theme.colors.primary} />
          </View>

          <View style={styles.habitStat}>
            <View style={styles.habitHeader}>
              <Text style={styles.habitTitle}>Water</Text>
              <Text style={styles.habitValue}>4 <Text style={styles.habitTarget}>/ 8 glasses</Text></Text>
            </View>
            <ProgressBar progress={0.5} color="#4AD991" />
          </View>

          <View style={styles.habitStat}>
            <View style={styles.habitHeader}>
              <Text style={styles.habitTitle}>Exercise</Text>
              <Text style={styles.habitValue}>30m <Text style={styles.habitTarget}>/ 30m</Text></Text>
            </View>
            <ProgressBar progress={1.0} color={theme.colors.secondary} />
          </View>

          <View style={styles.habitStat}>
            <View style={styles.habitHeader}>
              <Text style={styles.habitTitle}>Meditation</Text>
              <Text style={styles.habitValue}>0m <Text style={styles.habitTarget}>/ 10m</Text></Text>
            </View>
            <ProgressBar progress={0} color="#F97066" />
          </View>
        </View>

        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTitle}>Monthly View</Text>
            <Calendar size={20} color={theme.colors.text} />
          </View>
          <Text style={styles.calendarSubtitle}>June 2025</Text>
          <View style={styles.calendarPlaceholder}>
            {/* Calendar component would go here */}
            <Text style={styles.placeholderText}>Calendar View</Text>
          </View>
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
  rangeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
  },
  rangeText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
    marginRight: theme.spacing.sm,
  },
  dropdown: {
    position: 'absolute',
    top: 100,
    right: theme.spacing.lg,
    backgroundColor: 'white',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xs,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.sm,
  },
  selectedDropdownItem: {
    backgroundColor: theme.colors.lightGrey,
  },
  dropdownText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
  },
  selectedDropdownText: {
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  habitStats: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  habitStat: {
    marginBottom: theme.spacing.md,
  },
  habitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  habitTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  habitValue: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  habitTarget: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
  },
  calendarCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  calendarTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  calendarSubtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.md,
  },
  calendarPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: theme.borderRadius.md,
  },
  placeholderText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
  },
  spacing: {
    height: theme.spacing.xxl * 2,
  },
});