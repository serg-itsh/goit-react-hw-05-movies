import { PropTypes } from 'prop-types';

export const CastItem = ({ name, character, img }) => {
  return (
    <>
      <li>
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/w500${img}`
              : 'https://e7.pngegg.com/pngimages/814/922/png-clipart-inside-out-sadness-http-404-error-message-web-browser-computer-servers-pixar-miscellaneous-pixar.png'
          }
          alt=""
          width="100"
        />
        <p>{name}</p>
        <p>{character}</p>
      </li>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  }),
};
