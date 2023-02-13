import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../Redux/filterSlice';
import { getFilter } from 'Redux/selectors';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };

  return (
    <Box className={css.input}>
      <TextField
        id="outlined-textarea"
        type="text"
        label="Find contacts by name"
        name="filter"
        onChange={changeFilter}
        value={filter}
        multiline
      />
    </Box>
  );
};

export default Filter;

Filter.protoTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
