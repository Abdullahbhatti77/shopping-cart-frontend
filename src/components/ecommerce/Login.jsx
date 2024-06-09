import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-pink-500 min-h-screen">
        <div className="flex justify-center">
          <div className="px-10 py-10 w-96 rounded-xl bg-white">
            <h2 className="text-center text-4xl font-bold">Login</h2>
            <form className="mt-12">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 mt-7"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="flex justify-end mt-2">Forgot password ?</p>

              <Link to="/cart">
              <button
                type="submit"
                className="h-10 mt-8 block w-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold"
              >
                LOGIN
              </button>
              </Link>
            </form>

            <p className="text-center mt-12">Or login with</p>
            <div className="flex justify-center space-x-5 mt-5">
              <FaGoogle />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
