import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function RecipeConcepts(props) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Paper>
      <List sx={{ width: "100%", bgcolor: "background.paper", py: 0 }}>
        {props.concepts.map((concept, index) => {
          const labelId = `recipe-concept-${concept.title}`;

          const learning_url =
            concept.learning_link.indexOf("http://") === 0 ||
            concept.learning_link.indexOf("https://") === 0
              ? concept.learning_link
              : "https://" + concept.learning_link;

          return (
            <>
              <ListItem
                key={concept.title}
                secondaryAction={
                  <IconButton
                    edge="end"
                    color="info"
                    aria-label="Learn"
                    href={learning_url}
                  >
                    <SchoolIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(index)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={concept.title} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Paper>
  );
}
