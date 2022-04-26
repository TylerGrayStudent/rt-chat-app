import { Card, Paper } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../../components/Login";
import { signInWithEmail } from "../../firebase/firebase";

const LoginPage: NextPage<{}> = () => {
  const router = useRouter();
  const login = async (username: string, password: string) => {
    try {
      const user = await signInWithEmail(username, password);
      console.log(user);
      router.push("/home");
    } catch (e) {
      console.log(e);
    }
  };
  const register = () => {
    router.push("/register");
  };

  return (
    <>
      <Paper className="h-full grid justify-center content-center">
        <Login onLogin={login} onRegister={register} />
      </Paper>
    </>
  );
};

export default LoginPage;
