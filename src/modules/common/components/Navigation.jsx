import { Link } from 'react-router-dom';

const Navigation = ({ user }) => {
  const loggedInLinks = links.filter((link) => {
    if (!user && link.text === 'global feed') {
      return null;
    } else if (user && link.text === 'login') {
      return null;
    } else {
      return link;
    }
  });

  return (
    <nav>
      <ul>
        {loggedInLinks.map((link) => (
          <li key={link.text}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  {
    href: '/',
    text: 'home',
  },
  {
    href: '/login',
    text: 'login',
  },
  {
    href: '/global-feed',
    text: 'global feed',
  },
];

export default Navigation;
