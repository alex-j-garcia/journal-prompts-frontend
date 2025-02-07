import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = () => {
  const {
    prompt,
    isLoading,
    isError,
    user,
    setUSer,
  } = usePrompt();


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      {prompt.answers && prompt.answers.length
        ? <AnswersList answers={prompt.answers} /> 
        : (
          <>
            <h2>{prompt.content ? prompt.content : ''}</h2>
            <PromptForm prompt={prompt} user={user} setUser={setUSer} />
          </>
        )
      }
    </Layout>
  );
}

export default PromptPage;
