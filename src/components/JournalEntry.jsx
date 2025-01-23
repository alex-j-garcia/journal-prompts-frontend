import usePrompt from '../hooks/usePrompt';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";

const JournalEntry = ({ handleNotificationChange }) => {
  const { prompt, isLoading, isError } = usePrompt();

  return (
    <div className='journalEntry'>
      <JournalPrompt prompt={prompt} />
      <JournalForm />
    </div>
  );
}

export default JournalEntry;
