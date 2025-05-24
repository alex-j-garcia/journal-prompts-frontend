import usePromptForm from './usePromptForm';

const PromptForm = ({
  user,
  prompt,
  triggerRefetch,
}) => {
  const {
    answer,
    wordCount,
    updateAnswer,
    submitAnswer,
  } = usePromptForm(user, prompt, triggerRefetch);

  return (
    <div>
      <form onSubmit={submitAnswer} className='journalEntry-form'>
        <label>Write a response to the prompt, then reflect on the answer to extract powerful insights:
          <textarea name='entry' value={answer} onChange={updateAnswer}>
          </textarea>
        </label>

        <div className='journalEntry-wordCount'>
          <span className={wordCount > 150 ? 'journalEntry-wordCount--isError' : ''}>
            {`${wordCount}/150`}
          </span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PromptForm;
