import Layout from "./Layout";
import LoginForm from "./LoginForm";

const LoginPage = ({ handleLogin }) => {
  return (
    <Layout>
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </Layout>
  );
};

export default LoginPage;
