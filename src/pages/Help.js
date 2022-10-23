import { Box } from "@mui/material";

export default function Help() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <h1>Help</h1>
        This is future help page!!
      </Box>
    </Box>
  );
}
