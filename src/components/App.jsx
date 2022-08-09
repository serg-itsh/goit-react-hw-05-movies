import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';
// import { MovieDetails, Outlet } from 'react-router-dom';

const Home = lazy(() => import('pages/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "MoviesDetails" */
  )
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
      {/* <Navigation /> */}
      {/* <Outlet /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              {' '}
              <Navigation />{' '}
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                {' '}
                <Home />{' '}
              </Suspense>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                {' '}
                <Movies />
              </Suspense>
            }
          ></Route>

          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />{' '}
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  {' '}
                  <Cast />{' '}
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
              <Suspense fallback={<Loader />}>{<NotFoundView />}</Suspense>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

//
//  return (
//    <div>
//      <Navigation />

//      <Routes>
//        <Route
//          index
//          element={
//            <Suspense fallback={<Loader />}>
//              {' '}
//              <Home />{' '}
//            </Suspense>
//          }
//        ></Route>
//        <Route
//          path="/movies"
//          element={
//            <Suspense fallback={<Loader />}>
//              {' '}
//              <Movies />
//            </Suspense>
//          }
//        ></Route>

//        <Route
//          path="/movies/:movieId"
//          element={
//            <Suspense fallback={<Loader />}>
//              <MovieDetails />{' '}
//            </Suspense>
//          }
//        >
//          <Route
//            path="cast"
//            element={
//              <Suspense fallback={<Loader />}>
//                {' '}
//                <Cast />{' '}
//              </Suspense>
//            }
//          ></Route>
//          <Route
//            path="reviews"
//            element={
//              <Suspense fallback={<Loader />}>
//                <Reviews />
//              </Suspense>
//            }
//          ></Route>
//        </Route>

//        <Route
//          path="*"
//          element={<Suspense fallback={<Loader />}>{<NotFoundView />}</Suspense>}
//        ></Route>
//      </Routes>
//      <ToastContainer />
//    </div>
//  );

// export const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Navigation />}>
//           <Route index element={<Home />} />
//           <Route path="movies" element={<Movies />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };
