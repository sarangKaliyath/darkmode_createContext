import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemContext';

export function Sidebar({children}) {

    const { theme } = useContext(ThemeContext);

    const Table = styled.div`
        /* border:1px solid red; */
        background-color: ${theme? "white": "#16191C"};
        width:5%;
        height:100%;
        display: flex;
        flex-direction:column;
        justify-content:space-between;
    `

    const Profile = styled.div`
      /* border: 1px solid red; */
      height: 10%;
      display: flex;
      justify-content:center;
      align-items: center;
    `;
    const Icons = styled.div`
      /* border: 1px solid red; */
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items:center;   
    `;

    const Image = styled.img`
      width: 60%;
      height: 100%;
      padding-bottom: 10px;
    `;
  const Box = styled.div`
    padding-bottom: 10px;
      border-bottom: 1px solid ${theme ? "#E8F0F8" : "#2C3135"};
      width: 70%;
      height: 7%;
      display: flex;
      justify-content: center;
      margin-bottom: 25%;
    `;
  const Dummy = styled.img`
    width: 70%;
    border-radius: 50%;
  `
    
    return (
      <Table>
        <Profile>
          <Dummy src="/dummy.jpg"></Dummy>
        </Profile>
        <Icons>
          <Box>
            <Image src="/stats.png" alt="" />
          </Box>
          <Box>
            <Image src="/map.png" alt="" />
          </Box>
          <Box>
            <Image src="/shopping.png" alt="" />
          </Box>
          <Box>
            <Image src="/email.png" alt="" />
          </Box>
          <Box>
            <Image src="/file.png" alt="" />
          </Box>
          <Box>
            <Image src="/setting.png" alt="" />
          </Box>
        </Icons>
      </Table>
    ); 

}