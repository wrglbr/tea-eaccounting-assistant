import Command from './data/Command';
import InvalidCommand from './data/InvalidCommand';

type Event = Pinged | ImagePosted | HandsUpButtonPressed | CommandIssued;

interface Pinged {
  readonly type: 'Pinged';
}

interface ImagePosted {
  readonly type: 'ImagePosted';
  readonly urls: readonly string[];
  readonly userName: string;
}

interface HandsUpButtonPressed {
  readonly type: 'HandsUpButtonPressed';
  readonly spreadsheetId: string;
}

interface CommandIssued {
  readonly type: 'CommandIssued';
  readonly command: Command | InvalidCommand;
}

export default Event;
