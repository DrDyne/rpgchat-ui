export const parseCommand(message) {
  // available command types:
  // roll: "!roll 1d4"  "!roll 1d4+1 1d6+2" "!!roll 1d4+1"
  // whisper: "@playername whisper something." 
  // say: "everybody can hear me"
  const isCommand = !!message.match(/^(!?[!@#]\w+)(.*)/) 
  if ( !isCommand ) return null

  const [command, content] = message.match(/^(!?[!@#]\w+)(.*)/) 

  if ( '!roll' === command ) { // dice roll: "!roll 1d4 2d4+2"
    const die = message.match(/\d+d\d+(\+\d+)?/g)
    return { ...message, type: 'roll', die, }
  }

  if ( /^@\w+/.test(command) ) { // whisper: "@player2 hello player2."
    const [to,] = message.match(/^@\w+/) // match(/^@\w+\s$/) to capture as typing
    return { ...message, type: 'whisper', to, }
  }

  //TODO admin commands
  //if ( '/slap' === command ) ...

  return { ...message }
}
