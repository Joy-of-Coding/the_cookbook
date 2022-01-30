import RecipeCard from "../components/composites/RecipeCard";
import { Box } from "@mui/material";

export default function TestingArea() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Testing Area</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <RecipeCard />
      </Box>
    </>
  );
}
