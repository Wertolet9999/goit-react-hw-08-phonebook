import React from 'react';
import { useSelector } from 'react-redux';
import { authToken } from 'Redux/selectors';
import Home from '../Home/Home';
import SearchBar from '../Searchbar/SearchBar';

const Contacts = () => {
  const token = useSelector(authToken);
  return <div>{token ? <SearchBar /> : <Home />}</div>;
};

export default Contacts;
