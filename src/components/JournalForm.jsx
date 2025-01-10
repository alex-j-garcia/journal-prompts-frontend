import FormTextarea from "./FormTextarea";

const JournalForm = ({ data, handleChange, }) => {
  return (
    <div>
      <form>
        {entries.map(({ label, name, }) => (
          <FormTextarea 
            key={name}
            name={name}
            label={label}
            value={data[name]}
            handleChange={handleChange}
          />
        ))}
      </form>
    </div>
  );
};

const entries = [
  {
    name: 'promptOne',
    label: 'Write a factual, unstructured response to the prompt',
  },
  {
    name: 'promptTwo',
    label: 'Reflect on the above in an effort to extract powerful insights',
  }
];

export default JournalForm;
