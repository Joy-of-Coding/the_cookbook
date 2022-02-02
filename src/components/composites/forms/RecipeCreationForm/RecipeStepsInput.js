import { Chip } from "@mui/material";
import ListInput from "../../../ListInput";

export default function RecipeStepsInput() {
  return (
    <ListInput
      type="step"
      fields={["title", "content"]}
      component={({ title, content }) => (
        <Chip
          sx={{ my: 1 }}
          label={title}
          onDelete={() => console.log("delete TODO")}
        />
      )}
    />
  );
}
