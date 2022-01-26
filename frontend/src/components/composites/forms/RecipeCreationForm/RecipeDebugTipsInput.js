import { Chip } from "@mui/material";
import ListInput from "../../../ListInput";

export default function RecipeDebugTipsInput() {
  return (
    <ListInput
      type="tip"
      fields={["content"]}
      component={({ content }) => (
        <Chip
          sx={{ my: 1 }}
          label={content}
          onDelete={() => console.log("delete TODO")}
        />
      )}
    />
  );
}
