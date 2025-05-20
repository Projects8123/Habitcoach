import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, Settings, Bell, Award, CreditCard, LogOut, HelpCircle } from 'lucide-react-native';

import { theme } from '@/constants/theme';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Settings size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileEmail}>sarah.johnson@example.com</Text>
          </View>
        </View>

        <View style={styles.subscriptionBanner}>
          <View>
            <Text style={styles.subscriptionTitle}>VitalFlow Free</Text>
            <Text style={styles.subscriptionText}>Upgrade to Pro for more features</Text>
          </View>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Upgrade</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
                <Award size={20} color={theme.colors.primary} />
              </View>
              <Text style={styles.settingsItemText}>My Achievements</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.grey} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: theme.colors.secondary + '20' }]}>
                <CreditCard size={20} color={theme.colors.secondary} />
              </View>
              <Text style={styles.settingsItemText}>Subscription</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.grey} />
          </TouchableOpacity>
          
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#4AD991' + '20' }]}>
                <Bell size={20} color="#4AD991" />
              </View>
              <Text style={styles.settingsItemText}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: theme.colors.lightGrey, true: theme.colors.primary + '80' }}
              thumbColor={notificationsEnabled ? theme.colors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Support</Text>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#F97066' + '20' }]}>
                <HelpCircle size={20} color="#F97066" />
              </View>
              <Text style={styles.settingsItemText}>Help Center</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.grey} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: theme.colors.error + '20' }]}>
                <LogOut size={20} color={theme.colors.error} />
              </View>
              <Text style={styles.logoutText}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
          <TouchableOpacity>
            <Text style={styles.privacyLink}>Privacy Policy</Text>
          </TouchableOpacity>
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
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: theme.spacing.lg,
  },
  profileName: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  profileEmail: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
  },
  subscriptionBanner: {
    backgroundColor: theme.colors.primary + '10',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  subscriptionTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  subscriptionText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
  },
  upgradeButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.round,
  },
  upgradeButtonText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.white,
  },
  sectionTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.md,
  },
  settingsSection: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.xl,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  settingsItemText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  logoutText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.error,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  version: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
  },
  privacyLink: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  spacing: {
    height: theme.spacing.xxl * 2,
  },
});