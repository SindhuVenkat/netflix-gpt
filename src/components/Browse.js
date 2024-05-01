
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {

useNowPlayingMovies()
usePopularMovies()

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