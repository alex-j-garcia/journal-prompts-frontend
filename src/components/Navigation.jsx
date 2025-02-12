import {
  Link,
} from 'react-router-dom';

const Navigation = ({ user }) => {
  const loggedInLinks = links.filter((link) => (
    user && link.text === 'login'
      ? null
      : link
  ));

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
];

export default Navigation;
