import React, { useState } from 'react';
import { connect } from 'react-redux';
import FilterForm from './FilterForm';

import FilmItem from './FilmItem';
import Header from './Header';

const FilmsList = ({ films }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleAddFilm = () => {
    setIsOpen(true); 
  }
    return (
      <section className="main">
        <div className="container">
          <FilterForm />
          {
            isOpen ? <Header setIsOpen={setIsOpen} /> : ''
          }
          <button type="button" 
            onClick={handleAddFilm}
          >
            Add film
          </button>
        </div>
        <ul className="films-list">
          {
            films.map(film => (
              <FilmItem
                key={film.id}
                film={film}
              />
            ))
          }
        </ul>
      </section>
    );
  }

const mapState = (state) => ({
    films: state.films,
})

export default connect(mapState)(FilmsList);
