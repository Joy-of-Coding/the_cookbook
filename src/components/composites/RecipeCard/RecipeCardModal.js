import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import RecipeConcepts from "./RecipeConcepts";
import RecipeDebuggingTips from "./RecipeDebuggingTips";
import RecipeSteps from "./RecipeSteps";

export default function RecipeCardModal(props) {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={{ maxWidth: "60%" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardContent>
          <Typography sx={{ pb: 2 }} variant="h4" component="div">
            Important Concepts
          </Typography>
          <RecipeConcepts concepts={props.concepts} />
          <Typography sx={{ py: 2 }} variant="h4" component="div">
            Implementation Steps
          </Typography>
          <RecipeSteps steps={props.steps} />
          <Typography sx={{ py: 2 }} variant="h4" component="div">
            Debugging Tips
          </Typography>
          <RecipeDebuggingTips tips={props.tips} />
        </CardContent>
        <CardActions>
          <Button size="small" color="success" variant="contained">
            Mark Done
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
