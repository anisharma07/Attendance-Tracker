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
import Loading from "@/Components/Loading";
interface UserData {
  attended: number;
  total: number;
  Sub_name: string;
  target_percentage: number;
  Attendance: any;
}
import Navbar from "@/Components/Navbar";

const Page: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [toggle, setToggle] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [loading, setLoading] = useState(true);

  const updateUserData = (subjectDetails:any) => {
    userData? userData.Attendance = subjectDetails : null;
   setUserData(userData);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
setLoading(true);
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
      setLoading(false);
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

  return loading? (<main className="flex justify-center items-center w-full min-h-[100svh] bg-zinc-900 relative">
    <Loading />
    </main>) : !user ? (
    <Landing login={handleLogin} />
  ): (
    <main className="flex flex-col justify-between w-full bg-zinc-900 text-zinc-300 relative">
          <Navbar toggle={toggle}  setToggle={setToggle} handleLogout={handleLogout}/>
      {activeRoute === "home" && <Home updateuserData={updateUserData} user={user} userData={userData} />} 
      {activeRoute === "calendar" && <Calendar />}
          {activeRoute === "settings" && <Settings handleLogout={handleLogout} name={user.displayName} photo={user.photoURL} uid={user.uid} />}
        <Footer activeRoute={activeRoute} changeActiveRoute={setActiveRoute} />
        
      </main>
  );
};

export default Page;
