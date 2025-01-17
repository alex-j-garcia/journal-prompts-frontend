const FormTextarea = ({ 
  handleChange,
  name,
  value,
  label,
}) => {
  return (
    <label>
      {label}:
      <textarea 
        name={name}
        value={value}
        className='journalEntry-textarea'
        onChange={handleChange}
      />
    </label>
  );
};

export default FormTextarea;
