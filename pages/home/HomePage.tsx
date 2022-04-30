import { Paper } from "@mui/material";
import { NextPage } from "next";
import Logout from "../../components/Logout";
import Navbar from "../../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <Paper className="h-full">
      <Navbar />
      <h1>Home</h1>
      <Logout />
    </Paper>
  );
};

export default Home;
