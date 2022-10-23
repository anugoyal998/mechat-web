import React from "react";
import logo from "../assets/logo.png";
import { auth as googleAuth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { login, logout } from "../api";
import { myAuth } from "../states";


const Navbar = () => {
  const user = myAuth((state) => state.auth.user);
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(googleAuth, googleProvider).then(async (response) => {
      const user = {
        name: response?.user?.displayName,
        email: response?.user?.email,
        avatar: response?.user?.photoURL,
      };
      try {
        const { data } = await login(user);
        Cookies.set("accessToken", data?.tokens?.at);
        Cookies.set("refreshToken", data?.tokens?.rt);
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    });
  };

  const handleLogout = async ()=> {
    try {
        await logout()
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2 h-12">
        <img src={logo} alt="MeChat" className="w-12" />
        <p className="font-semibold">MeChat</p>
      </div>
      <div>
        {user ? (
          <div
            className="flex items-center space-x-2 bg-white border h-12 px-2 rounded-sm cursor-pointer"
            onClick={handleLogout}
          >
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="w-40">
              <p className="capitalize truncate font-bold">{user?.name}</p>
              <p className="truncate text-xs font-medium">{user?.email}</p>
            </div>
          </div>
        ) : (
          <button
            className="flex space-x-1 items-center bg-white px-3 py-2 rounded-sm border"
            onClick={handleLogin}
          >
            <FcGoogle />
            <p> Sign in with Google</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
