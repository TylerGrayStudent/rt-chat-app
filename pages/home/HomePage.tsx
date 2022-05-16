import { Paper } from "@mui/material";
import { NextPage } from "next";
import Logout from "../../components/Logout";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import Navbar from "../../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <Paper className="h-screen">
      <Navbar />
      <MainSidebar />
    </Paper>
  );
};

export default Home;
