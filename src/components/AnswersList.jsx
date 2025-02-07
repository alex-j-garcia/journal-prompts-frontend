const AnswersList = ({ answers }) => {
  if (!answers) {
    return null;
  }
  
  return (
    <div className="answersList">
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersList;
