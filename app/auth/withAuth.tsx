// withAuth.tsx
"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebaseConfig";
import React, { ComponentType } from "react";

const withAuth = (WrappedComponent: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/"); // Redirect to home if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
