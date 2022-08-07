import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: #d2dfff;
  /* border: 1px solid #3d75ff; */
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  /* box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%); */
  cursor: pointer;
  &.active {
    color: white;
    background-color: #3d75ff;
    transition: cubic-bezier(0.4, 0, 1, 1) 250ms;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const Nav = styled.nav`
  margin-bottom: 10px;
  padding: 8px;
  /* border-bottom: 3px solid #3d75ff; */
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
`;
