import {
  Grid,
  Box,
  Paper,
  Container,
  LinearProgress,
  Button,
  Modal,
} from "@mui/material";
import { useState } from "react";
import RecipeCard from "./composites/RecipeCard";
import AutocompleteSearch from "./utility/AutocompleteSearch";
import RecipeCreationForm from "./composites/forms/RecipeCreationForm";

export default function DataDisplay({ data, loading, errors }) {
  const [enteredQuery, setEnteredQuery] = useState(""); // value the user has entered into the box (by pressing enter)
  const [inputValue, setInputValue] = useState(""); // the string currently in the input box (updated without the user formally submitting it via enter)

  const [inputModalOpen, setInputModalOpen] = useState(false);
  const handleOpen = () => setInputModalOpen(true);
  const handleClose = () => setInputModalOpen(false);

  return (
    <>
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
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: -4,
          }}
        >
          <Paper>
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

          <Button
            sx={{ ml: 2 }}
            variant="contained"
            color="secondary"
            onClick={handleOpen}
          >
            Add New
          </Button>
        </Container>
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
      <Modal
        open={inputModalOpen}
        onClose={handleClose}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RecipeCreationForm />
      </Modal>
    </>
  );
}
