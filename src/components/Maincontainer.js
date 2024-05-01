import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies?.results)

        if(!movies) return;

        const mainmovie = movies[0]

    const {title, overview, id} = mainmovie

    return(
        <div className=" bg-black">
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground id={id} />

        </div>
    )
}

export default Maincontainer;