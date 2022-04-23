import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./Login.module.css";

interface Props {
  login: (username: string) => void;
}

const Login: React.FC<Props> = ({ login }) => {
  const [username, setUsername] = useState("");
  return (
    <Card
      className={styles.card + " flex items-center flex-col gap-4"}
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

      <Button
        className="w-1/2"
        variant="outlined"
        onClick={() => login(username)}
      >
        Login
      </Button>
    </Card>
  );
};

export default Login;
