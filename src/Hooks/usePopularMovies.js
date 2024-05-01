import { useDispatch } from "react-redux";
import { popularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async() => {
       const resposne = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await resposne?.json()
        dispatch(popularMovies(data))
    
    }
    
    useEffect(()=>{
        getPopularMovies()
    },[])

}

export default usePopularMovies;