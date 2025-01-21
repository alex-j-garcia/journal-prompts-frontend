import { useState, useEffect, } from 'react';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";
import noteService from '../services/prompts';

const JournalEntry = ({ handleNotificationChange }) => {
  const [todaysPrompt, setTodaysPrompt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getTodaysPrompt = async () => {
    setIsLoading(true);

    try {
      const response = await noteService.getTodaysPrompt();
      setTodaysPrompt(response.data);
    } catch (exception) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodaysPrompt();
  }, []);

  return (
    <div className='journalEntry'>
      <JournalPrompt prompt={todaysPrompt} />
      <JournalForm />
    </div>
  );
}

export default JournalEntry;
