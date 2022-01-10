import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteSearch({ autocompleteOptions }) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="autocomplete-search"
        freeSolo
        options={autocompleteOptions}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </Stack>
  );
}
