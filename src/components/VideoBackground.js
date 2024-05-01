
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
const VideoBackground = ({id}) => {

    
    const trailerVideo = useSelector(store => store.movies?.trailervideo)

    const trailerVideokey = trailerVideo?.key

useMovieTrailer(id)

    return(  <div className=" w-screen">
       <iframe  className="w-screen aspect-video"  src={
          "https://www.youtube.com/embed/" +
          trailerVideokey +
          "?&autoplay=1&mute=1"
        } title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
    </div>)
}

export default VideoBackground;