import { Grid, Box, Paper, LinearProgress } from "@mui/material";
import { useState } from "react";
import RecipeCard from "./composites/RecipeCard";
import AutocompleteSearch from "./utility/AutocompleteSearch";

export default function DataDisplay({ data, loading, errors }) {
  const [enteredQuery, setEnteredQuery] = useState(""); // value the user has entered into the box (by pressing enter)
  const [inputValue, setInputValue] = useState(""); // the string currently in the input box (updated without the user formally submitting it via enter)

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
        border: 2,
        borderColor: "primary.main",
        borderRadius: 4,
        marginTop: "42px",
      }}
    >
      {loading && <LinearProgress sx={{ width: "100%" }} />}
      <Paper
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: -4,
          bgcolor: "white",
        }}
      >
        <AutocompleteSearch
          value={enteredQuery}
          onChange={(event, newValue) => {
            setEnteredQuery(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newValue) => {
            setInputValue(newValue);
          }}
          autocompleteOptions={data.map((recipe) => recipe.title)}
        />
      </Paper>
      <Paper
        sx={{
          height: "600px",
          width: "95%",
          m: "2%",
          overflowY: "scroll",
        }}
      >
        <Grid container spacing={4} justifyContent="space-around" padding={4}>
          {data
            .filter((recipe) =>
              recipe.title.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((recipe, index) => {
              return (
                <Grid key={`recipe-${index}`} item>
                  <RecipeCard {...recipe} />
                </Grid>
              );
            })}
        </Grid>
      </Paper>
    </Box>
  );
}
