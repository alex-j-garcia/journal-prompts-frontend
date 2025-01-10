import FormTextarea from "./FormTextarea";

const JournalForm = ({ 
  data,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='journalEntry-form'>
        {entries.map(({ label, name, }) => (
          <FormTextarea 
            key={name}
            name={name}
            label={label}
            value={data[name]}
            handleChange={handleChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const entries = [
  {
    name: 'entryOne',
    label: 'Write a factual, unstructured response to the prompt',
  },
  {
    name: 'entryTwo',
    label: 'Reflect on the above in an effort to extract powerful insights',
  }
];

export default JournalForm;
