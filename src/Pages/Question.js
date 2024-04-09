import React, {useState} from 'react'
import { styled } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar , Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`
const Title = styled.div`
  font-size : 30px;
  text-align : center ;
`
const ButtonGroup = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  gap : 20px;
`

const Question = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id : "EI", score : 0 },
    { id : "SN", score : 0 },
    { id : "TF", score : 0 },
    { id : "JP", score : 0 },
  ]);
  const handelClickButton = (no, type) => {
    console.log(questionNum);
      const newScore = totalScore.map((s) => s.id === type ? {id : s.id, score: s.score + no} : s)
      setTotalScore(newScore)
      console.log(totalScore);
      if(questionNum >= QuestionData.length-1){
        const mbti = newScore.reduce((acc,curr) => acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),"")
        navigate({
          pathname:`/result`,
          search: `?${createSearchParams({
            mbti : mbti,
          })}`
        })
      }
    // if(type === "EI") {
    //   const addScore = totalScore[0].score + no
    //   const newObject = {id : "EI", score : addScore}
    //   //새객체 생성
    //   totalScore.splice(0, 1, newObject)
    //   //splice 활용 해서 새객체로 바꿈
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no
    //   const newObject = {id : "SN", score : addScore}
    //   totalScore.splice(1, 1, newObject)
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no
    //   const newObject = {id : "TF", score : addScore}
    //   totalScore.splice(2, 1, newObject)
    // } else {
    //   const addScore = totalScore[3].score + no
    //   const newObject = {id : "JP", score : addScore}
    //   totalScore.splice(3, 1, newObject)
    // }
    setQuestionNum(questionNum+1)
  }
  // const handelClickButtonB = (no, type) => {
  //   if(type === "EI") {
  //     const addScore = totalScore[0].score + no
  //     const newObject = {id : "EI", score : addScore}
  //     //새객체 생성
  //     totalScore.splice(0, 1, newObject)
  //     //splice 활용 해서 새객체로 바꿈
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no
  //     const newObject = {id : "SN", score : addScore}
  //     totalScore.splice(1, 1, newObject)
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no
  //     const newObject = {id : "TF", score : addScore}
  //     totalScore.splice(2, 1, newObject)
  //   } else {
  //     const addScore = totalScore[3].score + no
  //     const newObject = {id : "JP", score : addScore}
  //     totalScore.splice(3, 1, newObject)
  //   }
  //   setQuestionNum(questionNum+1)
  // }
  // console.log(totalScore)
  return (
    <Wrapper>
      <ProgressBar style={{marginTop : "20px"}} striped variant='danger' now={questionNum / QuestionData.length * 100} />
      <Title>{QuestionData[questionNum].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handelClickButton(1 , QuestionData[questionNum].type)} style={{width : "40%", minHeight : "200px", fontSize : "15px"}}>{QuestionData[questionNum].answera}</Button>
        <Button onClick={() => handelClickButton(0 , QuestionData[questionNum].type)} style={{width : "40%", minHeight : "200px", fontSize : "15px"}} >{QuestionData[questionNum].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question
