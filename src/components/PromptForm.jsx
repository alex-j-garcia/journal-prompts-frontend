import usePromptForm from '../hooks/usePromptForm';

const PromptForm = ({
  user,
  prompt,
  handleAnon,
  triggerRefetch,
}) => {
  const {
    answer,
    wordCount,
    handleChange,
    handleSubmit,
  } = usePromptForm(user, prompt, handleAnon, triggerRefetch);

  return (
    <div>
      <form onSubmit={handleSubmit} className='journalEntry-form'>
        <label>Write a response to the prompt, then reflect on the answer to extract powerful insights:
          <textarea name='entry' value={answer} onChange={handleChange}>
          </textarea>
        </label>

        <div className='journalEntry-wordCount'>
          {`${wordCount}/1500`}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PromptForm;
