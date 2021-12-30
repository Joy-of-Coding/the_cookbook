import { Chip, Container } from "@mui/material";

export default function DataDisplay(props) {
  return (
    <Container>
      <ul sx={{ display: "flex" }} style={{ minHeight: "80vh" }}>
        {props.data.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Chip label={recipe.name} sx={{ my: 2, px: 3, py: 1 }} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
