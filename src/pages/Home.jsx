import { useState, useEffect } from 'react';
import { getPoPMovies } from '../servise/service.js';
import { Link } from 'react-router-dom';
import { List } from './Home.styled.js';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = () => {
      getPoPMovies().then(data => setFilms(data.results));
    };
    getFilms();
  }, []);

  return (
    <>
      <div>
        <h2>Trending today</h2>
        {films.map(({ id, title, original_name }) => (
          <List key={id}>
            <Link to={`/movies/${id}`}>{title || original_name}</Link>
          </List>
        ))}
      </div>
    </>
  );
};

export default Home;
