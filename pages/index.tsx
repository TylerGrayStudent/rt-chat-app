import { createTheme, Paper, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Login from "../components/Login";
import Messages from "../components/Messages/Messages";
import { UserList } from "../components/UserList";
import { User } from "../models/User";
import styles from "./index.module.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const newSocket = io(`${process.env.NEXT_PUBLIC_WS_API}`, {
      autoConnect: false,
    });
    newSocket.on("users", (users: { id: string; username: string }[]) => {
      setUsers(users);
    });
    newSocket.on("message", (message) => {
      console.log(message);
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  const handleLogin = (username: string) => {
    console.log(socket);
    while (!socket) {
      console.log("waiting for socket");
    }
    try {
      socket.auth = { username };
      socket.connect();
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className={styles.page + " p-4"}>
        <div className="flex flex-col">
          <h1 className="text-4xl text-center pb-2">Real Time Chat App</h1>
          {!loggedIn && <Login login={handleLogin} />}
          {loggedIn && <UserList users={users} />}
          {loggedIn && !!socket && (
            <div className="grow">
              {" "}
              <Messages socket={socket} />
            </div>
          )}
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
