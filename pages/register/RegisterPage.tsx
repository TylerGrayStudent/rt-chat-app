import { NextPage } from "next";
import { Paper } from "@mui/material";
import Register from "../../components/Register";
import { registerWithEmailAndPassword } from "../../firebase/firebase";
import { useRouter } from "next/router";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const register = (username: string, email: string, password: string) => {
    if (username && email && password) {
      registerWithEmailAndPassword(username, email, password).then((user) => {
        console.log(user);
        router.replace("/login");
      });
    } else {
      console.log("missing fields");
    }
  };
  return (
    <>
      <Paper className="h-full grid justify-center content-center">
        <Register onRegister={register} />
      </Paper>
    </>
  );
};

export default RegisterPage;
