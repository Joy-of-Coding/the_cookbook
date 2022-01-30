import { Chip } from "@mui/material";
import ListInput from "../../../ListInput";

export default function RecipeConceptsInput() {
  return (
    <ListInput
      type="concept"
      fields={["title", "learning link"]}
      component={({ title, learningLink }) => (
        <Chip
          sx={{ my: 1 }}
          label={title}
          onDelete={() => console.log("delete TODO")}
        />
      )}
    />
  );
}
