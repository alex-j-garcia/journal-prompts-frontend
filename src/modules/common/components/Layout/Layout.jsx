import Navigation from '@modules/common/components/Navigation';
import Header from '../Header';

const Layout = ({ user, children, }) => {
  return (
    <div>
      <Header>
        <h1>📖 Journal Prompts</h1>
        <Navigation user={user} />
      </Header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
