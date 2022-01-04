import { Stack, Box, Alert, AlertTitle } from "@mui/material";
import RecipeCard from "./composites/RecipeCard";

export default function DataDisplay(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        width: "50%",
        mx: "auto",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        mt: 2,
      }}
    >
      {!(props.data && props.data.length > 0) ? (
        <Alert severity="warning" sx={{ p: 4 }}>
          <AlertTitle>Error</AlertTitle>
          Database returned an empty list.{" "}
          <strong>Please add data to the database.</strong>
        </Alert>
      ) : (
        <Stack spacing={2}>
          {props.data.map((recipe, index) => {
            return <RecipeCard key={`recipe-${index}`} {...recipe} />;
          })}
        </Stack>
      )}
    </Box>
  );
}
