import { getDetailsMovies } from '../../servise/service.js';
import { useState, useEffect } from 'react';
import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  Link,
} from 'react-router-dom';

import {
  InfoWrapper,
  Wrapper,
  ButtonBack,
  AddInfo,
} from './MovieDetails.styled.js';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  //
  const location = useLocation();
  const navigate = useNavigate();
  //

  useEffect(() => {
    getDetailsMovies(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <ButtonBack
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </ButtonBack>
          <Wrapper>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt="poster"
                width="250"
              />
            </div>

            <InfoWrapper>
              <h2>{details.title}</h2>
              <p>Popularity: {details.popularity}</p>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <p>{details.genres.map(item => item.name).join(', ')}</p>
            </InfoWrapper>
          </Wrapper>
          <AddInfo>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </AddInfo>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
