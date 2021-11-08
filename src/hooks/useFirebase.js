import { useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth();

  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Password Must be at least 6 character long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setSuccess("Your account Created Successfully!");
        setUserName();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailLogin = (e) => {
    if (pass.length < 6) {
      setError("Password Must be at least 6 character long.");
      return;
    }
    localStorage.setItem("isLoggedIn", true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handleGoogleSignIn = () => {
    const GoogleProvider = new GoogleAuthProvider();
    localStorage.setItem("isLoggedIn", true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    signOut(auth)
      .then(() => {
        console.log("im in logout clicked");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  return {
    user,
    setUser,
    name,
    setName,
    email,
    setEmail,
    pass,
    setPass,
    error,
    setError,
    success,
    setSuccess,
    handlePass,
    handleEmail,
    handleName,
    handleRegistration,
    handleGoogleSignIn,
    handleEmailLogin,
    handleLogOut,
  };
};

export default useFirebase;
