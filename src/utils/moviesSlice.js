import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState :{
        nowPlayingMovies : null,
        trailerVideo : null,
        PopularMovies : null,
        UpcomingMovies : null,
        TopratedMovies : null,
        TrendingMovies :  null,
    },
    reducers :{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.UpcomingMovies = action.payload
        },
        addTopratedMovies : (state,action) =>{
            state.TopratedMovies = action.payload
        },
        addTrendingMovies : (state,action) =>{
            state.TrendingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies ,addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopratedMovies, addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
