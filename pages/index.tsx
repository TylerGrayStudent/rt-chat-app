import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Login from "../components/Login";
import Messages from "../components/Messages/Messages";

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  const handleLogin = (userName: string) => {
    console.log(socket);
    while (!socket) {
      console.log("waiting for socket");
    }
    socket.auth = { userName };
    socket.connect();
    setLoggedIn(true);
  };

  return <>{!loggedIn && <Login login={handleLogin} />}</>;
};

export default Home;

