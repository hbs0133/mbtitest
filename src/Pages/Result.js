import React from 'react'
import { styled } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import { useSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`
const Header = styled.div`
  font-size: 40px;
  display : flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  font-size: 30px;
  margin-top : 10px;
`
const LogoImage = styled.div`
  margin-top : 10px;
`
const Desc = styled.div`
  font-size : 20px;
  margin-top : 20px;
`



const Home = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti')
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/')
  }
  return (
    <Wrapper>
      <Header>예비 집사 판별기📟</Header>
      <Content>
        <Title>결과 보기</Title>
        <LogoImage>
          <img className='rounded-circle' width={350} height={350} src={ResultData.find((el) => el.best == mbti ).image} />
        </LogoImage>
        <Desc>예비집사님과 찰떡 궁합인 고양이는 ? {ResultData.find((el) => el.best == mbti ).name} <br /> {ResultData.find((el) => el.best == mbti ).desc}</Desc>
        <Button onClick={handleClickButton}>다시하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Home
