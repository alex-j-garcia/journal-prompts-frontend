import Navigation from "./Navigation";

const Layout = ({ userToken, children, }) => {
  return (
    <div>
      <header>
        <h1>📖 Journal Prompts</h1>
        <Navigation userToken={userToken} />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
