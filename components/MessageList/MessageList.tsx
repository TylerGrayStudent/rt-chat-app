import { Message } from "../../models/Message";
import { ComponentDefaultProps } from "../../models/SharedProps/ComponentDefaultProps";
import MessageRow from "../MessageRow/MessageRow";

interface Props extends ComponentDefaultProps {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages, className }) => {
  return (
    <div className={className + " w-full h-full"}>
      {messages.map((message, index) => (
        <MessageRow
          key={index}
          message={message.message}
          user={message.user.username ?? "No User"}
        />
      ))}
    </div>
  );
};

export default MessageList;
