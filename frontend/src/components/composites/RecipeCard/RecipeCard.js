import { useState } from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import RecipeCardModal from "./RecipeCardModal";

export default function RecipeCard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          setModalOpen(true);
          console.log(modalOpen);
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image="https://mui.com/static/branding/store-templates/template-dark5.jpeg"
          alt="?"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Using MUI in your React application.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn how to use the Material UI library to build your frontend and
            create professional, minimalist, and stylish interface designs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" color="primary" variant="contained">
          Bookmark
        </Button>
        <Tooltip title="In Progress">
          <CircularProgress variant="determinate" value={50} sx={{ p: 1 }} />
        </Tooltip>
      </CardActions>
      <RecipeCardModal
        isOpen={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
      />
    </Card>
  );
}
