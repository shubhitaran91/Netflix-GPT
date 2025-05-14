import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, SIGN_IN_BACKGROUND_IMAGE } from "../utils/contants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: SIGN_IN_BACKGROUND_IMAGE ,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img src={BACKGROUND_IMAGE} alt="netfix background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto top-0 left-0 bg-black bg-opacity-80 p-10 rounded-lg right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="Full Name"
            placeholder="Full Name"
            className="w-full p-2 m-2 border border-gray-300 rounded  bg-gray-600"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="w-full p-2 m-2 border border-gray-300 rounded  bg-gray-600"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full p-2 m-2 border border-gray-300 rounded bg-gray-600"
        />
        <p className="text-red-500 text-bold my-2">{error}</p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-2 m-2 bg-red-600 text-white rounded"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? SignUp"
            : "Already a Netflix member? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
