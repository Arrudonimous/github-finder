import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  padding: 41px 38px;
  padding-bottom: 24px;
  border-radius: 8px;
  flex-direction: row;


  
`;

export const ContentContainer = styled.div`
  display: flex;
  @media(max-width: 500px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 114px;
    height: 114px;
    border-radius: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 49px;
  letter-spacing: 0.055em;
  @media(max-width: 500px){
    margin-left: 0;
    margin-top: 31px;
  }

  h1{
    font-size: 28px;
  }

  small{
    margin-top: 8px;
    margin-bottom: 30px;
    font-style: italic;
    color: #c9c9c9;
    font-size: 14px;
  }

  span{
    font-size: 16px;
  }

`;
