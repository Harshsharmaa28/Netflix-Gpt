import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



export const useTopratedMovies = () =>{
    const dispatch = useDispatch();

    const TopRatedMovies = useSelector((store) => store.movies?.TopRatedMovies);

    const getTopRatedMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=hi-IN&page=1',
        API_OPTIONS);

        const json = await data.json();
        dispatch(addTopratedMovies(json.results));
    }

    useEffect(()=>{
        !TopRatedMovies && getTopRatedMovies();
    })
}