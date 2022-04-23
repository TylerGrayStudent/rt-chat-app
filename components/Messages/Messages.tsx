import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Message } from "../../models/Message";
import styles from "./Messages.module.css";

const Messages: React.FC<{ socket: Socket }> = ({ socket }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message: Message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  return (
    <>
      <Card className="h-full" variant="outlined">
        <div className="flex flex-col-reverse content-end">
          {messages.map((message, index) => (
            <div key={index} className={styles.message}>
              {message.user + ": " + message.message}
            </div>
          ))}
        </div>
        <div className="flex items-stretch">
          <TextField
            variant="standard"
            className="w-5/6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={() => sendMessage(message)} className="w-1/6">
            Send
          </Button>
        </div>
        {/* <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></input>
      <button onClick={() => sendMessage(message)}>Test</button> */}
      </Card>
    </>
  );
};

export default Messages;

// function Messages({ socket }) {
//   const [messages, setMessages] = useState({});

//   useEffect(() => {
//     const messageListener = (message) => {
//       setMessages((prevMessages) => {
//         const newMessages = { ...prevMessages };
//         newMessages[message.id] = message;
//         return newMessages;
//       });
//     };

//     const deleteMessageListener = (messageID) => {
//       setMessages((prevMessages) => {
//         const newMessages = { ...prevMessages };
//         delete newMessages[messageID];
//         return newMessages;
//       });
//     };

//     socket.on("message", messageListener);
//     socket.on("deleteMessage", deleteMessageListener);
//     socket.emit("getMessages");

//     return () => {
//       socket.off("message", messageListener);
//       socket.off("deleteMessage", deleteMessageListener);
//     };
//   }, [socket]);

//   return (
//     <div className="message-list">
//       {[...Object.values(messages)]
//         .sort((a, b) => a.time - b.time)
//         .map((message) => (
//           <div
//             key={message.id}
//             className="message-container"
//             title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
//           >
//             <span className="user">{message.user.name}:</span>
//             <span className="message">{message.value}</span>
//             <span className="date">
//               {new Date(message.time).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Messages;
