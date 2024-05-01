import { useDispatch } from "react-redux";
import { nowplayingmovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async() => {
       const resposne = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const data = await resposne?.json()
        dispatch(nowplayingmovie(data))
    
    }
    
    useEffect(()=>{
     getNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies;