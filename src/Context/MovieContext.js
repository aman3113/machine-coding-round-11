import React, { createContext, useEffect, useReducer, useState } from "react";
import { movies } from "../Utils/Data";

export const MovieContext = createContext();
const moviesData = movies.map((movie) => ({
	...movie,
	addedToWatchLater: false,
	addedToStarred: false,
}));

const initialState = {
	moviesArr: JSON.parse(localStorage.getItem("MovieWatchList")) ?? moviesData,
};

function Reducer(state, action) {}

const MovieContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const [movieList, setMovieList] = useState(state.moviesArr);

	useEffect(() => {
		localStorage.setItem("MovieWatchList", JSON.stringify(state.moviesArr));
	}, [state]);

	return (
		<MovieContext.Provider value={{ state, dispatch, movieList, setMovieList }}>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
