import { MessageReaction } from 'discord.js';
import { Event } from '../event';
import { handsUpIcon } from './render';

export function parseEventFromMessageReaction(messageReaction: MessageReaction, userId: string, clientUserId: string): readonly Event[] {
  console.debug('parseEventFromMessageReaction', messageReaction);

  const events: Event[] = [];

  if (messageReaction.message.author.id !== clientUserId) {
    return events;
  }

  if (messageReaction.emoji.name === handsUpIcon) {
    const spreadsheetIdMatch = messageReaction.message.embeds[0]?.url?.match(/.*docs\.google\.com\/spreadsheets\/d\/([\w\d-]+)\/edit.*/);
    if (spreadsheetIdMatch) {
      events.push({
        type: 'HandsUpButtonPressed',
        spreadsheetId: spreadsheetIdMatch[1],
      });
    }
  }

  return events;
}
