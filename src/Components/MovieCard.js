import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const {
		id,
		title,
		rating,
		summary,
		imageURL,
		addedToWatchLater,
		addedToStarred,
	} = movie;
	return (
		<div className="p-3 shadow-lg shadow-gray-600 rounded-md min-w-[250px] w-[90%] md:w-[30%] lg:w-[25%] flex flex-col gap-2 justify-between">
			<Link to={`/movie/${id}`} className="w-full relative">
				<img src={imageURL} className="w-full h-[280px]  " alt="" />
				<span className="bg-white px-3 py-1 rounded-md absolute top-1 right-1">
					{rating}
				</span>
			</Link>
			<p className="text-lg font-bold text-center">{title}</p>
			<p className="text-center">{summary}</p>
			<div className="flex justify-between p-3">
				{addedToStarred ? (
					<button className="button">Starred</button>
				) : (
					<button className="button">Star</button>
				)}
				{addedToWatchLater ? (
					<button className="button">Added To WatchList</button>
				) : (
					<button className="button">Add to WatchList</button>
				)}
			</div>
		</div>
	);
};

export default MovieCard;
