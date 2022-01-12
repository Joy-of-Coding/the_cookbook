import { useState } from "react";
import {
  IconButton,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  Paper,
} from "@mui/material";
import RecipeCardModal from "./RecipeCardModal";
import StarIcon from "@mui/icons-material/Star";
import CancelIcon from "@mui/icons-material/Cancel";

export default function RecipeCard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [starred, setStarred] = useState(false);
  let borderStyle = starred ? "primary.main" : "transparent";

  return (
    <Card
      sx={{
        maxWidth: 345,
        border: 3,
        borderColor: borderStyle,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image={props.img_link}
          alt="card illustration"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <Paper sx={{ borderRadius: "50%" }}>
          <Tooltip title={starred ? "Un-Star" : "Star"} placement="right-start">
            <IconButton
              size="small"
              color={starred ? "error" : "primary"}
              variant="outlined"
              sx={{ border: 2 }}
              onClick={() => {
                setStarred(!starred);
              }}
            >
              {starred ? <CancelIcon /> : <StarIcon />}
            </IconButton>
          </Tooltip>
        </Paper>
      </CardActions>
      <RecipeCardModal
        isOpen={modalOpen}
        concepts={props.concepts}
        steps={props.steps}
        tips={props.tips}
        handleClose={() => {
          setModalOpen(false);
        }}
      />
    </Card>
  );
}
