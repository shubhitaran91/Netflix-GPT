import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/contants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/contants";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptToggle);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="Netflix Logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex ">
          {showGptSearch && (
            <select
              className="bg-black text-white rounded-lg mx-4 px-4 my-4"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="my-2  py-2 mx-4 px-4 bg-purple-600 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="User Avatar" className="w-10 h-10" />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
