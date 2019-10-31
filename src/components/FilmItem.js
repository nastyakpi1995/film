import React from 'react';
import PropTypes from 'prop-types';

const FilmItem = ({ film, deleteFilm }) => (
  <li>
    <div>
      <h1>{film.title}</h1>
      <p>{film.releaseyear}</p>
      <p>{film.format}</p>
      <p>{film.stars}</p>
      <button
        onClick={() => deleteFilm(film.id)}
        type="button"
        className="destroy"
      />
    </div>
  </li>
);

FilmItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default FilmItem;
