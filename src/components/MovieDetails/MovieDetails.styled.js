import styled from 'styled-components';

export const ButtonBack = styled.button`
  border: none;

  cursor: pointer;
  padding: 8px 16px;
  margin: 10px;
  border-radius: 4px;
  background-color: #d2dfff;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  transition: cubic-bezier(0.4, 0, 1, 1) 250ms;
  &:hover,
  &:focus {
    color: white;
    background-color: #3d75ff;
    transition: cubic-bezier(0.4, 0, 1, 1) 250ms;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const AddInfo = styled.ul`
  padding-bottom: 20px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  /* display: flex; */
`;
