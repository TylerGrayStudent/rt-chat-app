import { Button, Card, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import styles from "./Login.module.css";

interface Props {
  onLogin: (username: string, password: string) => Promise<void>;
  onRegister: () => void;
  className?: string;
}

const Login: React.FC<Props> = ({ onLogin, onRegister, className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (username: string, password: string) => {
    setLoading(true);
    await onLogin(username, password);
    setLoading(false);
  };
  return (
    <>
      <Card className=" flex flex-col p-4" variant="outlined">
        <TextField
          className="w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="standard"
        />{" "}
        <TextField
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="standard"
          type="password"
        />
        <div className="p-4"></div>
        <div className="w-full flex justify-evenly">
          {!loading && (
            <Button
              className="w-1/2"
              variant="outlined"
              onClick={() => handleLogin(username, password)}
            >
              Login
            </Button>
          )}
          {loading && (
            <LoadingButton
              className="w-1/2"
              loading
              variant="outlined"
            ></LoadingButton>
          )}

          <Button
            className="w-1/2"
            variant="outlined"
            onClick={() => onRegister()}
          >
            Register
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Login;
