import { useState } from "react";
import { ComponentDefaultProps } from "../../models/SharedProps/ComponentDefaultProps";

interface Props extends ComponentDefaultProps {
  sendMessage: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ sendMessage, className }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (message: string) => {
    setMessage("");
    if (sendMessage) sendMessage(message);
  };

  return (
    <div className={className + "w-full flex"}>
      <input
        className="grow"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="grow-0 justify-self-end"
        onClick={() => handleSendMessage(message)}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
