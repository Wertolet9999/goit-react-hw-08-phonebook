import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authData } from 'Redux/selectors';

const PublicRoute = () => {
  const location = useLocation();

  const data = useSelector(authData);
  return data ? (
    <Navigate to={location.state?.authLocation ?? '/contacts'} />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
