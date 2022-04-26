import { Button, Card, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { BaseSyntheticEvent, useState } from "react";
import { ComponentDefaultProps } from "../../models/SharedProps/ComponentDefaultProps";

interface Props extends ComponentDefaultProps {
  onRegister: (username: string, email: string, password: string) => void;
}

const Register: React.FC<Props> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleRegisterClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onRegister(username, email, password);
  };
  return (
    <>
      <Card variant="outlined" className="flex flex-col p-4">
        <TextField
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full"
        />
        <TextField
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full"
        />
        <TextField
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full"
        />
        <div className="p-4"></div>
        <Button onClick={(e) => handleRegisterClick(e)} variant="outlined">
          Register
        </Button>
      </Card>
    </>
  );
};

export default Register;
