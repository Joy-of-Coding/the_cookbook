import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useAuthContext } from "../hooks/AuthContext";

export default function Profile() {
  const auth = useAuthContext();

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
        <h1>Profile</h1>
        <List sx={{ textAlign: "center" }}>
          <ListItem>
            <ListItemText primary={"Username: " + auth.userData.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Email : " + auth.userData.email} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                "First Name: " +
                (!auth.userData.fname ? "None Specified" : auth.userData.fname)
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                "Last Name: " +
                (!auth.userData.lname ? "None Specified" : auth.userData.lname)
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
