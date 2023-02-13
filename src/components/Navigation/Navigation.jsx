import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authToken } from 'Redux/selectors';
import css from '../App/App.module.css';

const Navigation = () => {
  const token = useSelector(authToken);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.LinkActive : css.Navlink)}
      >
        Home
      </NavLink>
      {token ? (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? css.LinkActive : css.Navlink
          }
        >
          {' '}
          Contacts
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? css.LinkActive : css.Navlink
            }
          >
            {' '}
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? css.LinkActive : css.Navlink
            }
          >
            {' '}
            Log in
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
