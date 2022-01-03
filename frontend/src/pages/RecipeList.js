import { useState, useEffect } from "react";
import DataDisplay from "../components/DataDisplay";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipe")
      .then((response) => {
        if (response.status > 400) {
          return setRecipes(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <DataDisplay data={recipes} />
    </div>
  );
}
