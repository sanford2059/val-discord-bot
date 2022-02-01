export const filterCommands = (message: string): string | undefined => {
  const firstArg = message.split(' ')[0];
  const secondArg = message.split(' ')[1];

  switch (firstArg) {
    case 'ping':
      return 'ポンぐ';
    case 'morning':
      return 'https://tenor.com/view/boobs-anime-kawaii-hot-anime-girl-bigboobs-gif-21508889';
    case 'ahegao':
      return 'https://tenor.com/view/gif-24723880';
    case 'commands':
      return '```agent info : !agent [agent name]\npatch notes : !patch [patch number]```';
    case 'agent':
      return `https://playvalorant.com/en-us/agents/${secondArg}/`;
    case 'patch':
      let s = secondArg.replace('.', '-');
      return `https://playvalorant.com/en-gb/news/game-updates/valorant-patch-notes-${s}/`;
    default:
      return undefined;
  }
};
