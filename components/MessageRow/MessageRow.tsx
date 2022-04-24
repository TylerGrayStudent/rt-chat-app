import { ComponentDefaultProps } from "../../models/SharedProps/ComponentDefaultProps";

interface Props extends ComponentDefaultProps {
  user: string;
  message: string;
}

const MessageRow: React.FC<Props> = ({ message, user, className }) => {
  return (
    <>
      <div className={className + " w-full"}>
        <b>{user}: &nbsp;</b>
        <span>{message}</span>
      </div>
    </>
  );
};

export default MessageRow;
