"use client";
import React, { useState, useEffect } from "react";
import { auth, provider, db } from "../../../firebase/config";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Home from "@/Components/Home/Home";
import Landing from "@/Components/Landing";
import Calendar from "@/Components/Calendar/Calendar";
import Settings from "@/Components/Settings/Settings";
import Footer from "@/Components/Footer";
interface UserData {
  attended: number;
  total: number;
  Sub_name: string;
  target_percentage: number;
}

const Page: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [toggle, setToggle] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDoc);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data() as UserData);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return !user ? (
    <Landing login={handleLogin} />
  ): (
    <main className="flex flex-col justify-between w-full bg-zinc-900 text-zinc-300 relative">
      <nav className="flex items-center h-[60px] justify-between p-4 bg-zinc-800 relative">
        <div className="flex items-center gap-2">
          <img src="/assets/images/logo.png" alt="logo" className="w-12 mr-2" />
          <span className="text-2xl font-semibold">Attendance Tracker</span>
        </div>
        <button className="text-zinc-300" onClick={() => setToggle(!toggle)}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 16.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0-6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0-6c.828 0 1.5-.672 1.5-1.5S12.828 1.5 12 1.5 10.5 2.172 10.5 3s.672 1.5 1.5 1.5z" />
          </svg>
        </button>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl animated-slide-top`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-poppins font-regular cursor-pointer text-[16px] mb-4 text-white text-dimWhite py-1 px-2`}
            >
              <a href="/">Set Target</a>
            </li>
            <li
              className={`font-poppins font-regular cursor-pointer text-[16px] mb-4 text-white text-dimWhite py-1 px-2`}
            >
              <a href="/">Add Subject</a>
            </li>

            <li className="text-white bg-red-800 py-1 px-2 rounded-[25px] font-poppins font-medium cursor-pointer text-[16px]">
              <button onClick={handleLogout} className="p-2">
                Log Out?
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {activeRoute === "home" && <Home user={user} userData={userData} />} 
      {activeRoute === "calendar" && <Calendar />}
        {activeRoute === "settings" && <Settings />}
        <Footer activeRoute={activeRoute} changeActiveRoute={setActiveRoute} />
        
      </main>
  );
};

export default Page;
