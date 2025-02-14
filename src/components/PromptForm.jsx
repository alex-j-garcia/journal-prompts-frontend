import usePromptForm from '../hooks/usePromptForm';

const PromptForm = ({ prompt, triggerRefetch, user, setUser }) => {
  const {
    answer,
    wordCount,
    handleChange,
    handleSubmit,
  } = usePromptForm(prompt, triggerRefetch, user, setUser);

  return (
    <div>
      <form onSubmit={handleSubmit} className='journalEntry-form'>
        <label>Write a factual, unstructured response to the prompt OR Reflect on the above in an effort to extract powerful insights:
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
