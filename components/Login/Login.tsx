import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./Login.module.css";

interface Props {
  login: (username: string) => void;
  className?: string;
}

const Login: React.FC<Props> = ({ login, className }) => {
  const [username, setUsername] = useState("");
  return (
    <Card
      className={
        "p-10 flex items-center flex-col gap-4 max-w-4xl " + className ?? ""
      }
      variant="outlined"
    >
      <TextField
        className="w-full"
        id="standard-basic"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        label="Username"
        variant="standard"
      />

      <div className="w-full flex justify-evenly">
        <Button
          className="w-1/4"
          variant="outlined"
          onClick={() => login(username)}
        >
          Login
        </Button>
        <Button
          className="w-1/4"
          variant="outlined"
          onClick={() => login(username)}
        >
          Register
        </Button>
      </div>
    </Card>
  );
};

export default Login;
