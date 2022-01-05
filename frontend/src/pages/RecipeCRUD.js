import { Box } from "@mui/material";
import RecipeCreationForm from "../components/forms/RecipeCreationForm";

export default function RecipeCRUD() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RecipeCreationForm />
    </Box>
  );
}
