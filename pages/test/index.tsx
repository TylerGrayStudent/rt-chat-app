import { NextPage } from "next";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SocketProvider, {
  SocketContext,
  useSocket,
} from "../../context/sockets";
import { auth } from "../../firebase/firebase";

const TestPage: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  //const socket = useSocket();

  const socket = useContext(SocketContext);

  const a = auth;
  const [whoCall, setWhoCall] = useState("");
  socket?.on("call", (data: any) => {
    console.log(data);
  });

  useEffect(() => {
    getVideo();
  }, [videoRef, auth]);

  const makeCall = () => {
    console.log(socket);
    socket?.emit("call", whoCall);
    console.log("make call to" + whoCall);
  };

  const getVideo = () => {
    // navigator.mediaDevices
    //   .getUserMedia({ video: { width: 300 } })
    //   .then((stream) => {
    //     let video = videoRef.current;
    //     if (!video) return;
    //     video.srcObject = stream;
    //     video.play();
    //   })
    //   .catch((err) => {
    //     console.error("error:", err);
    //   });
  };

  const toggleVideo = () => {
    let video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <SocketProvider username={"t"}>
      <Paper className="h-full grid justify-center content-center">
        <motion.video drag ref={videoRef}></motion.video>
        <button onClick={() => toggleVideo()}>Toggle</button>
        <button onClick={() => makeCall()}>Make call</button>
        <input
          type="text"
          value={whoCall}
          onChange={(e) => setWhoCall(e.target.value)}
        />
      </Paper>
    </SocketProvider>
  );
};

export default TestPage;
