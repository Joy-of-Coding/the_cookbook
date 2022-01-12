import { Grid, Box, Alert, AlertTitle, Paper } from "@mui/material";
import RecipeCard from "./composites/RecipeCard";
import AutocompleteSearch from "./utility/AutocompleteSearch";

export default function DataDisplay(props) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        width: "70%",
        mx: "auto",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        border: 2,
        borderColor: "primary.main",
        borderRadius: 4,
        marginTop: "42px",
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
          <Paper
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: -4,
              bgcolor: "white",
            }}
          >
            <AutocompleteSearch
              autocompleteOptions={props.data.map((recipe) => recipe.title)}
            />
          </Paper>
          <Paper sx={{ height: "600px", overflowY: "scroll", m: "32px" }}>
            <Grid
              container
              spacing={4}
              justifyContent="space-around"
              padding={4}
            >
              {props.data.map((recipe, index) => {
                return (
                  <>
                    <Grid key={`recipe-${index}`} item>
                      <RecipeCard {...recipe} />
                    </Grid>
                    <Grid key={`recipe-${index}`} item>
                      <RecipeCard {...recipe} />
                    </Grid>
                    <Grid key={`recipe-${index}`} item>
                      <RecipeCard {...recipe} />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Paper>
        </>
      )}
    </Paper>
  );
}
