import React, { useState } from 'react';

const questions = [
  {
    question: "What is React?",
    options: ['Framework', 'Library'],
    answer: 'Library',
  },
  {
    question: "Who maintains React?",
    options: ['Google', 'Facebook'],
    answer: 'Facebook',
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(null);
    }
  };

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      {isFinished ? (
        <h2>
          Quiz Finished! Your Score: {score}/{questions.length}
        </h2>
      ) : (
        <>
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option)}
              style={{
                backgroundColor: option === currentAnswer ? '#cce7ff' : '',
              }}
            >
              {option}
            </button>
          ))}
          <br />
          <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentAnswer === null}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </>
  );
}

export default Quiz;
