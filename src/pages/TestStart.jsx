import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from '../components/quizData.jsx'
import Result from "../components/Result.js";

function TestStart() {

  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState(false)
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) {
      setState(true)
      setScore(score + 1);
    } else {
      setState(false)
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const backHandle = () => {
    const backQuestion = currentQuestion - 1;
    setCurrentQuestion(backQuestion);
    if (state === true) {
      setScore(score - 1);
    }
  };
  const closeBtn = () => {
    navigate('/')
  }
  return (
    <div className="mainDiv">
      {showScore ? <Result score={score} question={questions.length} />
        : (
          <>
            <Box className="textHead">
              <span className="countContainer">
                <h1 style={{ color: "rgb(75, 75, 75)" }}>
                  {currentQuestion + 1}
                </h1>
                <h1 className="topCount">/{questions.length}</h1>
              </span>
              <button className="closeBtn" onClick={closeBtn}>
                <CloseIcon bgSize={30} />
              </button>
            </Box>
            <Box className="questionAndAnswers">
              <Box>
                <Box className="question-section">
                  <Image
                    className="imgs"
                    boxSize=""
                    objectFit="cover"
                    src={questions[currentQuestion].questionImage[0]}
                    alt="img"
                  />
                </Box>
                <Box className="questionText">
                  <span className="textContainer">
                    <h1 className="text">
                      {currentQuestion + 1}.Which shape should be in the rightmost
                      cell with a question mark?
                    </h1>
                  </span>
                </Box>
                <Box>
                  {questions[currentQuestion].answerOptions.map(
                    (option, index) => (
                      <button
                        className="btn1"
                        value={option.answerImage}
                        onClick={() => handleClick(option.isCorrect)}
                      >
                        <Image
                          boxSize=""
                          objectFit="cover"
                          src={option.answerImage}
                          alt="img"
                        />
                      </button>
                    )
                  )}
                </Box>
                {currentQuestion !== 0 ?
                  <Button
                    className="backBnt"
                    colorScheme="blackAlpha"
                    mt={6}
                    mr={12}
                    w={"130px"}
                    h={"12"}
                    onClick={backHandle}
                  >
                    <ArrowBackIcon fontSize={"30px"} colorScheme="#fff" />
                  </Button> : ""}
              </Box>
            </Box>
          </>
        )}
    </div>
  );
}

export default TestStart;
