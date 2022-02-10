import { Paper, Typography } from "@mui/material";

export default function Footer(props) {
  return (
    <Paper
      sx={{
        width: 1,
        minHeight: "180px",
        bgcolor: "#f8f8ff",
        borderTop: 4,
        borderColor: "#EEEEFF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        position: "fixed",
      }}
    >
      <Typography variant="h5" color="#b6b6db">
        © 2022 Joy of Coding
      </Typography>
    </Paper>
  );
}
