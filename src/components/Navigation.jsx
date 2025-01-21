const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
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
];


export default Navigation;
