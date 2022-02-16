import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import svg_art from "../assets/coding_art.svg";
import { fetchAllMessagesOfTheDay } from "../services/Herald";

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchAllMessagesOfTheDay(setMessages);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Home</h1>
      <img alt="funky illustration" src={svg_art} />

      <Box sx={{ padding: 4 }}>
        {messages.length !== 0
          ? messages[messages.length - 1].text
          : "No messages"}
      </Box>

      <Box sx={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Box>
    </Box>
  );
}
