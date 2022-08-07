import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <div>
      <>
        <h2>
          Page not found go to the <Link to="/">Home</Link>
        </h2>
        <img src="https://i.gifer.com/7VE.gif" alt="Travolta" />
      </>
    </div>
  );
};

export default NotFoundView;
