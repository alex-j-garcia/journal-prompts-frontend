import useForm from "../hooks/useForm";

const JournalForm = () => {
  const {
    value,
    handleChange,
    handleSubmit
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit} className='journalEntry-form'>
        <label>Write a factual, unstructured response to the prompt OR Reflect on the above in an effort to extract powerful insights:
          <textarea 
            name='entry'
            value={value}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JournalForm;
