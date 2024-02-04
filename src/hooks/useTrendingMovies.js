import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



export const useTrendingMovies = () =>{
    const dispatch = useDispatch();

    const TrendingMovies = useSelector((store) => store.movies?.TrendingMovies);

    const getTrendingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=hi-IN',
        API_OPTIONS);

        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(()=>{
        !TrendingMovies && getTrendingMovies();
    })
}