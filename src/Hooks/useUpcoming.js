import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { upComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
const dispatch = useDispatch()

const upcomingmovies = async() => {
const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
const resposne = await data?.json()
dispatch(upComingMovies(resposne))
}

useEffect(() => {
    upcomingmovies()
},[])

}




export default useUpcoming;