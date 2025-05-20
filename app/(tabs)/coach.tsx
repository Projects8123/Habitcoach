import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SendHorizontal } from 'lucide-react-native';

import { theme } from '@/constants/theme';

// Mock data for the chat
const INITIAL_MESSAGES = [
  {
    id: '1',
    text: 'Hello Sarah! I'm your VitalFlow AI coach. How can I help you with your health habits today?',
    isUser: false,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    text: 'I've noticed your sleep pattern has been inconsistent this week. Would you like some tips to improve your sleep quality?',
    isUser: false,
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
  },
  {
    id: '3',
    text: 'Yes, I've been having trouble falling asleep lately.',
    isUser: true,
    timestamp: new Date(Date.now() - 19 * 60 * 1000),
  },
  {
    id: '4',
    text: 'I recommend establishing a consistent sleep schedule, even on weekends. Based on your data, 10:30 PM would be ideal for you. Also, try to avoid screens 1 hour before bed and create a relaxing bedtime routine like reading or gentle stretching. Would you like me to set a reminder for your new bedtime?',
    isUser: false,
    timestamp: new Date(Date.now() - 18 * 60 * 1000),
  },
];

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default function CoachScreen() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          text: "I've made a note of your message. I'll analyze your habits and suggest personalized improvements soon. Is there anything specific you'd like help with?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Coach</Text>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/7641779/pexels-photo-7641779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
          style={styles.coachAvatar} 
        />
      </View>

      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView 
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Coach Ava</Text>
            <Text style={styles.welcomeSubtitle}>Your personal AI health coach</Text>
          </View>

          {messages.map((message, index) => {
            const showTimestamp = index === 0 || 
              messages[index - 1].timestamp.getDate() !== message.timestamp.getDate();
            
            return (
              <View key={message.id} style={styles.messageWrapper}>
                {showTimestamp && (
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>
                      {message.timestamp.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </Text>
                  </View>
                )}
                <View style={[
                  styles.messageBubble,
                  message.isUser ? styles.userBubble : styles.aiBubble
                ]}>
                  <Text style={message.isUser ? styles.userMessageText : styles.aiMessageText}>
                    {message.text}
                  </Text>
                  <Text style={[
                    styles.timestamp,
                    message.isUser ? styles.userTimestamp : styles.aiTimestamp
                  ]}>
                    {formatTime(message.timestamp)}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask your AI coach anything..."
            placeholderTextColor={theme.colors.grey}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity 
            style={[
              styles.sendButton,
              !inputText.trim() && styles.disabledSendButton
            ]} 
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <SendHorizontal size={24} color={!inputText.trim() ? theme.colors.grey : "white"} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  coachAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary,
  },
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  welcomeTitle: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  welcomeSubtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.subtext,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: theme.spacing.lg,
  },
  messageWrapper: {
    marginBottom: theme.spacing.md,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.md,
  },
  dateText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.subtext,
    backgroundColor: theme.colors.lightGrey,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
  },
  messageBubble: {
    maxWidth: '85%',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.xs,
  },
  userBubble: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    borderBottomRightRadius: theme.spacing.xs,
  },
  aiBubble: {
    backgroundColor: theme.colors.card,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: theme.spacing.xs,
  },
  userMessageText: {
    color: 'white',
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
  },
  aiMessageText: {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
  },
  timestamp: {
    fontSize: theme.fontSize.xs,
    marginTop: theme.spacing.xs,
    alignSelf: 'flex-end',
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  aiTimestamp: {
    color: theme.colors.subtext,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGrey,
    backgroundColor: theme.colors.background,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    paddingTop: theme.spacing.md,
    maxHeight: 100,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
    alignSelf: 'flex-end',
  },
  disabledSendButton: {
    backgroundColor: theme.colors.lightGrey,
  },
});