
import React from 'react';
import { connect } from 'react-redux';
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

const getMethods = dispatch => ({
  setSearch: value => dispatch(setSearchProps(value)),
});

export default connect(
  null,
  getMethods,
)(FilterForm);