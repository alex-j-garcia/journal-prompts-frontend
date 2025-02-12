import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = ({ user, setUser }) => {
  const {
    prompt,
    triggerRefetch,
    isLoading,
    isError,
  } = usePrompt(user);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout user={user} >
      <h2>{prompt.content ? prompt.content : ''}</h2>
      {prompt.answers && prompt.answers.length
        ? <AnswersList answers={prompt.answers} /> 
        : (
          <>
            <PromptForm
              user={user}
              prompt={prompt}
              setUser={setUser}
              triggerRefetch={triggerRefetch}
            />
          </>
        )
      }
    </Layout>
  );
}

export default PromptPage;
