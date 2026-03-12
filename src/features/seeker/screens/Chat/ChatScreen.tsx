import {
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { getStyles } from './ChatScreen.styles';
import { ChevronLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  GiftedChat,
  IMessage,
  InputToolbarProps,
} from 'react-native-gifted-chat';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import { Metrics } from 'theme/metrics';
import { useTheme } from 'common/helperFunctions';
import CustomText from 'common/components/text';
import EmptyChat from 'features/seeker/components/home/EmptyChat';
import renderBubble from 'features/seeker/components/home/Bubble';
import renderMessage from 'features/seeker/components/home/Message';
import MessageBox from 'features/seeker/components/home/MessageBox';

type Props = {
  navigation: SeekerAppNavigationProp<'ChatScreen'>;
};

const ChatScreen = ({ navigation }: Props) => {
  const styles = getStyles();
  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'Hi Jane! Hope you are doing well 😊',
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 2,
      text: 'Hey! I’m doing great — how about you?',
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 3,
      text: 'All good! Are we still on for tomorrow’s session?',
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 4,
      text: 'Yes, absolutely. 10 AM still works for me.',
      createdAt: new Date(Date.now() - 1000 * 60 * 4),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 5,
      text: 'Perfect, I will send over the agenda shortly.',
      createdAt: new Date(Date.now() - 1000 * 60 * 3),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 6,
      text: 'Great, I will review it before we meet.',
      createdAt: new Date(Date.now() - 1000 * 60 * 2),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 7,
      text: 'Also, do you want to cover the onboarding flow?',
      createdAt: new Date(Date.now() - 1000 * 60 * 90),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 8,
      text: 'Yes, that is the main priority for tomorrow.',
      createdAt: new Date(Date.now() - 1000 * 60 * 80),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 9,
      text: 'Awesome. I have a few mockups ready for that.',
      createdAt: new Date(Date.now() - 1000 * 60 * 70),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 10,
      text: 'Nice, share them here when you get a chance.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 11,
      text: 'Sending now. Let me know your thoughts.',
      createdAt: new Date(Date.now() - 1000 * 60 * 50),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
    {
      _id: 12,
      text: 'Looks clean. I like the second variation best.',
      createdAt: new Date(Date.now() - 1000 * 60 * 40),
      user: {
        _id: 1,
        name: 'You',
        avatar: 'https://picsum.photos/id/1005/200/200',
      },
    },
    {
      _id: 13,
      text: 'Great choice. I will finalize that one today.',
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      user: {
        _id: 2,
        name: 'Jane',
        avatar: 'https://picsum.photos/id/1027/200/200',
      },
    },
  ]);

  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const sendMessage = (text: string) => {};

  const renderInputToolbar = useCallback(
    (props: InputToolbarProps<IMessage>) => (
      <MessageBox {...props} onSend={text => sendMessage(text?.[0]?.text)} />
    ),
    [],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={insets.top}
    >
      <View style={styles.subContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={Metrics._24} color={theme.black1} />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://picsum.photos/id/237/30/30' }}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerBox}
          onPress={() => {}}
        >
          <CustomText style={styles.header}>Jane</CustomText>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.flx, { paddingBottom: Math.max(insets.bottom, Metrics._10) }]}
      >
        <GiftedChat
          messages={messages}
          user={{
            _id: 1,
          }}
          messagesContainerStyle={styles.messagesContainerStyle}
          renderInputToolbar={renderInputToolbar}
          renderChatEmpty={EmptyChat}
          renderBubble={renderBubble}
          renderMessage={renderMessage}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
