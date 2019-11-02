import React from 'react';

import FilmItem from './FilmItem';
import films from '../films';
import Header from './Header';

class FilmsList extends React.Component {
  state = {
    films,
    filmsHidden: films,
    isOpen: false,
  }

  componentWillMount() {
    if (localStorage.getItem('films')) {
      this.setState({
        films: JSON.parse(localStorage.getItem('films')),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('films',
      JSON.stringify(this.state.films));
  }

  addFilms = (
    title, stars, releaseyear, format
  ) => {
    this.setState((prevState) => {
      const addFilms = [...prevState.films,
        {
          id: Date.now(),
          title,
          stars,
          releaseyear,
          format,
        },
      ];
      this.setState({
        films: addFilms,
      });
    });
  }

  deleteFilm = (id) => {
    this.setState(prevState => ({
      films: prevState.films.filter(film => film.id !== id),
    }));
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  }

  handleAddFilms = () => {
    this.setState({
      isOpen: true,
    });
  }

  handleSearch = (someType) => {
    const search = someType.target.value;

    this.setState(prevState => ({
      films: prevState.filmsHidden.filter(
        world => [world.title, world.stars]
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    }));
  }

  render() {
    const { films, isOpen } = this.state;
    return (
      <section className="main">
        <div className="container">
          <input
            type="text"
            className="search_input"
            placeholder="Search for"
            onChange={this.handleSearch}
          />
          {
            isOpen ? <Header onSubmit={this.addFilms} handleClose={this.handleClose} /> : ''
          }
          <button type="button" onClick={this.handleAddFilms}>
            Add film
          </button>
        </div>
        <ul className="films-list">
          {
            films.map(film => (
              <FilmItem
                key={film.id}
                film={film}
                deleteFilm={this.deleteFilm}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default FilmsList;
