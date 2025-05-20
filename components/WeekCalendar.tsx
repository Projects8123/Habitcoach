import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '@/constants/theme';

interface WeekCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function WeekCalendar({ selectedDate, onSelectDate }: WeekCalendarProps) {
  const generateWeekDays = () => {
    const today = new Date();
    const days = [];
    
    // Create dates for past 3 days, today, and next 3 days
    for (let i = -3; i <= 3; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    
    return days;
  };
  
  const weekDays = generateWeekDays();
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };
  
  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() && 
           date.getMonth() === selectedDate.getMonth() && 
           date.getFullYear() === selectedDate.getFullYear();
  };
  
  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {weekDays.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayContainer,
              isSelected(date) && styles.selectedDayContainer,
            ]}
            onPress={() => onSelectDate(date)}
          >
            <Text
              style={[
                styles.dayName,
                isSelected(date) && styles.selectedText,
              ]}
            >
              {getDayName(date)}
            </Text>
            <View
              style={[
                styles.dateContainer,
                isToday(date) && styles.todayContainer,
                isSelected(date) && styles.selectedDateContainer,
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  isToday(date) && styles.todayText,
                  isSelected(date) && styles.selectedDateText,
                ]}
              >
                {date.getDate()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.xs,
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: theme.spacing.sm,
    width: 50,
  },
  selectedDayContainer: {
    // Selected day styles
  },
  dayName: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.xs,
  },
  selectedText: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.semiBold,
  },
  dateContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
  },
  todayContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  selectedDateContainer: {
    backgroundColor: theme.colors.primary,
  },
  dateText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  todayText: {
    color: theme.colors.primary,
  },
  selectedDateText: {
    color: theme.colors.white,
  },
});