import { Stack, Paper } from "@mui/material";

export default function RecipeDebuggingTips(props) {
  return (
    <Stack spacing={4}>
      <Paper elevation={1} sx={{ px: 4, py: 2 }}>
        {" "}
        When building new components, start by copy and pasting an official MUI
        component, and then customize it step by step!
      </Paper>
      <Paper elevation={1} sx={{ px: 4, py: 2 }}>
        {" "}
        Make sure to use the MUI sx prop wherever possible to style your
        application. Stylesheets should be sparingly used, as this will help
        keep your code base clean and free of confusion.
      </Paper>
    </Stack>
  );
}
