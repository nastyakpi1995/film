import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../redux/store';

const FilmItem = ({ film, deleteFilm }) => {
  
  const handleDelete = (filmId) => {
    deleteFilm(filmId);
  }

  return (
    <li>
      <div className="box-inform">
        <h1>{film.title}</h1>
        <div className="divider" />
        <p>{film.releaseyear}</p>
        <p>{film.format}</p>
        <p>{film.stars}</p>
        <button
          onClick={() => handleDelete(film.id)}
          type="button"
          className="destroy"
        />
      </div>
   </li>
  )
}

const mapActions = dispath => ({
  deleteFilm: filmId => dispath(actions.delete_movie(filmId)),
});

export default connect(null, mapActions)(FilmItem);

FilmItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  deleteFilm: PropTypes.func.isRequired,
};
