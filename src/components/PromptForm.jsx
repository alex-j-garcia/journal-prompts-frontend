import useForm from '../hooks/useForm';

const PromptForm = () => {
  const {
    value,
    wordCount,
    handleChange,
    handleSubmit,
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit} className='journalEntry-form'>
        <label>Write a factual, unstructured response to the prompt OR Reflect on the above in an effort to extract powerful insights:
          <textarea name='entry' value={value} onChange={handleChange}>
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
