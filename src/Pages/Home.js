import React from 'react'
import { styled } from 'styled-components'
import PangImage from '../assets/ggompang.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  font-size: 50px;
  display : flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border : 5px solid #000;
  border-radius : 8px;
  width : 800px;
  gap : 50px;
  padding : 30px;
`
const Title = styled.div`
  font-size: 40px;
  margin-top : 10px;
`
const LogoImage = styled.div`
  margin-top : 10px;
`
const Desc = styled.div`
  font-size : 25px;
  margin-top : 20px;
`



const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/question')
  }
  return (
    <Wrapper>
      <Header>예비 집사 판별기</Header>
      <Content>
        <Title>나에게 맞는 주인님은 ?</Title>
        <LogoImage>
          <img className='rounded-circle' width={350} height={350} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAeFBMVEX///8CAADCwcLV1NV2dXXg4ODZ2dn8/Pzl5eW6urr39/fQ0NDIyMi2trbk5OTy8vLr6+uQj48rKilEQ0Rta2sSEBGKiYnKyspLS0t/f38YFhajo6NRUE9FRUNkY2I1MzIfHRwwLy+qqak9OzxbWlqbmpp6eXkjIyKmlSX2AAADpUlEQVR4nO3de3eaMBjH8QDlqkBsvfS62fv7f4eDSLW2sXm0KmHn+/lj61jceX4LhJB4VCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE6mnJR6n/Z1aj1aHKeaY5oHjetS/oLp5c23/4ryOkiOWdRR1LPAuA2lrwib1nn7Q1GNEtOFxVVz6GQVHiy9DDpT4Sml28aL4u7evOryLVEPze9/TlvmQfKPaMHfWvaKto+Wy2DzuvaXyWmrPExWTrsaH2XZpoGF+Hw+Mz1f1Xctaj23RYtPXOLh4tUlJzqtXm3R9rp/nFdtrpigEjS9syRbCq/TXpiBL7gQtLSdkF5H64ZKQYnWYcTjE7LR3p6CJ3e7F1u0PaYzPTDddu9u98cWbXr6+n4hNTW6213Yos1OX99vPLc1Zs5mpS2a5xebGR/cM/jKGs3X6ciKOdMid7sHWzTB+NMjabQnW7Sb09f3C5JoaT59t56QL+ep8UDuaNWNNVbr+VxVHsQVrbYO+53luao8iCOabVr8X0SrrfOrjVvrQpcvfoqWzH5OFsw8XK3b+CHa2BGsiTbQXnMnC27PXe1edkaL3MmC5ZmL3c+uaNp1nbUez1/vHnZFexYkG+ZsxLo4980Q55CSC61x10fFYvZootMxCMZ9VCxmjWZ9grHw+o5tjyZMdtVLxWK2aD/PiTe83KnZsERL7c+d3/m3KbrFEi13Rer4/SCqlHmEXmwduhZG83vRp9td2ro/ZcJkHu5kb2s34Lc3paWDiN8r/upjH+rzMrDwdu33/NEwbyr4NIxLz0e/F8WN1XiYffmz06jHksVu20qf10sBu1cdP/N7tf/DqpvWe2ySof/d85v12moz93FVbirps4vJfD5/9fe9FWtFN7F6a2sV39WC7l1bfqvXk8aLiXU/fhe/H2oMLbyXfeX3o2jn7aBog7gDqMSxvG+z7LtoqXgifU7rzAYwRK7VUSg3iAsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsqxB88vxA1aFSWVQ0ETOl4iTVWmmdJvHqaB25vwTCW020OE/KoozDarSIwiRRURJG4ygOzdFc8iVAfipyNdZqHI2VHudKlSZaqdI8rFWYNEcX7n/DV+EiK0dlmo9KHYXjsCijpgMXYaLzUZ42fzOAT1LbKVN1rIokq2KlM6VjvYhVpVWcZUmRxl5/AZNI2z9mxKibXjMf5lS1vdZvUUeSVl3/FHH3MVX1cAcQYND+AcHlHvSJERFaAAAAAElFTkSuQmCC" />
        </LogoImage>
        <Desc>MBTI를 기반으로하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button style={{background : "transparent", color : "#000", border : "1px solid #000", padding : "20px 100px"}} onClick={handleClickButton}>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Home
