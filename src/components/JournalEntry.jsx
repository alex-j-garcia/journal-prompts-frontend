import { useState, useEffect, } from 'react';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";
import noteService from '../services/prompts';
import entryService from '../services/entries';

const JournalEntry = ({ handleNotificationChange }) => {
  const [todaysPrompt, setTodaysPrompt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    entryOne: '',
    entryTwo: '',
  });

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

  const onFormChange = ({ target }) => {
    setFormData({ 
      ...formData, 
      [target.name]: target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    entryService
      .addEntry({
        ...formData,
        prompt: todaysPrompt,
      })
      .then((response) => {
        handleNotificationChange(`Successfully created ${response.id}`)
      })
      .catch((error) => {
        handleNotificationChange(`There's been some error: ${error.name}`);
      })
      .finally(() => {
        setTimeout(() => {
          handleNotificationChange(null)
        }, 5000);
      });

    setFormData({
      entryOne: '',
      entryTwo: '',
    });
  };

  return (
    <div className='journalEntry'>
      <JournalPrompt prompt={todaysPrompt} />
      <JournalForm 
        data={formData}
        handleChange={onFormChange}
        handleSubmit={onFormSubmit}
      />
    </div>
  );
}

export default JournalEntry;
