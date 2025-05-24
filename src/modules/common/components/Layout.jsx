import Navigation from '@modules/common/components/Navigation';

const Layout = ({ user, children, }) => {
  return (
    <div>
      <header>
        <h1>📖 Journal Prompts</h1>
        <Navigation user={user} />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
