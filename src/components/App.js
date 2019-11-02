import React from 'react';
import { connect } from 'react-redux';

import FilmsList from './FilmsList';

const App = () => (
  <section className="todoapp">
    <FilmsList /> 
  </section>
);

const mapState = () => ({
  // todosLength: todos.length,
});

export default connect(mapState)(App);

// App.propTypes = appPropTypes;