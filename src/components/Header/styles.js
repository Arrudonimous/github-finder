import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h1{
    font-size:  28px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
  }

  span{
    font-size: 17px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 400;
    margin-right: 8px;
  }

  button{
    background-color: transparent;
    display: flex;
    border: none;
    align-items: center;
    text-transform: uppercase;
    transition: transform, opacity 0.2s ease-in;

    &:hover{
      opacity: 0.8;
      transform: scale(1.01)
    }
  }

`;

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  margin-top: 25px;
  margin-bottom: 24px;
  justify-content: space-between;

  input{
    font-size: 16px;
    color: ${({ theme }) => theme.colors.font};
    width: 84%;
    background-color: transparent;
    border: none;  
    outline: 0;  

    &::placeholder{
      color: #BBBBBB;
    }
  }

  button{
    background-color:  ${({ theme }) => theme.colors.button};
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: #ffffff;
    width: 15%;
    padding: 5px 20px;
    transition: transform 0.2s ease-in;
    @media(max-width: 500px){
      padding: 5px 10px;
      font-size: 12px;
    }

    &:hover{
      transform: scale(1.03);
    }
  }
`;
