import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteSearch({
  autocompleteOptions,
  value,
  onChange,
  inputValue,
  onInputChange,
}) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={value}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        id="autocomplete-search"
        freeSolo
        options={autocompleteOptions}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </Stack>
  );
}
