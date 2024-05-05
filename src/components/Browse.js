
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useUpcoming from "../Hooks/useUpcoming";
const Browse = () => {

useNowPlayingMovies()
usePopularMovies()
useTopRated()
useUpcoming()

const showGptSearch = useSelector(store=> store.gpt?.showGptSearch)

 return(
    <div>
       <Header/>
      {showGptSearch ? <GPTSearch/> : 
      <>
      <Maincontainer/>
      <Secondarycontainer/>
      </>}
    </div>
 )
}

export default Browse;