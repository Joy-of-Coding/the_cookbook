import { Box, Typography } from "@mui/material";

export default function Footer(props) {
  return (
    <Box
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
      }}
    >
      <Typography variant="h5" color="#b6b6db">
        © 2022 Joy of Coding
      </Typography>
    </Box>
  );
}
