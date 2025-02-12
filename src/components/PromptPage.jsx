import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = ({ userToken }) => {
  const {
    prompt,
    triggerRefetch,
    isLoading,
    isError,
    user,
    setUSer,
  } = usePrompt();


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout user={userToken} >
      <h2>{prompt.content ? prompt.content : ''}</h2>
      {prompt.answers && prompt.answers.length
        ? <AnswersList answers={prompt.answers} /> 
        : (
          <>
            <PromptForm
              prompt={prompt}
              triggerRefetch={triggerRefetch}
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
