import { Box } from "@mui/material";
import svg_art from "../assets/coding_art.svg";

export default function Home() {
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
      <h1>Home Page</h1>


      Is this for real?
      <img alt="funky illustration" src={svg_art} />

      <Box sx={{ width: "50%" }}>
        
      </Box>
    </Box>
  );
}
