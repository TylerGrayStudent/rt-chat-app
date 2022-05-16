import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";

export const SocketContext = React.createContext<Socket | undefined>(undefined);

export function useSocket() {
  return useContext(SocketContext);
}

interface Props {
  username: string;
  children?: ReactNode;
}

const SocketProvider: React.FC<Props> = ({ username, children }) => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    console.log(username);
    const newSocket = io(process.env.NEXT_PUBLIC_WS_API ?? "", {
      auth: {
        username,
      },
    });
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [username]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
