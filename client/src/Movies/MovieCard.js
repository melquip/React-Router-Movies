import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { title, director, metascore, stars, id }}) => {
	//const { title, director, metascore, stars, id } = props.movie;
	return (
		<Link to={`/movies/${id}`} className="movie-card">
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars ? stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			)) : null}
		</Link>
	)
};

export default MovieCard;
