import axios from "axios";
import { apiKey } from '../constants'

const apiBaseUrl = 'https://api.themoviedb.org/3';

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US`


const movieDetailsEndpoint = id => id? `${apiBaseUrl}/movie/${id}` : null
const movieCreditsEndpoint = id => id ? `${apiBaseUrl}/movie/${id}/credits?language=en-US`: null
const similarMovieEndpoint = id => id ? `${apiBaseUrl}movie/${id}/similar`: null

export const image500 = path => path? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = path => path? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = path => path? `https://image.tmdb.org/t/p/w185${path}` : null

const apicall = async(endpoints,method) =>{
    try{
        const response = await fetch(endpoints,{
            method:method,
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjM2NjQ2OWZmMDhlMjI4ZGMwZjI2YjEyN2M2NmM3OSIsInN1YiI6IjYyZmNjZGRkMzU4MThmMDA4Mjk2YmRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ap0uKjTkOf2tQPpn82rMQ5DROpTBQ9Vtcz4AzwIOsR4`, // Include the access token in the "Authorization" header
              'Content-Type': 'application/json' 
            }
          })
          if(!response.ok){
            console.log('api call error') 
            return {
                type:'error',
                message:"some error occured while calling the api"
            }
          }
   
         return {
            type:'success',
            message: await response.json()
         }
    }
    catch(error){
        console.log('error occured', error)
        return ` occured ${error}`
    }
 
  }

  export const fetchTrendingMovies = () =>{
    return apicall(trendingMoviesEndpoint,'GET')
  }

  export const fetchUpcomingMovies = () =>{
    return apicall(upcomingMoviesEndpoint,'GET')
  }

  export const fetchTopRatedMovies = () =>{
    return apicall(topRatedMoviesEndpoint,'GET')
  }

  export const fetchMovieDetail = (id) => {
    console.log('uuuuuuuuuuuuuu',id)
    console.log('qqqqqqqqqq',`${apiBaseUrl}/movie/${id}`)
    return apicall(movieDetailsEndpoint(id),'GET')
  }

  export const fetchMovieCredits = (id) => {
  
    return apicall(movieCreditsEndpoint(id),'GET')
  }

  export const fetchSimilarMovies = (id) => {
    return apicall(similarMovieEndpoint(id),'GET')
  }
 