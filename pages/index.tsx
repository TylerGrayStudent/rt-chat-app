import { createTheme, Paper } from "@mui/material";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth, signInWithEmail } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/Login/Login";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home: NextPage = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      router.push("/home");
    }
    if (error) {
      console.log(error);
    }
  }, [loading, router, user, error]);

  const login = async (username: string, password: string) => {
    await signInWithEmail(username, password);
  };

  const register = () => {
    router.push("/register");
  };

  return (
    <>
      <Paper className="h-full grid justify-center content-center">
        {!loading && <Login onLogin={login} onRegister={register} />}
      </Paper>
    </>
  );
};

export default Home;
