import React from 'react';
import { Link } fromm 'react-router-dom';

const moviesList = ({ movies }) => {
  Object.keys(movies).map(movieID => <Link key={movieID} to={`/movies/${movieID`}>)
}