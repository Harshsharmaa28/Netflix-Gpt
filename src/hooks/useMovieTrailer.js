import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import {addTrailerVideo} from "../utils/moviesSlice"
import { useEffect } from "react";


export const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const trailorVideo = useSelector((store) => store.movies?.trailorVideo);

    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId +"/videos",
            API_OPTIONS);

        const json = await data.json();
        const filterData = json.results.filter((video) => video.type ==="Trailer" );
        const trailor = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailor))
    };

    useEffect(()=>{
        !trailorVideo && getMovieVideo();
    },[])
}

