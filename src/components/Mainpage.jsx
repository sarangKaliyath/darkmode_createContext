import styled from 'styled-components';

export function Mainpage({ children }) {
    

    const Container = styled.div`
      /* border: 1px solid black; */
      width: 99vw;
      height: 99vh;
      display: flex;
    `;
    
    return <Container>
        {children}
    </Container>

}