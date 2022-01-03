import { Stack, Paper } from "@mui/material";

export default function RecipeDebuggingTips(props) {
  return (
    <Stack spacing={4}>
      {props.tips.map((tip, index) => {
        return (
          <Paper
            elevation={1}
            sx={{ px: 4, py: 2 }}
            key={`recipe-tip-${index}`}
          >
            {" "}
            {tip.content}
          </Paper>
        );
      })}
    </Stack>
  );
}
