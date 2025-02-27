const AnswersList = ({ answers }) => {
  if (!answers) {
    return null;
  }
  
  return (
    <div className='answersList'>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            {answer.answer}
            <span className='answersList-author'>
              {answer.user.username}
            </span>
          </li>
        ))}
      </ul>
      <p>Come back tomorrow for a new prompt!</p>
    </div>
  );
};

export default AnswersList;
