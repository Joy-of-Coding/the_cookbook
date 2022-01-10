import { Grid, Box, Alert, AlertTitle } from "@mui/material";
import RecipeCard from "./composites/RecipeCard";
import AutocompleteSearch from "./utility/AutocompleteSearch";

export default function DataDisplay(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        width: "70%",
        mx: "auto",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        p: 2,
      }}
    >
      {!(props.data && props.data.length > 0) ? (
        <Alert severity="warning" sx={{ p: 4 }}>
          <AlertTitle>Error</AlertTitle>
          Database returned an empty list.{" "}
          <strong>Please add data to the database.</strong>
        </Alert>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              pb: 2,
            }}
          >
            <AutocompleteSearch
              autocompleteOptions={props.data.map((recipe) => recipe.title)}
            />
          </Box>
          <Grid container spacing={12} justifyContent="center">
            {props.data.map((recipe, index) => {
              return (
                <Grid key={`recipe-${index}`} item>
                  <RecipeCard {...recipe} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}
