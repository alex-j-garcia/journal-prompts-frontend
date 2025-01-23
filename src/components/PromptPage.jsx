import usePrompt from '../hooks/usePrompt';
import Layout from './Layout';
import PromptForm from "./PromptForm";
import AnswersList from "./AnswersList";

const PromptPage = () => {
  const { prompt, isLoading, isError } = usePrompt();

  return (
    <Layout>
      <h2>{prompt.content}</h2>
      <PromptForm />
      <AnswersList answers={prompt.answers} />
    </Layout>
  );
}

export default PromptPage;
