import { CastItem } from './CastItem';
import { getCastMovies } from 'servise/service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastMovies(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <>
      {
        <ul>
          {cast.length &&
            cast.map(item => (
              <CastItem
                key={item.id}
                name={item.name}
                character={item.character}
                img={item.profile_path}
              ></CastItem>
            ))}
        </ul>
      }
    </>
  );
};
export default Cast;
