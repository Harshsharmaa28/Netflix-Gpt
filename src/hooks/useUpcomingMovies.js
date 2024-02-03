import { useDispatch, useSelector } from "react-redux"


export const UpcomingMovies = () =>{
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector((store) => store.movies?.UpcomingMovies);

    const getUpcomingMovies = async () =>{
        // const data = 
    }
}