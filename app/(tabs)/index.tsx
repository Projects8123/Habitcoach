import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Droplet, Moon, Dumbbell, Heart } from 'lucide-react-native';

import { theme } from '@/constants/theme';
import { HabitProgressCard } from '@/components/HabitProgressCard';
import { DailyGoalProgress } from '@/components/DailyGoalProgress';
import { TipCard } from '@/components/TipCard';
import { WeekCalendar } from '@/components/WeekCalendar';

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Sarah</Text>
          </View>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.avatar}
            />
            <View style={styles.streakBadge}>
              <Text style={styles.streakText}>7</Text>
            </View>
          </TouchableOpacity>
        </View>

        <WeekCalendar 
          selectedDate={selectedDate} 
          onSelectDate={setSelectedDate} 
        />

        <DailyGoalProgress 
          progress={0.65} 
          completed={3} 
          total={5} 
        />

        <Text style={styles.sectionTitle}>Today's Habits</Text>
        
        <View style={styles.habitsContainer}>
          <HabitProgressCard
            title="Sleep"
            target="8 hours"
            progress={0.75}
            current="6h"
            icon={<Moon size={24} color={theme.colors.primary} />}
            color={theme.colors.primary}
          />
          
          <HabitProgressCard
            title="Water"
            target="8 glasses"
            progress={0.5}
            current="4/8"
            icon={<Droplet size={24} color="#4AD991" />}
            color="#4AD991"
          />
          
          <HabitProgressCard
            title="Exercise"
            target="30 minutes"
            progress={1}
            current="30m"
            completed={true}
            icon={<Dumbbell size={24} color={theme.colors.secondary} />}
            color={theme.colors.secondary}
          />
          
          <HabitProgressCard
            title="Meditation"
            target="10 minutes"
            progress={0}
            current="0m"
            icon={<Heart size={24} color="#F97066" />}
            color="#F97066"
          />
        </View>

        <Text style={styles.sectionTitle}>AI Coach Insights</Text>
        
        <TipCard
          title="Optimize Your Sleep"
          message="Based on your sleep patterns, try going to bed 30 minutes earlier tonight to improve your sleep quality."
          actionLabel="View Sleep Tips"
        />
        
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
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
  },
  name: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.xxl,
    color: theme.colors.text,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  streakBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  streakText: {
    color: 'white',
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
  },
  sectionTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  habitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spacing: {
    height: theme.spacing.xxl * 2,
  },
});