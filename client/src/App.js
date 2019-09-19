import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
	if(savedList.find(savedMovie => savedMovie.id === movie.id)) {
		return false;
	}
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />} />
    </div>
  );
};

export default App;
