const JournalPrompt = ({ prompt }) => {
  if (!prompt) {
    return null;
  }
  
  return <h2>[{prompt.content}]</h2>
};

export default JournalPrompt;
