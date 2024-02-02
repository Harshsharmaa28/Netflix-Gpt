// require('dotenv').config()


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_API_TOKEN,
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w300";