import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsiubscribe when component unmounts
        return () => unsubscribe();
      }, []);
    
      const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)



const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
      
}

const handleGPTSearch = () => {
    dispatch(toggleGptSearchView())
}

return(
    <div className="absolute w-screen px-8 flex justify-between py-2 z-10 bg-gradient-to-b from-black">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick = {handleGPTSearch}>{showGptSearch ? 'Homepage' : 'GPT Search'}</button>
    <button className="font-bold text-white " onClick={handleSignOut}>Sign Out</button>
    </div>
)
}

export default Header;