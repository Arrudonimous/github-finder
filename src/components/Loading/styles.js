import styled, { keyframes } from 'styled-components';

// Define a animação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

// Estilo do componente Spinner
export const SpinnerContainer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;
