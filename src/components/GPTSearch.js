import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants";

const GPTSearch = () => {

const langKey = useSelector(store=>store.config.lang)

    return (
        <div>        <div className="fixed -z-10">
        <img className="object-cover" src={BG_URL} alt="logo" />
      </div>
<div>
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
             <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
            <input  className=" p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} type="Search"/>
            <button  className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
        </div>
        </div>
    )
}

export default GPTSearch;