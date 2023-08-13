import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

const MovieList = () => {
	const { state, movieList } = useContext(MovieContext);
	return (
		<div>
			<nav></nav>
			<section className="flex flex-wrap gap-5 justify-center">
				{movieList?.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</section>
		</div>
	);
};

export default MovieList;
