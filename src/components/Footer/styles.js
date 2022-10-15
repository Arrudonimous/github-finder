import styled from 'styled-components';

export const Container = styled.footer`

  display: flex;
  flex-direction: row;
  letter-spacing: 0.055em;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-top: 33px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px 41px;
  border-radius: 8px;
  @media(max-width: 500px){
    padding: 16px 20px;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style-type: none;
    justify-content: space-between;
  }
  .title{
    font-size: 16px;
    font-weight: 400;
  }

`;
