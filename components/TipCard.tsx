import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lightbulb } from 'lucide-react-native';

import { theme } from '@/constants/theme';

interface TipCardProps {
  title: string;
  message: string;
  actionLabel: string;
}

export function TipCard({ title, message, actionLabel }: TipCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Lightbulb size={20} color={theme.colors.primary} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary + '08',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  message: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  button: {
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
});