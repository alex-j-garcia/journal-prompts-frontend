const JournalPrompt = ({ prompt }) => {
  if (!prompt) {
    return null;
  }
  
  return (
    <div className="journalEntry-prompt">
      <h2>[{prompt.content}]</h2>
    </div>
  );
};

export default JournalPrompt;
