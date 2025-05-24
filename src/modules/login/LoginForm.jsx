import useLoginForm from './useLoginForm';

const LoginForm = ({ handleLogin }) => {
  const {
    login,
    formHint,
    credentials,
    updateCredentials,
  } = useLoginForm(handleLogin);

  return (
    <form onSubmit={login}>
      <span>{formHint}</span>
      <div>
        <label htmlFor='username'>username:</label>
        <input
          id='username'
          type='text'
          onChange={updateCredentials}
          value={credentials.username}
        />
      </div>
      <div>
        <label htmlFor='password'>password:</label>
        <input
          id='password'
          type='password'
          onChange={updateCredentials}
          value={credentials.password}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
