import React from 'react';
import css from './Home.module.css';
import phonebook from '../../image/phonebook.jpeg';

const Home = () => {
  return (
    <div>
      <h1 className={css.title}>
        Welcome! To use the phone book, go through the "Register" procedure and go to the
        "Contacts" section after "LogIn"!
      </h1>
      <img src={phonebook} alt="Phonebook" width="100%" />
    </div>
  );
};

export default Home;
