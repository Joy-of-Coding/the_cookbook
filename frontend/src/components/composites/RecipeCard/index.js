import { useState } from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RecipeCardModal from "./RecipeCardModal";

export default function RecipeCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" color="primary" variant="contained">
          Bookmark
        </Button>
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
