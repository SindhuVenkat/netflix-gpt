import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
   
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const resposne = await data.json()
        const filteredmovies = resposne?.results?.filter(movies => movies?.type === 'Trailer')
        const trailer = filteredmovies.length ? filteredmovies[0] : resposne.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    
    
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    },[])

}

export default useMovieTrailer;