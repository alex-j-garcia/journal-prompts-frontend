import Layout from '@modules/common/components/Layout';
import LoginForm from './components/LoginForm';

const Login = ({ handleLogin }) => {
  return (
    <Layout>
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </Layout>
  );
};

export default Login;
