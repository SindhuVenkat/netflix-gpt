import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondarycontainer = () => {
  const movies = useSelector(store => store.movies)



  return(
    movies.nowPlayingMovies &&
 ( <div className="bg-black">
    <div className=" mt-0  pl-4 md:pl-12 relative z-20">

        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies?.results}/>

        <MovieList title={'Popular'} movies={movies.popularMovies?.results}/>

</div>
  </div>)
  )

}
export default Secondarycontainer;