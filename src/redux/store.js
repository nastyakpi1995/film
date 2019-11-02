import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import movies from '../components/films';
import uuidv1 from 'uuid/v1';

// action
const ADD_FILMS = 'ADD_FILMS';
const DELETE_FILM = 'DELETE_FILM';
const SET_SEARCH = 'set_search';

// selection
export const addFilms = 
  (newTitle, newStars, newReleaseYear, newFormat) => ({ 
    type: ADD_FILMS, newTitle, newStars, newReleaseYear, newFormat 
  })
export const delete_movie = filmId => ({ type: DELETE_FILM, filmId });
export const setSearchProps = value => ({ type: SET_SEARCH, value });


const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_FILMS: 
      return { ...state,
          films: [...state.films, {
            id: uuidv1,
            title: action.newTitle,
            stars: action.newStars,
            releaseyear: action.newReleaseYear,
            format: action.newFormat,
          }]
        }

    case DELETE_FILM:
      return {...state,
          films: state.films.filter(movie => movie.id !== action.filmId)
        }
      case SET_SEARCH:
        return {
          ...state,
          films: state.filmsHidden.filter(
            world => [world.title, world.stars]
              .join('')
              .toLowerCase()
              .includes(action.value.toLowerCase())
          )
        }
  
    default: 
      return state;
  }
};

const initialState = {
  films: movies,
  filmsHidden: movies,
  searchText: '',
  searchProps: 'title',
};

const store = createStore(
  rootReducer,
  initialState,
    applyMiddleware(thunk),
);

export default store;