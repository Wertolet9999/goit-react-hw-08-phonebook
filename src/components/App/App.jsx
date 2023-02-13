import { Route, Routes } from 'react-router-dom';
import css from '../App/App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataThunk } from 'Redux/auth/auth.thunk';
import PublicRoute from 'components/PublicRoute/PablicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Navigation from 'components/Navigation/Navigation';
import { lazy, Suspense, useEffect } from 'react';

const Home = lazy(() => import('../../page/Home/Home'));
const Register = lazy(() => import('../../page/Register/Register'));
const Login = lazy(() => import('../../page/Login/Login'));
const Contacts = lazy(() => import('../../page/Contacts/Contacts'));
const PageNotFound404 = lazy(() =>
  import('../../page/PageNotFound/PageNotFound404')
);

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    if (!token) return;

    dispatch(getUserDataThunk());
  }, [token, dispatch]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <header className={css.Header}>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};
