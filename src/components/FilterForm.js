/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setSearchProps } from './../redux/store';

const FilterForm = ({ setSearch }) => {
  const handleSearch = (someType) => {
    const search = someType.target.value;
    setSearch(search);
  }
  return (
      <input
        type="text"
        className="search_input"
        placeholder="Search for"
        onChange={handleSearch}
      />
  );
};


const getData = state => ({
  // films: state.films,
  // currentSearch: getSearchText(state),
  // currentSProp: getSearchProps(state),
});

const getMethods = dispatch => ({
  setSearch: value => dispatch(setSearchProps(value)),
});

export default connect(
  getData,
  getMethods,
)(FilterForm);