import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../redux/store';

const Header = ({ addFilms, setIsOpen }) => {
  const [ newTitle, setNewTitle ] = useState('');
  const [ newStars, setNewStars ] = useState('');
  const [ newReleaseYear, setNewReleaseYear ] = useState('');
  const [ newFormat, setNewFormat ] = useState('');

  const hanleSubmit = (event) => {
    event.preventDefault();
    if (newTitle.length > 1 && newStars.length > 1 && newReleaseYear.length > 1 ) {
      addFilms(newTitle, newStars, newReleaseYear, newFormat);
      setNewTitle('');
      setNewStars('');
      setNewReleaseYear('');
      setNewFormat('');
    }
      
  }

  const handleClose = () => {
    setIsOpen(false); 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "newTitle") {
      setNewTitle(value);
    } if (name === "newStars") {
      setNewStars(value);
    } if (name === "newReleaseYear") {
      setNewReleaseYear(value)
    } if (name === "newFormat") {
      setNewFormat(value)
    }
  }
    return (
      <div className="box">
        <form 
          onSubmit={hanleSubmit} 
          className="add__new__films"
        >
          <p className="films-list">
            enter title
            <input
              type="text"
              value={newTitle}
              placeholder="What needs title?"
              name="newTitle"
              onChange={handleChange}
          />
          </p>
          <p>enter stars:
          <input
            type="text"
            value={newStars}
            placeholder="What stars?"
            name="newStars"
            onChange={handleChange}
          />
          </p>
          <p>enter yers:
          <input
            type="text"
            value={newReleaseYear}
            placeholder="What releas eyear?"
            name="newReleaseYear"
            onChange={handleChange}
          />
          </p>
          <p> enter format:
            <select className="add__new__films_select" onChange={handleChange}  name="newFormat" value={newFormat}>
              <option>DVD</option>
              <option>VHS</option>
              <option>Blue-Ray</option>
            </select>
          </p>
          
          <button
            type="submit"
            className="buttonHide"
          >
          submit
          </button>
          <button
            type="submit"
            className="buttonClose"
            onClick={handleClose}
          >
          X
          </button>
        </form>
      </div>
    );
}

const mapActions = dispatch => ({
  addFilms: (newTitle, newStars, newReleaseYear, newFormat) => dispatch(actions.addFilms(newTitle, newStars, newReleaseYear, newFormat))
})

export default connect(null, mapActions)(Header);

Header.propTypes = {
  onSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};