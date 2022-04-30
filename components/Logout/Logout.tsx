import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { logout } from "../../firebase/firebase";

const Logout: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </>
  );
};

export default Logout;
