import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import styles from "./Messages.module.css";

const Messages: React.FC<{ socket: Socket }> = ({ socket }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   socket.on("identity", (message: any) => {
  //     setMessages([...messages, message]);
  //   });
  // }, [messages, socket]);

  const sendMessage = (message: string) => {
    socket.emit("identity", message);
  };

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={styles.message}>
          {message}
        </div>
      ))}
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></input>
      <button onClick={() => sendMessage(message)}>Test</button>
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
