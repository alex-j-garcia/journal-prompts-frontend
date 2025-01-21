import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>📖 Journal Prompts</h1>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
