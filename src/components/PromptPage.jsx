import usePrompt from '../hooks/usePrompt';
import Layout from '@modules/common/components/Layout';
import PromptForm from './PromptForm';
import AnswersList from '@modules/common/components/AnswersList';

const PromptPage = ({ user, }) => {
  const {
    prompt,
    isLoading,
    isError,
    triggerRefetch,
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
              triggerRefetch={triggerRefetch}
            />
          </>
        )
      }
    </Layout>
  );
}

export default PromptPage;
