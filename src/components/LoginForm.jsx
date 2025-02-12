import useLoginForm from "../hooks/useLoginForm";

const LoginForm = ({ handleLogin }) => {
  const {
    formHint,
    formState,
    handleEvent,
  } = useLoginForm(handleLogin);

  return (
    <form onSubmit={handleEvent}>
      <span>{formHint}</span>
      <div>
        <label htmlFor='username'>username:</label>
        <input
          id='username'
          type='text'
          onChange={handleEvent}
          value={formState.username}
        />
      </div>
      <div>
        <label htmlFor='password'>password:</label>
        <input
          id='password'
          type='password'
          onChange={handleEvent}
          value={formState.password}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
