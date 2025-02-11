import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const {
    formHint,
    formState,
    handleEvent,
  } = useLoginForm();

  return (
    <form onSubmit={handleEvent}>
      <span>{formHint}</span>
      <div>
        <label htmlFor='username'>username:</label>
        <input
          type='text'
          id='username'
          value={formState.username}
          onChange={handleEvent}
        />
      </div>
      <div>
        <label htmlFor='password'>password:</label>
        <input
          type='password'
          id='password'
          value={formState.password}
          onChange={handleEvent}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
