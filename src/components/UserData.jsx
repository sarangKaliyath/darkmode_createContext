import { useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from "../Context/ThemContext";

export function UserData({ name, address, level, score,image }) {
    
  const {theme} = useContext(ThemeContext);
    const Container = styled.div`
      height: 115.5px;
      width: 392px;
      left: 153px;
      top: 190px;
      border-bottom: 1px solid ${theme ? "#EBEDF4" : "#292e33"};
      padding: 4%;
    `;
    
    const Image = styled.img`
      height: 40px;
      width: 40px;
      left: 153px;
      top: 190px;
      border-radius: 50%;
    `;
    const Head = styled.div`
    display:flex;
    `
    const Text = styled.div`
    padding-left:4%;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
    `;

    const Data = styled.div`
      display: flex;
      justify-content: space-between;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      margin-top:5%;
    `;

    return <Container>
        <Head>
        <Image src={image}></Image>
            <Text><div>{name}</div><div>{address}</div></Text>
        </Head>
        <Data>
            <div>Professional Level {level}</div>
            <div>{score} Points</div>
        </Data>
    </Container>

}