import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = () => {
  const { prompt, isLoading, isError } = usePrompt();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      {prompt.answers && prompt.answers.length
        ? <AnswersList answers={prompt.answers} /> 
        : (
          <>
            <h2>{prompt.content}</h2>
            <PromptForm />
          </>
        )
      }
    </Layout>
  );
}

export default PromptPage;
