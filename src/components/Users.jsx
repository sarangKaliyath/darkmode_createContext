import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from "../Context/ThemContext";
import {UserData} from './UserData'; 


export function Users({children}) {

    const {theme} = useContext(ThemeContext);

    const UserContainer = styled.div`
      /* border: 1px solid blue; */
      color: ${theme ? "black" : "white"};
      background-color: ${theme ? "#F5F6FA" : "#1F2327"};
      width: 95%;
      height: 100%;
      padding-left: 2%;
    `;
  const Head = styled.div`
      display: flex;
      align-items:center;
        font-size:25px;
    `
    const HeadAlign = styled.div`
      display: flex;
      /* border: 1px solid blue; */
      height: 7%;
      padding:1%;
    `;

    const ButtonAlign = styled.div`
      margin-left: 5%;
      display: flex;
      align-items: end;

    `;
    const Body = styled.div`
      /* border: 1px solid blue; */
      height: 88.5%;
    `;

    const UserCard = styled.div`
      border: 1px solid ${theme ? "#FFFFFF" : "#292E33"};
      box-shadow: 0px 1px 4px ${theme ? "#e5e9f2" : "rgba(0, 0, 0, 0.2)"};
      height: 514px;
      width: 452px;
      left: 123px;
      top: 104px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
    
    const UserHead = styled.div`
      height: 5%;
      width:95%;
      display:flex;
      justify-content: space-between;
      padding:2.5%;
      margin-bottom:5%;
    `;

    const Data = styled.div`
        display: flex;
        flex-direction: column;
        align-items:center;
    `

    return (
      <UserContainer>
        <HeadAlign>
          <Head>My Dashboard</Head>
          <ButtonAlign>{children}</ButtonAlign>
        </HeadAlign>
        <Body>
          <UserCard>
            <UserHead>
              <p>Active Users</p>
              <p>for August 2019</p>
            </UserHead>
            <Data>
              <UserData
                name={"Nurpul Dev"}
                address={"Copenhagen, Denmark"}
                image={"/dummy.jpg"}
                level={15}
                score={4723}
              ></UserData>
              <UserData
                name={"Sandhya"}
                address={"Copenhagen, Denmark"}
                image={"/dummy.jpg"}
                level={11}
                score={2339}
              ></UserData>
              <UserData
                name={"Elon Tusk"}
                address={"Califronia, USA"}
                image={"/dummy.jpg"}
                level={6}
                score={1884}
              ></UserData>
            </Data>
          </UserCard>
        </Body>
      </UserContainer>
    );

}