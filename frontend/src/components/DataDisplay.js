import { Stack, Box } from "@mui/material";
import RecipeCard from "./composites/RecipeCard";

export default function DataDisplay(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={2}>
        {props.data.map((recipe, index) => {
          return <RecipeCard key={`recipe-${index}`} {...recipe} />;
        })}
      </Stack>
    </Box>
  );
}
