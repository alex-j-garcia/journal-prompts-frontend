import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = () => {
  const {
    prompt,
    setPrompt,
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
      <h2>{prompt.content ? prompt.content : ''}</h2>
      {prompt.answers && prompt.answers.length
        ? <AnswersList answers={prompt.answers} /> 
        : (
          <>
            <PromptForm
              prompt={prompt}
              setPrompt={setPrompt}
              user={user}
              setUser={setUSer}
            />
          </>
        )
      }
    </Layout>
  );
}

export default PromptPage;
