// import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSerchMovies } from 'servise/service';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchFilm, setSearchFilm] = useState([]);

  const location = useLocation();

  const onSubmit = evt => {
    evt.preventDefault();
    if (evt.target.query.value === '') {
      toast.error('Please add any text');
      return;
    }
    setSerachParams({ query: evt.target.query.value });
    evt.target.query.value = '';
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    getSerchMovies(searchParams.get('query')).then(setSearchFilm);
  }, [query, searchParams, setSearchFilm]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <hr />

      <ul>
        {searchFilm &&
          searchFilm.map(el => {
            return (
              <li key={el.id}>
                <Link state={{ from: location }} to={`/movies/${el.id}`}>
                  {el.title || el.original_name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
