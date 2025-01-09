import { useState, useEffect, } from 'react';
import getAll from './services/prompts';
import Badge from './components/Badge';
import './App.css'

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    getAll().then((prompts) => setPrompts(prompts));
  }, []);

  return (
    <>
      <h1>Hello, World!</h1>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt.id}>
            {prompt.content} <Badge tag={prompt.tag} />
          </li>
        ))}
      </ul>
    </>

  );
}

export default App
