import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';

const Home = lazy(() => import('pages/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails' /* webpackChunkName: "MoviesDetails" */)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);
const NotFoundView = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "NotFound" */)
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          ></Route>
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundView />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};
