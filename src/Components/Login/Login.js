import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    handleEmail,
    handlePass,
    handleEmailLogin,
    handleGoogleSignIn,
    error,
    setError,
    setUser,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const from = location.state?.from || "/home";
  console.log(from);

  const EmailLogin = (e) => {
    e.preventDefault();
    handleEmailLogin()
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className='flex justify-center min-h-screen bg-gray-100 mx-2'>
        <div className='container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white'>
          <div className='text-center my-6'>
            <h1 className='text-3xl font-semibold text-gray-700'>Mindly.</h1>
            <p className='text-gray-500'>Sign in to access your account</p>
          </div>
          <div className='m-6'>
            <form className='mb-4'>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm text-gray-600 dark:text-gray-400 text-left'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your email address'
                  onBlur={handleEmail}
                  className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                />
              </div>

              <div className='mb-6'>
                <div className='flex justify-between mb-2'>
                  <label
                    htmlFor='password'
                    className='text-sm text-gray-600 dark:text-gray-400'
                  >
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Your password'
                  onBlur={handlePass}
                  className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                />
              </div>
              {error.length >= 1 && (
                <div className='mb-6'>
                  <p className='text-sm text-center text-red-700'>{error}</p>
                </div>
              )}
              <div className='mb-6'>
                <button
                  type='submit'
                  onClick={EmailLogin}
                  className='w-full px-2 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out'
                >
                  Log In
                </button>
              </div>
              <p className='text-sm text-center text-gray-400'>
                Don't have an account yet?
                <Link
                  to='/registration'
                  className='font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline'
                >
                  Registration
                </Link>
                .
              </p>
            </form>
            <div className='flex flex-row justify-center mb-8'>
              <span className='absolute bg-white px-4 text-gray-500'>
                or LogIn with
              </span>
              <div className='w-full bg-gray-200 mt-3 h-px'></div>
            </div>
            <div className='flex flex-row gap-2'>
              <button
                onClick={googleLogin}
                className='bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out'
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
