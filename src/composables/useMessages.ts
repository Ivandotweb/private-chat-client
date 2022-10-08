import { Message } from '@/types/Message';
import { nanoid } from 'nanoid';
import { ref } from 'vue';

export const useMessages = () => {
  const newMessage = ref('');
  const messages = ref<Message[]>([
    {
      id: 0,
      text: 'Hello!',
      fromMe: true,
      timeSent: Date.now(),
    },
    {
      id: 1,
      text: 'Hello!',
      fromMe: false,
      timeSent: Date.now(),
    },
    {
      id: 2,
      text: 'How are you?',
      fromMe: true,
      timeSent: Date.now(),
    },
  ]);

  const send = () => {
    if (newMessage.value.length === 0) return;

    const message: Message = {
      id: nanoid(),
      text: newMessage.value.trim(),
      timeSent: Date.now(),
    };
    messages.value.push(message);
    newMessage.value = '';
  };

  return {
    newMessage,
    send,
    messages,
  };
};
