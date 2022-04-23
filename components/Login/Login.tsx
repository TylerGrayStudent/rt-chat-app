import { useState } from "react";

interface Props {
  login: (username: string) => void;
}

const Login: React.FC<Props> = ({ login }) => {
  const [username, setUsername] = useState("");
  return (
    <>
      <label>
        Username
        <input
          type="string"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        ></input>
      </label>
      <button onClick={() => login(username)}>Login</button>
    </>
  );
};

export default Login;
