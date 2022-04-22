import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Messages from "../styles/components/Messages/Messages";

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    //return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">React Chat</header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
};

export default Home;

