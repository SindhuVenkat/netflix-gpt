import Header from "./Header"
import {useState, useRef} from 'react'
import { checkvalid, checkvalidname } from "../utils/checkvalid"
import {auth} from "../utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [isSigninForm, setIsSigninForm] = useState(true)
    const [errorMessage,setErrormessage] = useState(null)



    const toggleform = () => {
        setIsSigninForm(!isSigninForm)
    }

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    console.log(email.current?.value,'email')
    console.log(name.current?.value,'email')

    const handleButtonClick = () => {
    const message = checkvalid(email.current?.value, password.current?.value )
setErrormessage(message)


if(message) return;

if(!isSigninForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode +"-"+ errorMessage)
    // ..
  });
} else {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode +"-"+ errorMessage)
  });
}

}
return(
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backimg" />
        </div>
       
            <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSigninForm ? 'Sign In' : 'Sign Up'}  </h1>
                {!isSigninForm && (<input type="text" className="p-4 my-4 w-full bg-gray-700" ref={name} placeholder="First Name"></input>)}

                <input type="text" ref={email}  className="p-4 my-4 w-full bg-gray-700"  placeholder="Email" ></input>
                <input type="password" ref={password}  className="p-4 my-4 w-full bg-gray-700"  placeholder="Password" ></input>
                <p className="text-red-800">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} >{isSigninForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="py-4 cursor-pointer" onClick={toggleform}>{isSigninForm ? 'New to Netflix? Sign Up Now.' : 'Already Registered? Sign In Now' }</p>
            </form>
        
    </div>
)
}

export default Login