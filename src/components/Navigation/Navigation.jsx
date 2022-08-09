import { Link, List, Nav } from './Naigation.styled.js';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </Nav>
      <Outlet />
    </>
  );
};
